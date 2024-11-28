const express = require('express');
const faker = require('faker');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/random-user', (req, res) => {
    const randomUser = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        country: faker.address.country()
    };
    res.json(randomUser);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
