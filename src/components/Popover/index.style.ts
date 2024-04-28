import styled, { css } from 'styled-components'

export const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const Container = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  z-index: 2;
`

export const PopoverContainer = styled.div.attrs<{ placement: string }>({
  className: 'popover-card-container',
})`
  position: absolute;
  ${(props) =>
    ({
      top: css`
        bottom: 33px;
      `,
      topLeft: css`
        left: 0;
        bottom: 33px;
      `,
      topRight: css`
        right: 0;
        bottom: 33px;
      `,
      bottom: css`
        top: 33px;
      `,
    })[props.placement]}
  margin: 0 auto;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
  border-radius: 32px;
  overflow: hidden;
  z-index: 10;
  transition: var(--transition);
  &::before {
    content: '';
    position: absolute;
    top: 250px;
    left: 174px;
    border-style: solid;
    border-width: 26px 26px 0;
    border-color: var(--popover-color) transparent;
    display: block;
    width: 0;
    z-index: 0;
  }
`
