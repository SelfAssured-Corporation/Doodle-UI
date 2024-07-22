import figma from '@figma/code-connect'
import { WatsonHealth3DCurveManual } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealth3DCurveManual,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9553-1951',

  {
    imports: ["import { WatsonHealth3DCurveManual } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealth3DCurveManual size={props.size} />,
  },
)
