let current_users: string[] = ["saba","admin","sana","sara","kaneez"];
let new_users: string[] =["noreen","nousheen","nazia","admin","sahiba"];

new_users.forEach((newUser) =>{
    if(
        current_users.some(
            (currentUser)=> currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ){
        console.log(`${newUser} will need to enter a new username.`);
    }else{
        console.log(`${newUser} is available.`);
    }
});