import type { Preset } from '@pandacss/types'
import { breakpoints } from './breakpoints'
import { containerSizes } from './containers'
import { keyframes } from './keyframes'
import { tokens } from './tokens'
import { textStyles } from './typography'

const definePreset = <T extends Preset>(config: T) => config

export const preset = definePreset({
  name: 'preset-trullion',
  theme: {
    keyframes,
    breakpoints,
    tokens,
    textStyles,
    containerSizes,
  },
})

export default preset
