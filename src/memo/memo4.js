//Named export: importする時は{}の中で同じ名前で呼ぶ

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
export { add, subtract };

//Named exportの別バージョン

//export const add = (num1, num2) => num1 + num2;
//export const subtract = (num1, num2) => num1 - num2;

//export defaultは1ファイルに1つしか使用できない
//ただし、Named exportが同じファイルにあっても問題ない

const canDrink = (age) => age >= 21;
export default canDrink;
