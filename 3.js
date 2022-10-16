// 快排
function sort(start, end, arr) {
    let base = arr[start]

    let left = start
    let right = end

    while (left !== right) {
        while (arr[right]>base&&right>left) {
            right--;
        }
        arr[left]=arr[right]

    }
}

// 数组的扁平化
// a=[1,2,[3,4[5,6]],7]
function flat(arr) {
    let newArr=[];
    for(let i=0;i<arr,length;i++){
        if(Array.isArray(arr[i])){
            newArr=newArr.concat(flat(arr[i]))
        }else{
            newArr.push(arr[i])
        }
    }
}

// 
