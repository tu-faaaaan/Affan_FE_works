// 1. Consider the below array
const array = [1, 2, 3, 1, 4, 10, 15, 16, 5, 12, 18, 19, 2, 20]
// a. Create a new array returning with multiples of 2, sorted in descending order and for every alternate multiple replace with an alphabet limited to 3 starting from “abc”, “def” [eg: [2,”ABC”,10, “DEF”.....]
// let multiple_array=array.filter(num=>num%2===0).sort((firstItem, secondItem) => secondItem-firstItem).map((arrayItem, index) => index%2 !==0 ? "ABC" : arrayItem)
// console.log(multiple_array)

// b. What are all the possible ways to empty the above array
// array.length=0
// console.log(array)

// c. The above array includes many repeating values, remove them using any ES6 method
// const result_array = array.filter((data,index)=>{
//     return array.indexOf(data) === index;
// })
// console.log(result_array)

// d. Iterate the above array without mutating to check if the value 3 exists
// console.log(array.includes(3,0))

// 2. Analyze the below data representing the college students' information
const students = [
{ name: "A", age: 17, college: "UVCE",stream:'CSE',currentYear:1 },
{ name: "B", age: 19, college: "KEAM",stream:'ECE',currentYear:2 },
{ name: "C", age: 23, college: "UVCE",stream:'EEE',currentYear:4 },
{ name: "D", age: 18, college: "UVCE",stream:'CSE',currentYear:3 },
{ name: "E", age: 22, college: "KEAM",stream:'AEI',currentYear:4 },
{ name: "F", age: 21, college: "NETE",stream:'EEE',currentYear:3 }
]
// a. There is election voting for the post of Chairperson, for which only final year students are eligible. Create a list satisfying the above condition.
// const voting_list = students.filter(({ currentYear }) => currentYear === 4);
// console.log(voting_list)

// b. student B seems to have the wrong college name in the above data. Return an above array with the college name replaced as “NETE”
// let objIndex = students.findIndex((obj => obj.name == 'B'));
// students[objIndex].college="NETE";
// console.log(students)

// c. Find the total number of students that would be eligible for placements this year.
// const placement_list = students.filter(({ currentYear }) => currentYear > 2);
// console.log(placement_list.length)

// d. Create an array with students with stream ‘EEE” and in the order of their currentYear
// const eee_list = students.filter(({ stream }) => stream === 'EEE').sort();
// console.log(eee_list)

// e. Create a new array for the students above the age of 21, add a new property ‘cgpa’
// let age_check= students.filter(({ age } ) => age > 21)
// age_check[0]["cgpa"]=9.2;
// age_check[1]["cgpa"]=9.7;
// console.log(age_check)

// 3. Analyze the below data
const arr1 = [
{key : "1" , value: "abc"},
{key : "2" , value: "def"},
{key : "3" , value: "ghi"},
{key : "4" , value: "jkl"}
];
// a. Return a reserved array with only the value for key 3 altered with value: “xyz”, maintaining the remaining key-value pairs
// let obj_index = arr1.findIndex((obj => obj == '2'));
// arr1[obj_index].value="xyz";
// console.log(arr1)

// b. Return an array containing only the values and append them to form a single word
// let arr_value=[]
// console.log(Object.value(arr1))

// c. From the above, the obtained single word, extract the exact middle letter