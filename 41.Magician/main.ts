let magician : string[] = ["Harry Porter" , "Hermione Granger" , "Ron Weasley" , "Albus Dumledore"];

function show_magicians(magicians: string[]){

  magicians.forEach(element => {
        console.log(element);
    });
}

show_magicians(magician);