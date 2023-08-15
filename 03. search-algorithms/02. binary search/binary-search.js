function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    }

    if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return null;
}

const sortedArray = [2, 3, 4, 5, 8];
const targetValue = 4;
const index = binarySearch(sortedArray, targetValue);

if (index !== null) {
  console.log(`Element found ${index}`);
} else {
  console.log("Did not found");
}