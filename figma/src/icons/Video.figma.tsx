import figma from '@figma/code-connect'
import { Video } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Video,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9603-69',

  {
    imports: ["import { Video } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Video size={props.size} />,
  },
)
