import figma from '@figma/code-connect'
import { IBMWatsonTextToSpeech } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMWatsonTextToSpeech,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-115',

  {
    imports: ["import { IBMWatsonTextToSpeech } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMWatsonTextToSpeech size={props.size} />,
  },
)
