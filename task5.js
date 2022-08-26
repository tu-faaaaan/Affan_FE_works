const teams = [
    {
    name: "Chelsea",
    id: 1,
    groupId: [1, 2],
    points: 10,
    },
    {
    name: "Liverpool",
    id: 2,
    groupId: [2, 3],
    points: 20,
    },
    {
    name: "Manchester United",
    id: 3,
    groupId: [3, 4],
    points: 50,
    },
    {
    name: "Arsenal",
    id: 4,
    groupId: [1, 4],
    points: 20,
    },
]
// 1. Remove the first element of the Teams array using the spread operator.
// teams.shift();
// console.log(teams)

// 2. Remove the last element of the Teams array (hint use array slice).
// teams.splice(3)
// console.log(teams)

// 3. Find the total points of all teams.
let total_points=0
for (var i=0; i<teams.length; i++){
    total_points=total_points+teams[i].points;
}
console.log(total_points)

// 4. Create an object with group ids as keys and an array of team names in it as values.

// 5. Filter teams have points higher than or equal to 20 and are in group 1.
// console.log(teams.filter(({ points,groupId }) => points>=20 && groupId===[1]))

// 6. Find the name of the team whose id is 4.
// console.log(teams.filter(({ id }) => id === 4))

// 7. Find the team which is in both group 1 & 2 and convert that particular object to array as shown in the example below: { name: 'team name', id: 0, points: 90, group: [3,4,2] } to [ ['name','team name'], ['id', 0], ['points', 90], ['group', [3, 4, 2] ] ]

// 8. Check if any team is in group 3 and in group 4

// 9. Reduce 5 points for teams in group 3 into a new array

// 10. Print the names of all teams separated by a coma
// let team_names=[];
// for(var i=0;i<4;i++){
//     team_names.push(teams[i].name)
// }
// console.log(team_names)

// 11. Check if all teams have points greater than 10
var count=0
for (var i=0;i<teams.length;i++){
    if (teams[i].points>10){
        count++;
    }
}
if (count===teams.length){
    console.log('All teams have points greater than 10.')
}
else{
    console.log('All teams do not have points greater than 10.')
}

// 12. Remove keys “awayJerseyColour” and “captain” and print them as well as the remaining details as an object without mutating: const manU = { name: "Manchester United", id: 1, group: [“Champions League”, "League Cup"], points: 10, jerseyColour: "red", homeGround: "Old Trafford", awayJerseyColour: "black", captain: "Harry", coach: "OGS", }