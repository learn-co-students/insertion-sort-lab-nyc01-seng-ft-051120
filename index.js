function findMinAndRemove(array){
    let min = array[0]
    let index;
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i]
            index = i
        } 
    }
    array.splice(index, 1)
    return min
}

function selectionSort(array){
    let newMin;
    let sortedArray = []
    while(array.length > 0){
        newMin = findMinAndRemove(array)
        sortedArray.push(newMin)
    }
    return sortedArray
}
