function describe_city(city, country) {
    if (country === void 0) { country = "Default Country."; }
    console.log("".concat(city, " is in ").concat(country));
}
;
//3 cities
describe_city("Cape town, South africa");
describe_city("Dehli, India");
describe_city("Hyderabad, Pakistan");
describe_city("UAE");
