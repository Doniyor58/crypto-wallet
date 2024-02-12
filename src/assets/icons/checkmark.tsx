/* eslint-disable max-len */
import React, { FC } from 'react';

interface LogoutIconProps {
  color: string,
  width: string,
  height: string
}

const CheckmarkIcon: FC<LogoutIconProps> = ({
  color,
  width = 16,
  height = 18,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 13 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.504 8.54657C4.784 8.82657 5.244 8.81657 5.514 8.52657L11.9911 1.54117C12.2311 1.27117 12.2111 0.861173 11.9511 0.621173C11.6911 0.381173 11.2711 0.391172 11.0311 0.661172L4.984 7.18657L1.13924 3.39138C0.889238 3.14138 0.469238 3.14138 0.219238 3.39138C-0.0307617 3.64138 -0.0307617 4.06138 0.219238 4.31138L4.504 8.54657Z"
      fill={color}
    />
  </svg>

);

export default React.memo(CheckmarkIcon);
