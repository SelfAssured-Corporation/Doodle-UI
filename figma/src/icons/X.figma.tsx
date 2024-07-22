import figma from '@figma/code-connect'
import { X } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  X,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9626-694',

  {
    imports: ["import { X } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <X size={props.size} />,
  },
)
