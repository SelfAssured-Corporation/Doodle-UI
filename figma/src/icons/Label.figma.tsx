import figma from '@figma/code-connect'
import { Label } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Label,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-270',

  {
    imports: ["import { Label } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Label size={props.size} />,
  },
)
