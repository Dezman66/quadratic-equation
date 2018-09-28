
module.exports = function solveEquation(equation) {
  
    const arr1 = equation.split(" * ");
    const arr2 = arr1[1].split("^2 ");
    const arr3 = equation.split(" * x ");
    
    const a = eval(arr1[0]);
    const b = eval(arr2[1]);
    const c = eval(arr3[1]);
  
    let x1 = Math.round((-b-Math.sqrt(b*b-4*a*c))/(2*a));
    let x2 = Math.round((-b+Math.sqrt(b*b-4*a*c))/(2*a));
    let ans = [x1, x2]
    
    function sortNumber(m,n) {
      return m - n;
  }


    return ans.sort(sortNumber);// your implementation
}

