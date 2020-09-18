const n = parseInt(readLine(), 10);
    
    let count = 0;
    let result = 0;
    let arr = n.toString(2);
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] == 0) {
            count = 0;
        } else {
            count++;
            result = Math.max(result, count)
        }

    }
    console.log(result)