const sampleData = {
  status: 200,
  data: {
    name: "Sample name",
    email: "testemail@gmail.com",
    address: {
      city: "Xyz",
      state: "Uiuhsi",
      country: "Country",
    },
    images: [
      {
        thumbnail: "128x128.png",
        alt: "File 1 alt text",
      },
      {
        thumbnail: "256x256.png",
        alt: "File 2 alt text",
      },
      {
        thumbnail: "512x512.png",
        alt: "",
      },
    ],
  },
};

// 1. Display name and email from
// Expected Output:
// Name: Sample name
// Email: testemail@gmail.com
let x = sampleData.data.name
let y = sampleData.data.email
console.log("Name: "+x)
console.log("Email: "+y)

// 2. Retrieve and display address.
// Expected Output:
// City: Xyz
// State: Uiuhsi
// Country: Country
let a = sampleData.data.address.city
let b = sampleData.data.address.state
let c = sampleData.data.address.country
console.log("City: "+a)
console.log("State: "+b)
console.log("Country: "+c)

// 3. Write a function to check whether status is successful or not (success status codes are in the range of 200).
function success(){
    if (sampleData.status>=0 && sampleData.status<=200){
        return true
    }
}
console.log(success())