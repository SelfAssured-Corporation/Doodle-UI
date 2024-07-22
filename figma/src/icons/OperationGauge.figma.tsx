import figma from '@figma/code-connect'
import { OperationGauge } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  OperationGauge,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9626-685',

  {
    imports: ["import { OperationGauge } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <OperationGauge size={props.size} />,
  },
)
