(function () {
    // Colecciones
    var fruits = [
        'apple',
        'melon',
        'mango',
        function (fruta) {
            if (fruta === void 0) { fruta = 'uva'; }
            return "Zumo de ".concat(fruta);
        }
    ];
    var fn1 = fruits[3];
    var jugo = typeof fn1 === 'string' ? 'naranja' : fn1('manzana');
    // const jugo = (fn: Function) => fn('naranja');
    // console.log('Coleccion array: ', jugo(fn1 as Function));
    console.log('Coleccion array: ', jugo);
    //Set (es una coleccion que no permite duplicidad de valor)
    var numbersCollection = new Set();
    numbersCollection.add(5);
    numbersCollection.add(5);
    numbersCollection.add(6);
    console.log('Coleccion set: ', numbersCollection);
    // const unicos = [ ...new Set([1, 1, 2, 2, 2, 3])] // (3) [1, 2, 3]
    //Map (es un diccionario con un key y value)
    var students = new Map();
    students.set('one', 'Josue');
    students.set('two', 'Alex');
    students.set('Three', 'Lucy');
    console.log('Coleccion map: ', students.get('one'));
    console.log('------*** PROMESAS **------');
    console.log('INICIO PROMESAS');
    var promesaInicial = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Error en carga de valores');
        }, 1000);
        setTimeout(function () {
            resolve('Se obtuvieron los valores esperados');
        }, 2000);
    });
    promesaInicial
        .then(function (res) { console.log(res); })["catch"](function (err) { return console.warn('[Exception]', err); });
    console.log('FIN PROMESAS');
})();
