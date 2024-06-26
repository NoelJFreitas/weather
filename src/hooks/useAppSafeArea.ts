import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppTheme} from './useAppTheme';

export function useAppSafeArea() {
  const {bottom, top} = useSafeAreaInsets();
  const {spacing} = useAppTheme();
  return {
    top: Math.max(top, spacing.s5),
    bottom: Math.max(bottom, spacing.s20),
  };
}
