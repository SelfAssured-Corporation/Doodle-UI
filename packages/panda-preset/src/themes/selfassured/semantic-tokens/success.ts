import type { Prominence, SemanticToken } from '../../../theme/semantic-tokens'
import { formatSemanticTokenValue } from '../../../tokens'

/**
 * This module is a collection of success tokens that are used to generate the theme.
 * @module successTokens
 */

type Prominences = Exclude<Prominence, 300>

export interface ContractSuccessTokens {
  readonly success: {
    readonly border: {
      readonly initial: object
    }
    readonly bg: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly ghost: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly surface: {
      readonly initial: object
      readonly 100: object
      readonly 200: object
    }
    readonly text: {
      readonly [P in Prominences]: object
    }
  }
}

export const contractSuccessTokens: ContractSuccessTokens = {
  success: {
    border: {
      initial: {},
    },

    bg: {
      initial: {},
      hover: {},
      active: {},
    },

    ghost: {
      initial: {},
      hover: {},
      active: {},
    },

    surface: {
      initial: {},
      100: {},
      200: {},
    },

    text: {
      initial: {},
      100: {},
      200: {},
      inverse: {},
      static: {},
    },
  },
}

export interface SuccessTokens {
  readonly success: {
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly bg: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly ghost: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly surface: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
    readonly text: {
      readonly [P in Prominences]: SemanticToken
    }
  }
}

export const successTokens: SuccessTokens = {
  success: {
    border: {
      initial: formatSemanticTokenValue(
        'border.success.initial',
        'selfAssured',
      ),
    },

    bg: {
      initial: formatSemanticTokenValue(
        'background.success.initial',
        'selfAssured',
      ),
      hover: formatSemanticTokenValue(
        'background.success.hover',
        'selfAssured',
      ),
      active: formatSemanticTokenValue(
        'background.success.active',
        'selfAssured',
      ),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.success.initial', 'selfAssured'),
      hover: formatSemanticTokenValue('ghost.success.hover', 'selfAssured'),
      active: formatSemanticTokenValue('ghost.success.active', 'selfAssured'),
    },

    surface: {
      initial: formatSemanticTokenValue(
        'surface.success.initial',
        'selfAssured',
      ),
      100: formatSemanticTokenValue('surface.success.100', 'selfAssured'),
      200: formatSemanticTokenValue('surface.success.200', 'selfAssured'),
    },

    text: {
      initial: formatSemanticTokenValue('text.success.initial', 'selfAssured'),
      100: formatSemanticTokenValue('text.success.100', 'selfAssured'),
      200: formatSemanticTokenValue('text.success.200', 'selfAssured'),
      inverse: formatSemanticTokenValue('text.success.inverse', 'selfAssured'),
      static: formatSemanticTokenValue('text.success.static', 'selfAssured'),
    },
  },
}
