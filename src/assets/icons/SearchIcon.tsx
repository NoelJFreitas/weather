import {IconBase} from '@components';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

export function SearchIcon({color = 'black', size = 20}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 -0.5 25 25" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.029 16.5295L19.5 19.0005"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
