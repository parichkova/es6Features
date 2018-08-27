function quickSort(arr, startIndex, endIndex) {
    let len = arr.len;
    let pivot = endIndex;
    let partitionIndex = 0;

    if (startIndex < endIndex) {
        pivot = endIndex;
        partitionIndex = partition(arr, pivot, startIndex, endIndex);
        quickSort(arr, startIndex, partitionIndex-1);
        quickSort(arr, partitionIndex+1, endIndex);
    }

    return arr;
}

function partition (arr, pivot, startIndex, endIndex) {
    let pivotValue = pivot;
    let partitionIndex = startIndex;

    for (let initialIndex = startIndex; initialIndex < endIndex; initialIndex++) {
        if (arr[initialIndex] < pivotValue) {
            swap(arr, initialIndex, partitionIndex);
            partitionIndex++;
        }
    }

    swap(arr, endIndex, partitionIndex);

    return partitionIndex;
}

function swap(arr, indexToChange, partitionIndex) {
    console.log([arr[indexToChange], arr[partitionIndex]], 'before');
    [arr[indexToChange], arr[partitionIndex]] = [arr[partitionIndex], arr[indexToChange]];
    
    console.log([arr[indexToChange], arr[partitionIndex]], 'after');
}