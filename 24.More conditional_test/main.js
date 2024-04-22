let car = "Subaru";
let age = 25;
let numbers = [1, 2, 3, 4];
// **string test**
//Test 1 :Equality (true)
console.log("Is car == 'Subaru'? Ipredict True.");
console.log(car == 'Subaru'); //true(case_intensitive)
//Test 2: Srtict equality (False)
console.log("Is car === 'Subaru'? Ipredict False.");
console.log(car === 'Subaru'); //false(case_intensitive)
//Test3: Inequality (true)
console.log("Is car != 'Toyota'? Ipredict True.");
console.log(car != 'Toyota'); //true
//Test4: Inequality (False)
console.log("Is car !== 'Subaru'? Ipredict False.");
console.log(car !== 'Subaru'); //false (case - sensitive)
//** Lowercase function tests**
//Test5: lowwercase conversion (True)
console.log("Is car.toLocaleLoweCase() == 'subaru'? I predict True.");
console.log(car.toLocaleLowerCase() == 'subaru'); //true (converted to lowercase)
//Test6: lowwercase conversion (False)
console.log("Is car === car.toLocaleLoweCase()? I predict False.");
console.log(car === car.toLocaleLowerCase()); //false (converted to lowercase)
//Numerical Tests**
//Test7 :Equality (true)
console.log("Is age == 25 ? I predict True");
console.log(age == 25); //true
//Test8:Inequality test (false)
console.log("Is age != 30? I predict True");
console.log(age != 30);
//Test 9 Greater than (false)
console.log("Is age > 30 ? I predict False");
console.log(age > 30); //false
//Test10 Less than or equal to
console.log("Is age <= 25 ? I predict True");
console.log(age <= 25); //true
//Logical operator**
//Test11: AND (True)
console.log("Is age > 20 && age < 30 ? I predict True");
console.log(age > 20 && age < 30); //true (both condition met);
//Test12: OR (False) 
console.log("Is age > 30 || age < 18 ? I predict True");
console.log(age > 30 || age < 18); //false (neither condition met)
//**Array Tests** 
//Test 13: In Array(true)
console.log("Is 3 in number? Ipredict True");
console.log(3 in numbers); //True (checks for index existance)
export {};
//Test14: Not in array (false)
//console.log("Is 5 not in number? Ipredict True")
// console.log(5 not in numbers); //true(check for index existance)
