function sort(arr){
  for(let j=0; j< arr.length; j++){
    for(let i=0; i<arr.length; i++){
      if(arr[i]> arr[i+1]){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
  }
  return arr;
}





let arr = [2,6,1,4,77,0]
console.log(sort(arr))
