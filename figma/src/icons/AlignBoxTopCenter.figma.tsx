import figma from '@figma/code-connect'
import { AlignBoxTopCenter } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AlignBoxTopCenter,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-8',

  {
    imports: ["import { AlignBoxTopCenter } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AlignBoxTopCenter size={props.size} />,
  },
)
