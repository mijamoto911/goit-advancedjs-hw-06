/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T extends (string | number)[]>(): Promise<T> {
  return new Promise<T>(resolve => {
    const data: T = ['Text', 50] as T;
    resolve(data);
  });
}

getPromise<(string | number)[]>().then(data => {
  console.log(data);
});

export {};
