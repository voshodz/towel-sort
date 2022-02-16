
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  for(el in matrix) {
    if(el % 2 === 0) {
        matrix[el].map( (number) =>{
            res.push(number)
        })
    }
    else {
        matrix[el].reverse().map( (number) =>{
            res.push(number)
        })
    }
    
  }
  return res;
}
