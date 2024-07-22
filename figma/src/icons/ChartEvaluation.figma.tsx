import figma from '@figma/code-connect'
import { ChartEvaluation } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartEvaluation,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-659',

  {
    imports: ["import { ChartEvaluation } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartEvaluation size={props.size} />,
  },
)
