let guest_list: string[] = ["sahiba", "kaneez", "noreen", "nousheen", "nazia"];
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Respected mam " +
      guest_list[i] +
      ",\n We invited you on dinner tomorrow.\n\nThank u\n"
  );
}
let not_present: string = "nazia";
let new_guest: string = "shama anjum";
guest_list[4] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Respected mam " +
      guest_list[i] +
      ",\n We invited you on dinner tomorrow.\n\nThank u\n"
  );
}
console.log(`Ms. ${not_present} will not coming tomorrow dinner. `);

