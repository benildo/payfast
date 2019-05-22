module.exports = function (app){
    app.get ('/pagamentos', function(req, res){
        console.log('Requisição recebida')
        res.send('Tudo funcionando');
    });

    app.post('/pagamentos/pagamento', function(req, res){
        var pagamento = req.boby;
        console.log(pagamento)
        res.send('Ok.');
    })
}

