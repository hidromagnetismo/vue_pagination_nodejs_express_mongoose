
const { Router } = require('express');
const router = Router();

const faker = require('faker');
const Article = require('../models/Article');

router.get('/create', async (req, res) => {
    
    for (let i = 0; i < 100; i++) {
        await Article.create({
            title: faker.name.title(),
            imageURL: faker.image.imageUrl(),
            description: faker.lorem.paragraph()
        });
    }

    res.send('100 Records created');
});

router.get('/articles', (req, res) => {

});

module.exports = router;
