import figma from '@figma/code-connect'
import { MobileCheck } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  MobileCheck,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-53',

  {
    imports: ["import { MobileCheck } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <MobileCheck size={props.size} />,
  },
)
