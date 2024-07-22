import figma from '@figma/code-connect'
import { Calendar } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Calendar,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9619-952',

  {
    imports: ["import { Calendar } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Calendar size={props.size} />,
  },
)
