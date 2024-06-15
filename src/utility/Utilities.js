export const capitalizeFirstLetter = (string) => {
  return [...string][0].toUpperCase() + [...string.toLowerCase()].slice(1).join('')
}

