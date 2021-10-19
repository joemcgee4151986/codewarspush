function sumTwoSmallestNumbers(numbers) {  //[19, 5, 42, 2, 77]
 let arr = numbers.sort((a,b) => a-b);// .sort sorts the numbers in place in order. So 2 and 5 are first and second. 
  return arr[0] + arr[1] //[0] is 2 and [1] is 5] 2+5 = 7
}

