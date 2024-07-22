import figma from '@figma/code-connect'
import { BoxLarge } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BoxLarge,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-44',

  {
    imports: ["import { BoxLarge } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BoxLarge size={props.size} />,
  },
)
