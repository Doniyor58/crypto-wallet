// eslint-disable-next-line no-promise-executor-return
export const wait = (ms = 1000): Promise<void> => new Promise((resolve) => setTimeout(() => resolve(), ms));
