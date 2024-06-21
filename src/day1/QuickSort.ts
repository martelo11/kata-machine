function sort(arr: number[], low: number, high: number): void {
  if (low >= high) {
    return;
  }
  let pivitIdx = partition(arr, low, high);
  sort(arr, low, pivitIdx - 1);
  sort(arr, pivitIdx + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
  let pivot = arr[high];
  let idx = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      idx++;
      let temp = arr[idx];
      arr[idx] = arr[j];
      arr[j] = temp;
    }
  }
  idx++;
  arr[high] = arr[idx];
  arr[idx] = pivot;
  return idx;
}

export default function quick_sort(arr: number[]): void {
  sort(arr, 0, arr.length -1);
}