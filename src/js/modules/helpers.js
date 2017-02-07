export function capitalizeFirstLetter(string) {
  console.log('capitalizeFirstLetter');
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function randomNumber() {
  console.log('randomNumber');
  return Math.random();
}

export default { capitalizeFirstLetter };
