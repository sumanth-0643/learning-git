const checkVar = 'learning-git'
console.log(checkVar)

const newVar = 'learning-git-and-git-hub'
console.log(newVar)

function sayHi(){
    console.log('Hello World!!')
}
sayHi()

const fetchCarDetails = {
    carBrand: 'Volkswagen',
    carModel: 'Virtus',
    carVariant: 'TSI Petrol',
    carSegment: 'Sedan',
    carRegNo: 'KA14PS0205',
    carOwnerDetails: {
        ownerName: 'Sumanth',
        location: 'Thirthahalli',
        pinCode: 577220,
    }
}
console.log(fetchCarDetails)

const carArray = ['Volkswagen', 'Skoda', 'Toyota', 'Honda', 'Hyundai']
console.log(carArray)

console.log(fetchCarDetails.carOwnerDetails)

const copyRightYear = document.getElementById('year-update')

function updateYear(){
    yearUpdate = new Date().getFullYear()
    copyRightYear.textContent = yearUpdate
    console.log(yearUpdate)
}
updateYear()
