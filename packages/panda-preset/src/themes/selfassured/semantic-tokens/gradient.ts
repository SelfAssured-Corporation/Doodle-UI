/**
 * This module is a collection of gradient tokens palette for the selfAssured theme.
 * @module gradientTokens
 */

import type { SemanticToken } from '../../../theme/semantic-tokens/types'
import { formatSemanticTokenValue } from '../../../tokens'

export interface GradientTokens {
  readonly gradient: {
    readonly ['charon-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['charon-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['nyx-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['nyx-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['amphiaraus-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['amphiaraus-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['styx-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['styx-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['thanatos-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['thanatos-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['hades-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['hades-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['asphodel-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['asphodel-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
  }
}

export const gradientTokens: GradientTokens = {
  gradient: {
    'charon-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.charon-light.text',
          'selfAssured',
        ),
      },
    },
    'charon-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.charon-dark.text',
          'selfAssured',
        ),
      },
    },
    'nyx-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.nyx-light.text',
          'selfAssured',
        ),
      },
    },
    'nyx-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.nyx-dark.text',
          'selfAssured',
        ),
      },
    },
    'amphiaraus-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.amphiaraus-light.text',
          'selfAssured',
        ),
      },
    },
    'amphiaraus-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.amphiaraus-dark.text',
          'selfAssured',
        ),
      },
    },
    'styx-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.styx-light.text',
          'selfAssured',
        ),
      },
    },
    'styx-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.styx-dark.text',
          'selfAssured',
        ),
      },
    },
    'thanatos-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.thanatos-light.text',
          'selfAssured',
        ),
      },
    },
    'thanatos-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.thanatos-dark.text',
          'selfAssured',
        ),
      },
    },
    'hades-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.hades-light.text',
          'selfAssured',
        ),
      },
    },
    'hades-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.hades-dark.text',
          'selfAssured',
        ),
      },
    },
    'asphodel-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.asphodel-light.text',
          'selfAssured',
        ),
      },
    },
    'asphodel-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.asphodel-dark.text',
          'selfAssured',
        ),
      },
    },
  },
}
