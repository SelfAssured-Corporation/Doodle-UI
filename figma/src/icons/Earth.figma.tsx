import figma from '@figma/code-connect'
import { Earth } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Earth,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1487',

  {
    imports: ["import { Earth } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Earth size={props.size} />,
  },
)
