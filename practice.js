const num=[1,2,3,4,5,6,7,8,9]
console.log(num)            //To print the array
console.log(num[num.length-2])          //To access any specific element of an array
console.log(num.push(56))           //To add an element at the end of the array
console.log(num.pop())          //To remove the last element of the array and return the element
console.log(num.unshift(0))         //To add an element at the starting of the array
console.log(num.shift())            //Ro remove the first element of the array
console.log(num)

const names=['Affan','Afnan','Aryann','Lakshya','Dhruv','Aryann','Darshan']
console.log(names.indexOf('Aryann',3))
let new_array=num.concat(names)          //To join 2 arrays
let new_array1=new_array.slice(4,12)            //To obtain a specific portion of an array
console.log(new_array1)

const apparel = [
    {
    Name: "Jeans",
    Category: "clothes",
    Brand: "Levi",
    Actual_price: 2209,
    Discount: 10
    },
    {
    Name: "Silk Saree",
    Category: "clothes",
    Brand: "Soch",
    Actual_price: 6560,
    Discount: 33
    },
    {
    Name: "T-shirts",
    Category: "clothes",
    Brand: "Westworld",
    Actual_price: 850,
    Discount: 0
    },
    {
    Name: "Dhothi",
    Category: "clothes",
    Brand: "MCR",
    Actual_price: 1570,
    Discount: 2
    },
    {
    Name: "Crocs",
    Category: "shoes",
    Brand: "Killer",
    Actual_price: 2797,
    Discount: 30
    },
    {
    Name: "90s Runner",
    Category: "shoes",
    Brand: "Puma",
    Actual_price: 4999,
    Discount: 50
    },
    {
    Name: "Men's Boots",
    Category: "shoes",
    Brand: "Puma",
    Actual_price: 3999,
    Discount: 50
    },
    {
    Name: "Diamond Ring",
    Category: "jewellery",
    Brand: "Bluestone",
    Actual_price: 14800,
    Discount: 0
    },
    {
    Name: "Gold earring",
    Category: "jewellery",
    Brand: "Tanishq",
    Actual_price: 21529,
    Discount: 6
    },
    {
    Name: "Choker",
    Category: "accessories",
    Brand: "Womanista",
    Actual_price: 129,
    Discount: 0
    },
    {
    Name: "Watch",
    Category: "accessories",
    Brand: "Sonic",
    Actual_price: 2534,
    Discount: 2
    }
    ]
let filter_items = apparel.filter((item) => {
    return item.Actual_price >=3000;
})
console.log(filter_items)
let brand_names = apparel.map((item) => {
    return item.Brand
})
console.log(brand_names)
Find
let found_itmes = apparel.find((item) => {
    return item.Name === "Crocs"
})
console.log(found_itmes)

let maxDiscount = apparel.some((item) => {
    return item.Discount <=30;
})
console.log(maxDiscount)

// let maxDiscount = apparel.every((item) => {
//     return item.Discount <=30;
// })
// console.log(maxDiscount)