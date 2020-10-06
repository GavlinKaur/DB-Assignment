// employees.js
const faker = require('faker');

const generateEmployees = ()  => {
    var employees = []
    //Generate 100 records
    for (var id = 0; id < 100; id++) {
        var randCountry = faker.random.arrayElement(["USA", "India"]);
        employees.push({
            "id": id,
            "first_name": faker.name.firstName(),
            "last_name": faker.name.lastName(),
            "emailId": faker.internet.email(),
            "gender": faker.random.arrayElement(["Male", "Female"]),
            "age": faker.random.number({ min: 20, max: 99 }),
            "address": faker.address.secondaryAddress(),
            "country": randCountry,
        })
    }

    return { "employees": employees }
}

module.exports = generateEmployees