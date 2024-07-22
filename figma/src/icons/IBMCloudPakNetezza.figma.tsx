import figma from '@figma/code-connect'
import { IBMCloudPakNetezza } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudPakNetezza,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-75',

  {
    imports: ["import { IBMCloudPakNetezza } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudPakNetezza size={props.size} />,
  },
)
