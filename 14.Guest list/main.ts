import { hasUncaughtExceptionCaptureCallback } from "process";

let guest_list: string[] = ["sahiba", "kaneez", "noreen", "nousheen", "nazia"];
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Respected mam " +
      guest_list[i] +
      ",\n We invited you on dinner tomorrow.\n\nThank u"
  );
}
export{guest_list}