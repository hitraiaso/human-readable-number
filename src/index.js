module.exports = function toReadable (number) {
  const Nums = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  const Dozens = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
  
  let numberArr = Array.from(String(number),Number);
  let h = 'hundred';
  if(number <= 19) {
  return Nums[number];
  }
  else if(number < 100 && number % 10 === 0){
  return `${Dozens[numberArr[0] - 2]}`;
  }
  else if( number >= 20 && number <= 99 ){
  return `${Dozens[numberArr[0] - 2]} ${Nums[numberArr[1]]}`;
  }
 
  else if (number % 100 === 0) {
  return `${Nums[numberArr[0]]} ${h}`;
  }
  else if (number >= 100 && numberArr[1] === 0) {
  return `${Nums[numberArr[0]]} ${h} ${Nums[numberArr[2]]}`;
  }
  else if (number >= 100 && numberArr[1] === 1) {
  return `${Nums[numberArr[0]]} ${h} ${Nums[numberArr[2]+10]}`;
  }
  else if (number >= 100 && number % 10 === 0) {
  return `${Nums[numberArr[0]]} ${h} ${Dozens[numberArr[1] - 2]}`;
  }
  else {
  return `${Nums[numberArr[0]]} ${h} ${Dozens[numberArr[1] - 2]} ${ Nums[numberArr[2]]}`;
  }
};  