import React from 'react';
import {CloudySunIcon} from '../../assets/icons/CloudSunIcon';
import {ThemeColors} from '@theme';
import {Pressable} from 'react-native';
import {useAppTheme} from '@hooks';

const iconRegistry = {
  cloudySun: CloudySunIcon,
};

type IconNames = keyof typeof iconRegistry;
export interface IconBase {
  size?: number;
  color?: string;
}

interface IconProps {
  name: IconNames;
  size?: number;
  color?: ThemeColors;
  onPress?: () => void;
}

export function Icon({
  name,
  onPress,
  color = 'grayBlack',
  size = 25,
}: IconProps) {
  const SVGIcon = iconRegistry[name];
  const {colors} = useAppTheme();

  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}