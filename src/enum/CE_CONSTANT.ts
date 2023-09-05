export const CE_CONSTANT = {
  METHOD: 'GET',
  PROTOCOL: 'http',
  HOSTNAME: 'localhost',
  PORT: undefined,
} as const;

/* eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-redeclare */
export type CE_CONSTANT = (typeof CE_CONSTANT)[keyof typeof CE_CONSTANT];
