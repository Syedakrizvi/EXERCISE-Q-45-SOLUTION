let car: string ="subaru";

//test 1; Equality comparision(true)
console.log("Is car == 'subaru' ?I predict True.");
console.log(car == 'subaru');//true

//Test2: strict equality comparision(True)
console.log("Is car === 'subaru' ?I predict True.");
console.log(car === 'subaru');//true


//Test3:Inequality comparision (false)
console.log("Is car != 'subaru' ?I predict False.");
console.log(car != 'subaru');//false

//Test4 Strict inequality comparision(false)
console.log("Is car !== 'subaru' ?I predict False.");
console.log(car !== 'subaru');//false

//Test5:Less than comparision(false)
console.log("Is car < 'subaru' ?I predict False.");
console.log(car < 'subaru');//false(lexicographic comparision)

//Test6:Greater than comparision(false)
console.log("Is car > 'subaru' ?I predict False.");
console.log(car > 'subaru');//false(lexicographic comparision)

//Test7:Less than or equal comparision(True)
console.log("Is car <= 'subaru' ?I predict True.");
console.log(car <= 'subaru');//true

//Test8:Greater than comparision(true)
console.log("Is car >= 'subaru' ?I predict True.");
console.log(car >= 'subaru');//true


//Test10:Checking falseness(false)
console.log("Is car ?I predict False.");
console.log(car);//false(negation of a truthy value)


