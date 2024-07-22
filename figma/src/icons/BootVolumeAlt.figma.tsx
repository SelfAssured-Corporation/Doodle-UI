import figma from '@figma/code-connect'
import { BootVolumeAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BootVolumeAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1188',

  {
    imports: ["import { BootVolumeAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BootVolumeAlt size={props.size} />,
  },
)
