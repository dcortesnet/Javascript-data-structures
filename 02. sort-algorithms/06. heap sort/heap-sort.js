function heapSort(arr) {
  const n = arr.length;

  // Construir el heap máximo
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extraer elementos uno por uno del heap
  for (let i = n - 1; i > 0; i--) {
    // Mover el elemento actual al final
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // Llamar a heapify en el subárbol reducido
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    heapify(arr, n, largest);
  }
}

const unsortedArray = [5, 3, 8, 2, 4];
const sortedArray = heapSort(unsortedArray);
console.log("Sorted array:", sortedArray);
