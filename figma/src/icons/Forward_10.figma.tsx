import figma from '@figma/code-connect'
import { Forward_10 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Forward_10,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35079',

  {
    imports: ["import { Forward_10 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Forward_10 size={props.size} />,
  },
)
