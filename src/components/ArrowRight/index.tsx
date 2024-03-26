import React, { FC } from 'react';

interface IconProps {
  width?: string,
  height?: string,
  color?: string
}
const ArrowRight: FC<IconProps> = ({
  width = '24',
  height = '24',
  color = 'currentColor',
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.87852 9.49956L6.16602 5.78706L7.22652 4.72656L11.9995 9.49956L7.22652 14.2726L6.16602 13.2121L9.87852 9.49956Z" fill={color} />
    </svg>

  );
}

export default ArrowRight;
