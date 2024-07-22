import figma from '@figma/code-connect'
import { Grid } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Grid,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9602-36470',

  {
    imports: ["import { Grid } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Grid size={props.size} />,
  },
)
