var guest_list = ["sahiba", "kaneez", "noreen", "nousheen", "nazia"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected mam " +
        guest_list[i] +
        ",\n We invited you on dinner tomorrow.\n\nThank u\n");
}
var not_present = "nazia";
var new_guest = "shama anjum";
guest_list[4] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected mam " +
        guest_list[i] +
        ",\n We invited you on dinner tomorrow.\n\nThank u\n");
}
console.log("Ms. ".concat(not_present, " will not coming tomorrow dinner. "));
