const os = require('node:os');

function informacionRed() {
    const netIner = os.networkInterfaces()
    const netwoks = {};
    Object.keys(netIner).forEach(function(datos) {
        netwoks[datos] = netIner[datos].map((datoI) => ({
            Dirección: datoI.address,
            Interno: datoI.internal,
            Familia: datoI.family,
        }));
    });
    return netwoks;
}
module.exports = {
    informacionRed,
}