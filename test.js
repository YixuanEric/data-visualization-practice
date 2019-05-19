function test(arr){
   return arr.map(ele => {
       return {
           a:ele
       }
   })

}

let arr = [1,2,3,4,5]
console.log(test(arr));
