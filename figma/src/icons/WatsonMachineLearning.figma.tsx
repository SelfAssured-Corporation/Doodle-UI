import figma from '@figma/code-connect'
import { WatsonMachineLearning } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonMachineLearning,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9614-3313',

  {
    imports: ["import { WatsonMachineLearning } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonMachineLearning size={props.size} />,
  },
)
