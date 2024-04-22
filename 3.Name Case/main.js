//lower case
var personName = "Zamin";
console.log("lowercase:", personName.toLowerCase());
//upper case
console.log("uppercase:", personName.toLocaleUpperCase());
//tittle case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toLocaleUpperCase(); }));
