function fiboGenerator(n){
    let arr = [];
        if(n===1){
            arr.push(0);
        }
        else if (n===2){
            arr.push(0,1);
        }
        else{
            arr.push(0,1);
                for(let i =2; i < n; i++){
                    let u = arr[i-2] + arr[i-1];
                    arr.push(u);
                }
                console.log(arr);
        }
}
fiboGenerator(10);