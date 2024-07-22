import figma from '@figma/code-connect'
import { StopSignFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  StopSignFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-988',

  {
    imports: ["import { StopSignFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <StopSignFilled size={props.size} />,
  },
)
