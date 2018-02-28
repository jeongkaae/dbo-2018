/* globals suite chai setup test mocha soma */

mocha.setup('tdd');

suite('SOMA', function() {
    setup(function() {

    });
    suite('#soma(n1 > 0, n2 > 0)', function() {
        test('a soma dos números positivos 1 e 2 deve retornar 3', function() {
            chai.assert(soma(1, 2), 3);
        });
    });
});

mocha.checkLeaks();
mocha.run();
