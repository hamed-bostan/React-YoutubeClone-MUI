export const capitalizeFirstLetter = (string) => {
  // return [...string][0].toUpperCase() + [...string].slice(1).join('')
  return [...string][0].toUpperCase() + [...string.toLowerCase()].slice(1).join('')
}

// Example usage
const example4 = 'hello WORLD'
console.log(capitalizeFirstLetter(example4)) // Output: Javascript