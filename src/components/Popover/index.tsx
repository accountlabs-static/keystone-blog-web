import React, {
  FC,
  ReactElement,
  ReactNode,
  cloneElement,
  createElement,
  useRef,
  useState,
} from 'react';
import { useVisibleTransition } from '@/hooks/useVisibleTransition';
import { Container, PopoverContainer } from './index.style';


interface PopoverProps {
  content: ReactNode,
  children: ReactElement,
  placement?: string,
  transition?: string,
  trigger?: string,
  defaultOpen?: boolean,
}
const Popover: FC<PopoverProps> = ({
  content,
  children,
  placement = 'bottom',
  transition = 'slide bottom',
  trigger = 'hover',
  defaultOpen = false,
}) => {
  const popoverRef = useRef<HTMLDivElement>();

  const [popoverOpen, setPopoverOpen] = useState(defaultOpen);

  const { visible, className: transitionClassName } = useVisibleTransition(
    popoverOpen,
    transition,
    popoverRef,
  );

  function toggleVisible() {
    setPopoverOpen(!visible);
  }

  function onClose() {
    if (visible) {
      toggleVisible();
    }
  }

  function onHiddenPopover() {
    if (visible) {
      maskTimer = setTimeout(() => {
        onClose();
      }, 100);
    }
  }

  function onShowPopover() {
    clearTimeout(maskTimer);
    toggleVisible();
  }

  let maskTimer = null;

  return (
    <>
      <Container>
        {visible &&
          createElement(
            PopoverContainer,
            {
              tabIndex: 2,
              ref: popoverRef,
              className: transitionClassName,
              placement,
              [{ hover: 'onMouseEnter', click: 'onBlur' }[trigger]]() {
                clearTimeout(maskTimer);
              },
              [{ click: 'onFocus' }[trigger]]() {
                onHiddenPopover();
              },
              [{ hover: 'onMouseLeave' }[trigger]]() {
                onHiddenPopover();
              },
            },
            content,
          )}
        {cloneElement(children, {
          tabIndex: 1,
          [{ hover: 'onMouseEnter', click: 'onClick' }[trigger]]() {
            if (trigger === 'click') {
              if (visible) {
                onHiddenPopover();
              } else {
                onShowPopover();
              }
            } else if (trigger === 'hover') {
              onShowPopover();
            }
          },
          [{ hover: 'onMouseLeave', click: 'onBlur' }[trigger]]() {
            onHiddenPopover();
          },
        })}
      </Container>
    </>
  );
}

export default Popover;
