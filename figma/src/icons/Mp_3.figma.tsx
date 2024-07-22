import figma from '@figma/code-connect'
import { Mp_3 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Mp_3,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1152',

  {
    imports: ["import { Mp_3 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Mp_3 size={props.size} />,
  },
)
