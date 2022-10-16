// 快速排序
function qucikSort(nums) {
  qucikSortArr(0, nums.length - 1, nums)
}

function qucikSortArr(start, end, nums) {
  if (start < end) {
    const mid = sort(start, end, nums)
    qucikSortArr(start, mid - 1, nums)
    qucikSortArr(mid + 1, end, nums)
  }
}

function sort(start, end, arr) {
  let base = arr[start]
  let left = start
  let right = end
  while (left !== right) {
    while (right > left && arr[right] >= base) {
      right--
    }
    arr[left] = arr[right]
    while (right > left && arr[left] <= base) {
      left++
    }
    arr[right] = arr[left]
  }
  arr[left] = base
  return left
}
// 插入排序
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let j = i
    let temp = nums[i]
    while (temp < nums[j - 1] && j > 0) {
      nums[j] = nums[j - 1]
      j--
    }
    nums[j] = temp
  }
}
// 希尔排序
function shellSort(arr) {
  let gap = Math.floor(arr.length / 2)

  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let j = i
      let temp = arr[i]
      while (arr[j - gap] > temp && j > gap - 1) {
        arr[j] = arr[j - gap]
        j -= gap
      }
      arr[j] = temp
    }
    gap = Math.floor(gap / 2)
  }

}

// 冒泡排序
function bubleSort(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j + 1] < nums[j]) {
        let temp = nums[j + 1]
        nums[j + 1] = nums[j]
        nums[j] = temp
      }
    }
  }
}
// 选择排序
function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = i
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j
      }
    }
    let temp = nums[i]
    nums[i] = nums[min]
    nums[min] = temp
  }
}
const nums = [18, 299, 9, 48, 78, 45, 887, 908, 36, 71]
// qucikSort(nums)
// insertionSort(nums)
// shellSort(nums)
// bubleSort(nums)
selectionSort(nums)
console.log(nums)