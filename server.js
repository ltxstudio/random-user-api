const express = require('express');
const faker = require('faker');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/random-user', (req, res) => {
    try {
        const randomUser = {
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            website: faker.internet.url(),
            address: {
                street: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.state(),
                zipCode: faker.address.zipCode(),
                country: faker.address.country(),
                geo: {
                    lat: faker.address.latitude(),
                    lng: faker.address.longitude()
                }
            },
            company: {
                name: faker.company.companyName(),
                catchPhrase: faker.company.catchPhrase(),
                bs: faker.company.bs()
            },
            bio: faker.lorem.paragraph(),
            avatar: faker.image.avatar(),
            birthdate: faker.date.past(50, new Date(2000, 0, 1)).toISOString().split('T')[0],
            hobbies: faker.random.arrayElements([
                'reading', 'traveling', 'swimming', 'gaming', 'cooking', 'hiking', 'dancing'
            ], 3),
            socialMedia: {
                twitter: faker.internet.url(),
                linkedin: faker.internet.url(),
                github: faker.internet.url()
            },
            jobTitle: faker.name.jobTitle(),
            jobArea: faker.name.jobArea(),
            jobType: faker.name.jobType(),
            education: {
                degree: faker.name.jobType(),
                university: faker.company.companyName()
            },
            creditCard: {
                number: faker.finance.creditCardNumber(),
                expiry: faker.finance.creditCardExpiry(),
                cvv: faker.finance.creditCardCVV()
            }
        };
        res.json(randomUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
