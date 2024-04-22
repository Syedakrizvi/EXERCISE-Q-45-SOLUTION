interface item {
     name:string
     price:number

}
//create 2 objects
const book: item ={
    name:"ESSENTIAL TYPESCRIPT"
    price: 450
}
const novel:item ={
    name:"1000 words"
    price: 200
}
console.log(`book name: ${book.name}, price $${book.price}`)
console.log(`novel name: ${novel.name}, price $${novel.price}`)