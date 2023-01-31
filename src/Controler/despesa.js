import { openDb } from '../configDB.js';

export async function createDespesa(){
    openDb().then(db =>{
        db.exec('CREATE TABLE IF NOT EXISTS despesa ( id INTEGER PRIMARY KEY AUTOINCREMENT, valor REAL, dataCompra TEXT, descricao TEXT, tipoPagamentoId INTEGER, categoriaId INTEGER)')
    })
}

export async function cadastrardepesa(req, res){
    let Despesa = req.body;
    openDb().then(db =>{
        db.run('INSERT INTO despesa (valor, dataCompra, descricao, tipoPagamentoId, categoriaId) VALUES (?,?,?,?,?)', [Despesa.valor, Despesa.dataCompra, Despesa.descricao, Despesa.tipoPagamentoId, Despesa.categoriaId]);                       
    });
    res.json({
        "statusCode": 200
    })
}

export async function listaDepesa(req, res){
    openDb().then(db =>{
        db.all('SELECT * FROM despesa')
        .then(despesa =>  res.json(despesa))
    });
}

export async function listaDespesaId(req, res){
    let id = req.body.id;
    openDb().then(db =>{
        db.get('SELECT * FROM despesa WHERE id=?', [id])
        .then(despesa=> res.json(despesa) );
    });
}

export async function atualizarDespesa(req, res){
    let despesa = req.body;
    openDb().then(db =>{
        db.run('UPDATE despesa SET valor=?, dataCompra=?, descricao=? WHERE id=?', [despesa.valor, despesa.dataCompra, despesa.descricao, despesa.id]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function apagarDespesa(req, res){
    let id = req.body.id;
    openDb().then(db =>{
        db.get('DELETE FROM despesa WHERE id=?', [id])
        .then(res =>res)
    });
    res.json({
        "statusCode": 200
    })
}





