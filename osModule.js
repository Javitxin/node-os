const os = require('node:os');

function InformacionSis() {
    return {
        Nombre: os.hostname(),
        Tipo: os.type(),
        Versión: os.version(),
        Arquitectura: os.arch(),
        CPUs: os.availableParallelism(),
        MTotal: `${(os.totalmem() /2048)} MB`,
        MFree: `${(os.freemem() / 2048)} MB`,
    };
}
module.exports = {
    InformacionSis,
};