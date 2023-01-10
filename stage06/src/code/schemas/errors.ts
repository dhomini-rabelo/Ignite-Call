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
    `Este campo deve ser no mínimo ${minValueNumber}`,
  maxValue: (maxValueNumber: number) =>
    `Este campo deve ser no máximo ${maxValueNumber}`,
} as const
