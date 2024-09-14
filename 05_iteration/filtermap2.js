const mynum = [1,2,3,4,5,6,7,8,9,10]
const newnum = mynum.map( (num) => num +10)
console.log(num); // [11,12,13,14,15,16,17,18,19,20]

//  ******* CHAINING **********
mynum = [1,2,3,4,5,6,7,8,9,10]
const newnum = mynum
                .map( (num) = > num *10)
                .map ( (num ) => num +1)
                .filter ( (num ) => num > 40)
console.log(newnum); // [41,51,61,71,81,91,101] 

// ************ REDUCE *************

const mynum = [1,2,3]

const mytottal = mynum.reduce( function (acc , curval) {
    console.log('acc : ${acc} and curval : ${curval}');
    return acc + curval
} , 0 )
console.log(mytottal);  // 6

const total = mynum.reduce( (acc , curr) => acc + curr , 0)
console.log(total ); // 6 

const shoppingcart = [
    {
        item : "js course",
        price : 1299
    },
    {
        item : "py course",
        price : 999
    },
    {
        item : "java course",
        price : 1999
    },
]

const pricetopay = shoppingcart.reduce( (acc , item) => acc + item.price , 0 )
console.log(pricetopay);