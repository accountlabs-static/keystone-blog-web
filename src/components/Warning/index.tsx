import React, { FC } from 'react';

interface IconProps {
  width?: string,
  height?: string,
  color?: string
}

const Warning: FC<IconProps> =({
  width = '24',
  height = '24',
  color = 'currentColor',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.5C17.7968 1.5 22.5 6.19664 22.5 12C22.5 17.8034 17.8034 22.5 12 22.5C6.19664 22.5 1.5 17.8034 1.5 12C1.5 6.19664 6.2032 1.5 12 1.5ZM13.3109 15.9391H10.6891V18.5609H13.3109V15.9391ZM13.3109 5.43914H10.6891V13.3109H13.3109V5.43914Z"
        fill={color}
      />
    </svg>
  );
}

export default Warning;