function make_shirt(size: string = "large",  message: string ="I love Typescript") {
    console.log(`Making a ${size} t_shirt with the message "${message}" printed on it.`);

}
make_shirt();//default large and msg
make_shirt("medium");//default msg,medium size;
make_shirt("small","Dive into Coding");//custom msg,small size
