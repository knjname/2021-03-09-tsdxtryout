export const sum = (a: number, b: number) => {
  console.log('This function SHOULD BE included by treeshaking.');
  return a + b;
};

export const notUsedSum = (a: number, b: number) => {
  console.log('This function SHOULD NOT BE included by treeshaking.');
  return a + b;
};
