const array = [1, 2, 3, 4, 5];

const soma = array.reduce((a, b) => a + b);
console.log(soma);

const pares = array.reduce((a, b) => b % 2 === 0 ? a.concat(b) : a, []);
console.log(pares)

//-----------------------------------------------------------------------

const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const soma1 = array1.reduce((a, b) => a.reduce((a, b) => a + b, 0), 0);
console.log(soma1);

const pares1 = array1.reduce((a, b) => b.filter(n => n % 2 === 0), []);
console.log(pares1);

const array2 = [1, 2, 3, 4, 5];
const quadrados = array2.reduce((a, b) => a.concat(b * b), []);
console.log(quadrados2); 

const quadrados2 = array2.reduce((a, b, i) => ({
  ...a,
  [i]: b * b,
}), {});
console.log(quadrados);