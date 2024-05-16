import {IconBase} from '@components';
import React from 'react';
import {Path, Svg, G} from 'react-native-svg';

export function WindIcon({color = 'black', size = 20}: IconBase) {
  return (
    <Svg fill={color} height={size} width={size} id="Icons" viewBox="0 0 32 32">
      <G>
        <Path
          d="M25,20H13c-0.6,0-1,0.4-1,1s0.4,1,1,1h12c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.2,0-2.3-0.7-2.8-1.8c-0.2-0.5-0.8-0.7-1.3-0.5
		c-0.5,0.2-0.8,0.8-0.5,1.3C21.2,28.8,23,30,25,30c2.8,0,5-2.2,5-5S27.8,20,25,20z"
        />
        <Path
          d="M30,10.5C30,6.4,26.6,3,22.5,3c-2.7,0-5.1,1.4-6.4,3.6C15.5,6.2,14.8,6,14,6c-1.6,0-3.1,1-3.7,2.5c-0.2,0.5,0,1.1,0.5,1.3
		s1.1,0,1.3-0.5C12.5,8.5,13.2,8,14,8c1.1,0,2,0.9,2,2s-0.9,2-2,2H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c2.2,0,4-1.8,4-4
		c0-0.7-0.2-1.3-0.5-1.8c0.9-1.9,2.8-3.2,5-3.2c3,0,5.5,2.5,5.5,5.5S25.5,16,22.5,16H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h19.5
		C26.6,18,30,14.6,30,10.5z"
        />
        <Path d="M9,20H6c-0.6,0-1,0.4-1,1s0.4,1,1,1h3c0.6,0,1-0.4,1-1S9.6,20,9,20z" />
      </G>
    </Svg>
  );
}