export function doubleMutate(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] *= 2
  }
  return numbers
}
