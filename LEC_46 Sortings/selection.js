const arr = [3,0,1,6,4,8,9,2,5]

for(i = 0; i < arr.length; i++) {
    idx = -1;
    mini = Number.MAX_VALUE;
    for(j = i; j < arr.length; j++) {
        if(arr[j] < mini) {
            mini = arr[j];
            idx = j;
        }
    }
    temp = arr[i];
    arr[i] = arr[idx];
    arr[idx] = temp;
}

console.log(arr);