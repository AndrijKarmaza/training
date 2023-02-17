// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення
let total;
function findLongestWord(string) {
  // Change code below this line
  const stringArray = string.split(' ');
  let maxLength = 0;
  
  
for (let i = 0; i < stringArray.length; i+= 1) {
  if (maxLength < stringArray[i].length) {
    maxLength = stringArray[i].length;
    total = stringArray[i];
  }
    
}
console.log(total);
return total;
  // Change code above this line
}

findLongestWord("The quick brown fox jumped over the lazy dog");

console.log(total);