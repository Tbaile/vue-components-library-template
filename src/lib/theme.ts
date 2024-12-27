import { useStorage } from '@vueuse/core'

// this duplication it due to `enums` being a complete mess in TypeScript
export type AvailableThemes = 'light' | 'dark'
export const themes: AvailableThemes[] = ['light', 'dark']

/**
 * Theme composable that saves the current theme in localStorage
 */
export function useTheme() {
  /**
   * Current theme
   */
  const theme = useStorage<AvailableThemes>('theme', 'light')

  return {
    theme,
  }
}
