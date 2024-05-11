let guest_list: string[] = ["sahiba", "kaneez", "noreen", "nousheen", "nazia"];

let not_present: string = "nazia";
let new_guest: string = "shama anjum";
guest_list[4] = new_guest;


guest_list.unshift("rubab","kinza","maira");
console.log("\nUnfortunately we cannot arrange big table , so only two people are allowed. ");
while (guest_list.length>2){
  let remove_guest= guest_list.pop() ;
  console.log(`Sorry Madam ${remove_guest}, you are not invited for dinneer.`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log(
      "Respected mam " +
      guest_list[i] +
        ",\n Yes you are still invited on tommorow dinner.\n\nThank u\n"
    );
  }
  guest_list.splice(0.2)
  console.log(guest_list)