var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// ----------------------------
(function () {
    var mensaje = 'Hola';
    var numero = 123;
    var booleano = true; // false
    var hoy = new Date();
    var cualquiercosa;
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;
    var ironman = {
        nombre: 'Tony',
        poder: 'Filantropo',
        fechaMuerte: '03/05/2021'
    };
    ironman.fechaMuerte = '03/05/2022';
    console.log(ironman);
    var avengerOriginal = {
        nombres: 'Steve',
        clave: 'Capitán América',
        poder: 'Suero del supersoldado'
    };
    var avengerTemporal = __assign({}, avengerOriginal);
    // let avengerTemporal = avengerOriginal;
    var nombres = avengerOriginal.nombres;
    console.log('Desestructuracion objecto:', nombres);
    var avengers = ['Thor', 'Ironman', 'Spiderman'];
    var item2 = avengers[1];
    // Quiero solo obtner ironman (la 2da posición del array)
    console.log('Desestructuracion array:', item2);
    console.log("".concat(item2));
})();
