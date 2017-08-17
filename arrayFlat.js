let arr = [[1,2,[3]],4];

function flattenArray(arr) {
  let tmpOutput = [];
  //check if we have an array
  if(arr.constructor === Array){
    for(let i=0;i<arr.length;i++){
      let innerArr;
      if(arr[i].constructor === Array){
        innerArr = flattenArray(arr[i]); //we just use this same function to flatten inner arrays
        for(let c=0;c<innerArr.length;c++)
          tmpOutput.push(innerArr[c]);
      }
      else //just push to array if it's a normal element
        tmpOutput.push(arr[i])
    }
  }
  else{
    tmpOutput.push(arr);
  }

  return tmpOutput;
}

//usage
console.log(flattenArray(arr));
