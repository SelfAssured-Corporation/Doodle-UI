import figma from '@figma/code-connect'
import { NavaidMilitary } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NavaidMilitary,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1081',

  {
    imports: ["import { NavaidMilitary } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NavaidMilitary size={props.size} />,
  },
)
