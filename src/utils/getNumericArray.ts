const getNumericArray = (n?: number) => {
  let i = 0;
  return new Array(n || 7).fill('').map(() => i++)
}

export default getNumericArray