function insertionSort(array) {
    var n = array.length;
    //iterate on the array 
        for (let i = 1; i < n; i++) {
            let current = array[i];
            let j = i-1; 
            while ((j > -1) && (current < array[j])) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current;
        }
    return array;
}