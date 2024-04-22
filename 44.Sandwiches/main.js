function makeSandwich(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(function (element) { return console.log("-" + element); });
    console.log("Enjoy your sandwich !");
}
makeSandwich(['Ham', 'Cheese', 'Lettuse']);
makeSandwich(['Turkey', 'Bacon']);
makeSandwich(['Peanut butter', 'Jelly']);
