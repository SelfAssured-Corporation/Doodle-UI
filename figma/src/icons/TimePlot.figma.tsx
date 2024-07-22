import figma from '@figma/code-connect'
import { TimePlot } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TimePlot,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1146',

  {
    imports: ["import { TimePlot } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TimePlot size={props.size} />,
  },
)
