/**
 * Add two numbers
 * 
 * @description This function adds two numbers
 * 
 * @param {number} a first number
 * @param {number} b second number
 * @return {number} sum of a and b
 */
export function add(a: number, b: number): number {
  if (__DEV__) {
    console.log('Adding', a, 'and', b);
  }
  return a + b;
}
