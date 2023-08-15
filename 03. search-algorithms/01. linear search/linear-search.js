function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return null;
}

const array = [5, 3, 8, 2, 4];
const targetValue = 8;
const index = linearSearch(array, targetValue);

if (index !== null) {
  console.log(`Element found ${index}`);
} else {
  console.log("Did not found");
}
