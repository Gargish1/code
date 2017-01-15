function getSubArrays(arr){
  var len = arr.length,
     subs = Array(Math.pow(2,len)).fill();
  return subs.map((_,i) => { var j = -1,
                                 k = i,
                               res = [];
                             while (++j < len ) {
                               k & 1 && res.push(arr[j]);
                               k = k >> 1;
                             }
                             return res;
                           }).slice(1);
}

console.log(JSON.stringify(getSubArrays(["M","A","N","o","J"])));
