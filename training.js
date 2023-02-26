// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення
// let total;
// function findLongestWord(string) {
//   // Change code below this line
//   const stringArray = string.split(' ');
//   let maxLength = 0;
  
  
// for (let i = 0; i < stringArray.length; i+= 1) {
//   if (maxLength < stringArray[i].length) {
//     maxLength = stringArray[i].length;
//     total = stringArray[i];
//   }
    
// }
// console.log(total);
// return total;
//   // Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");

// console.log(total);











// // Напиши функцію calculateTotalPrice(productName), яка приймає один параметр
// productName - назва товару.Функція повинна повернути загальну вартість(ціна * кількість)
// товару з таким ім'ям з масиву products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// // console.log('hello');

// function calculateTotalPrice(productName) {
//   // Change code below this line
// let totalPrice = 0;
//   for (let product of products) {s
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
    
//   }
  
//   return totalPrice;
  








//   // Change code above this line
// }
// console.log(calculateTotalPrice);

// Оголошена функція calculateTotalPrice(productName)
// Виклик calculateTotalPrice("Blaster") повертає 0
// Виклик calculateTotalPrice("Radar") повертає 5200
// Виклик calculateTotalPrice("Droid") повертає 2800
// Виклик calculateTotalPrice("Grip") повертає 10800
// Виклик calculateTotalPrice("Scanner") повертає 8100

// calculateTotalPrice("Radar");




// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
// const {hex, rgb} = color;
  
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }



// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// return obj = {...data,completed, category, priority, ...data};
//   // Change code above this line
// }


// Виклик
// makeTask({})
// повертає { category: "General", priority: "Normal", completed: false }

// Виклик
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
// повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// Виклик
// makeTask({ category: "Finance", text: "Take interest" })
// повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

// Виклик
// makeTask({ priority: "Low", text: "Choose shampoo" })
// повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }

// Виклик
// makeTask({ text: "Buy bread" })
// повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }










// Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.



// Change code below this line
// function findMatches(...args) {
//   const matches = []; // Don't change this line
//   console.log(args);
//   const array = args[0];
//   console.log(array);

//   for (let i = 1; i < args.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] === args[i]) {
//         matches.push(args[i]);
//       }
      
//     }
    
//   }
//   console.log(matches);
//   // Change code above this line
//   return matches;
// }



// // Оголошена функція
// findMatches()

// // Виклик
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// повертає[1, 2]

// // Виклик
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)
// повертає[17, 89, 2]

// // Виклик
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)
// повертає[24, 9, 41]

// // Виклик
// findMatches([63, 11, 8, 29], 4, 7, 16)
// повертає[]













// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//     getPotions() {
//       console.table(this.potions);
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };



// atTheOldToad.getPotions();