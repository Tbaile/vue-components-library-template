import { describe, expect, it } from 'vitest'
import { useTheme } from '../../src/lib/theme'

describe('theme composable', () => {
  it('is light by default', () => {
    const { theme } = useTheme()
    expect(theme.value).toBe('light')
  })
})
