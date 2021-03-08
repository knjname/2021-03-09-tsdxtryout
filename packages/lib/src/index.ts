export const sum = (a: number, b: number) => {
  console.log('This function SHOULD BE incldued by treeshaking.');
  return a + b;
};

export const notUsedSum = (a: number, b: number) => {
  console.log('This function SHOULD NOT BE included by treeshaking.');
  return a + b;
};
