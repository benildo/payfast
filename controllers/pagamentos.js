module.exports = function (app){
    app.get ('/pagamentos', function(req, res){
        console.log('Requisição recebida')
        res.send('Tudo funcionando');
    });
}

