/* eslint-disable */

export enum ErrorMessages {
  REQUIRED = 'Preencha este campo',
  INVALID_VALUE = 'Valor inválido',
  INVALID_EMAIL = 'Email inválido',
}

/* eslint-enable */

export const DynamicErrorMessage = {
  minLength: (minLengthValue: number) =>
    `Use mais que ${minLengthValue} letras`,
  maxLength: (maxLengthValue: number) =>
    `Use menos que ${maxLengthValue} letras`,
  minValue: (minValueNumber: number) =>
    `O valor mínimo deve ser ${minValueNumber}`,
  maxValue: (maxValueNumber: number) =>
    `O valor máximo deve ser ${maxValueNumber}`,
} as const
