import figma from '@figma/code-connect'
import { Number_6 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Number_6,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-999',

  {
    imports: ["import { Number_6 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Number_6 size={props.size} />,
  },
)
