const comp1 = [
    {
      first_name: "Ben",
      last_name: "Almond",
      age: 28,
      position: "Senior Engineer",
      company: "ABC",
      location: "TVM",
      appraisal: 0,
    },
    {
      first_name: "Andrew",
      last_name: "Lords",
      age: 22,
      position: "Engineer",
      company: "ABC",
      location: "TVM",
      appraisal: 3,
    },
    {
      first_name: "Arathi",
      last_name: "A",
      age: 42,
      position: "PM",
      company: "ABC",
      location: "TVM",
      appraisal: 9,
    },
];
  
const comp2 = [
    {
      first_name: "Subin",
      last_name: "Viswa",
      age: 28,
      position: "Engineer",
      company: "ABC",
      location: "Kochi",
      appraisal: 1,
    },
    {
      first_name: "Dev",
      last_name: "Raj",
      age: 21,
      position: "Architect",
      company: "ABC",
      location: "Kochi",
      appraisal: 2,
    },
    {
      first_name: "Thomas",
      last_name: "Mathew",
      age: 28,
      position: "Architect",
      company: "ABC",
      location: "Kochi",
      appraisal: 5,
    },
    {
      first_name: "Deepa",
      last_name: "Thomas",
      age: 31,
      position: "Senior Engineer",
      company: "ABC",
      location: "Kochi",
      appraisal: 4,
    },
    {
      first_name: "Antony",
      last_name: "Thomas",
      age: 31,
      position: "Senior Engineer",
      company: "ABC",
      location: "Kochi",
      appraisal: 4,
    },
];

// Sub-Task 1
let employees = [...comp1,...comp2];
console.log(employees)


// Sub-Task 2
function fullname(){
    for(i=0;i<7;i++){
        const full_name = employees[i].first_name + " " + employees[i].last_name;
        console.log(full_name);
    }
}
fullname();


// Sub-Task 3
console.log(employees.find(function(element){
    return element.position=="Engineer" && element.age>25
}))


// Sub-Task 4
console.log(employees.filter(({ position }) => position === 'Architect'));


// Sub-Task 5
function appraisal(){
  let employee1=[]
  for(i=0;i<8;i++){
    if (employees[i].appraisal<1){
      console.log("All employees didn't get appraisal atleast once.")
      employee1= [employees[i]]
      break}
    else{  
      console.log("All the employees gets appraisal atleast once.")}
  }
  console.log("The employee who didn't get atleast one appraisal: ",employee1)
}
appraisal();


// Sub-Task 6
let count=0;
for (i=0;i<8;i++){
  if (employees[i].appraisal>0){
    count++;
  }
}
console.log(count+' no. of employees got an appraisal.')

// Sub-Task 8
let appraisal_count=0
for (i=0;i<8;i++){
  employees[i].appraisal=3
  if (employees[i].appraisal==3){
    appraisal_count++
  }
}
if (appraisal_count==8){
  console.log("All employees have 3 appraisal")
}


// Sub-Task 9
let appraisal_sum = 0;
for(i=0;i<8;i++){
    appraisal_sum = appraisal_sum + employees[i].appraisal;
}
console.log(appraisal_sum);