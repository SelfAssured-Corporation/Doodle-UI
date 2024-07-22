import figma from '@figma/code-connect'
import { Partnership } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Partnership,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9427-11',

  {
    imports: ["import { Partnership } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Partnership size={props.size} />,
  },
)
