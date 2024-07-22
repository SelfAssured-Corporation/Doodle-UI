import figma from '@figma/code-connect'
import { Touch1DownFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Touch1DownFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9632-14',

  {
    imports: ["import { Touch1DownFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Touch1DownFilled size={props.size} />,
  },
)
