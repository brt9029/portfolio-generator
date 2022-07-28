const fs = require('fs');
const generatePage = require('./src/page-template');


const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

fs.writeFile('index.html', generatePage('Bryant', 'brt9029'), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});