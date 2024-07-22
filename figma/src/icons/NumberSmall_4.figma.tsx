import figma from '@figma/code-connect'
import { NumberSmall_4 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NumberSmall_4,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-1023',

  {
    imports: ["import { NumberSmall_4 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NumberSmall_4 size={props.size} />,
  },
)
