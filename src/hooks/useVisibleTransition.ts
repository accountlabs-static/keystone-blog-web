import { useEffect, useState } from 'react';

function getTransitionName(transition: string): string[] {
  const [anim, dir] = transition.split(' ');
  return [`${anim}-in-${dir}`, `${anim}-out-${dir}`];
}

export function useVisibleTransition(
  open = false,
  transition = 'slide bottom',
  containerRef,
  onClose? : () => {},
  defaultVisible: boolean = false,
) {
  const [visible, setVisible] = useState(defaultVisible);

  const [className, setClassName] = useState<string>('');

  const [transAnimsClassName, setTransAnimsClassName] = useState<string[]>([]);

  useEffect(() => {
    setTransAnimsClassName(getTransitionName(transition));
  }, [transition]);

  useEffect(() => {
    if (!Array.isArray(transAnimsClassName)) return;

    const className = transAnimsClassName[open ? 0 : 1];

    setClassName(className);

    if (open) {
      setVisible(true);
    } else if (!defaultVisible) {
      if (!containerRef.current) return;
      const { animationDuration } = getComputedStyle(containerRef.current);
      const delay = parseFloat(animationDuration) * 1000;
      setTimeout(() => {
        setVisible(false);
        onClose && onClose();
      }, delay);
    }
  }, [open]);

  return {
    visible,
    setVisible,
    className,
  };
}
