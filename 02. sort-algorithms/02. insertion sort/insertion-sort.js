function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
  return arr;
}

const unsortedArray = [5, 3, 8, 2, 4];
const sortedArray = insertionSort(unsortedArray);
console.log("Sorted array:", sortedArray);
