let sampleData = {
    name: "World Cup 2018",
    matches: [
    {
    Id: 1,
    match: 'group-stage-1',
    team1: {
    name: "Russia",
    code: "RUS"
    },
    team2: {
    name: "Saudi Arabia",
    code: "KSA"
    },
    knockout: false,
    stadium: {
    key: "luzhniki",
    name: "Luzhniki Stadium"
    }
    },
    {
    Id: 2,
    match: 'group-stage-2',
    team1: {
    name: "Egypt",
    code: "EGY"
    },
    team2: {
    name: "Uruguay",
    code: "URU"
    },
    knockout: false,
    stadium: {
    key: "ekaterinburg",
    name: "Ekaterinburg Arena"
    },
    },
    {
    Id: 3,
    match: 'group-stage-3',
    team1: {
    name: "Portugal",
    code: "POR"
    },
    team2: {
    name: "Spain",
    code: "ESP"
    },
    knockout: false,
    stadium: {
    key: "fisht",
    name: "Fisht Stadium"
    },
    },
    {
    Id: 5,
    match: 'semi-final-2',
    team1: {
    name: "Croatia",
    code: "CRO"
    },
    team2: {
    name: "England",
    code: "ENG"
    },
    knockout: true,
    stadium: {
    key: "luzhniki",
    name: "Luzhniki Stadium"
    },
    },
    {
    Id: 6,
    match: 'final',
    team1: {
    name: "France",
    code: "FRA"
    },
    team2: {
    name: "Croatia",
    code: "CRO"
    },
    knockout: true,
    stadium: {
    key: "luzhniki",
    name: "Luzhniki Stadium"
    },
    }
    ]
    };
semi_final_1=[{
    Id: 4,
    match: 'semi-final-1',
    team1: {
    name: "India",
    code: "IND"
    },
    team2: {
    name: "Croatia",
    code: "CRO"
    },
    knockout: true,
    stadium: {
    key: "fisht",
    name: "Fisht Stadium"
    },
    }]

// Array Operations
// Sub-Task 1
sampleData.matches.splice(3,0,...semi_final_1)
console.log(sampleData)

// Sub-Task 2
let new_sample_data=sampleData.matches.sort((a, b) => {
    return a.Id - b.Id;
});
// console.log(new_sample_data)

// Sub-Task 3
var count=0;
var knockout_matches=[];
for (var i=0;i<sampleData.matches.length;i++){
    if (sampleData.matches[i].knockout==true){
        knockout_matches.push(sampleData.matches[i])
        count++;
    }
}
if (count==6){
    console.log('All matches are knockout.')
}
else{
    console.log('All matches are not knockout.')
}
console.log('Knockout matches:',knockout_matches)

// Sub-Task 4
var knockout_matches=[];
for (var i=0; i<sampleData.matches.lenght; i++){
    knockout_matches[i]=sampleData.matches[i].knockout
}
// console.log(knockout_matches)

// Sub-Task 5
let finalData=sampleData;
finalData=finalData.matches.pop()
// console.log(finalData)

// Sub-Task 6
var stadiumList = {};
for (var i=0; i<sampleData.matches.length; i++){
    stadiumList[i]=sampleData.matches[i].stadium
}
// console.log(stadiumList)

// Object Operations
// Sub-Task 1
const {team1, team2} = finalData;
// console.log(team1, team2);

// Sub-Task 2
finalData.stadium['key']="Moscow";
finalData.stadium['name']="Moscow Stadium";
// console.log(finalData)