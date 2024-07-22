import figma from '@figma/code-connect'
import { DocumentMultiple_02 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DocumentMultiple_02,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1366',

  {
    imports: ["import { DocumentMultiple_02 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DocumentMultiple_02 size={props.size} />,
  },
)
