var divide = function(a, b) {
  let flag = true;
  let result = 0;
  while(flag) {
      a = a - b;
      flag = !(a < b);
      result++;
  }
  console.log(result);
  return result;
};

divide(15, 2);