const { InformacionSis } = require('./osModule');
const { informacionRed } = require('./networkModule');

const infoSistem = InformacionSis();
const infoNet = informacionRed();


console.log('Netwoks');
Object.entries(infoNet).forEach(([key, data]) => {
    console.log(`Interface: ${key}`);
    data.forEach((dataI) => {
        console.log(`Direción: ${dataI.Dirección}`);
        console.log(`Interno: ${dataI.Interno}`);
        console.log(`Familia: ${dataI.Familia}`);
    });
});
console.log('------------------');
console.log('System');
Object.entries(infoSistem).forEach(([index, valor]) => {
    console.log(`${index}: ${valor}`);
});