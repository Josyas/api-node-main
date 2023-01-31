import { openDb } from '../configDB.js';

export async function createTipoPagamento(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS tipoPagamento (id INTEGER PRIMARY KEY AUTOINCREMENT, tipo TEXT)')
    })
}

export async function cadastraTipoPagamento(req, res){
    let tipoPagamento = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO tipoPagamento (tipo) VALUES (?)', [tipoPagamento.tipo]);
    });

}

export async function listarTipoPagamentos(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM tipoPagamento')
        .then(tipoPagamento=>  res.json(tipoPagamento))
    });
}

export async function listarTipoPagamentoId(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.all('SELECT * FROM tipoPagamento Where id=?', [id])
        .then(tipoPagamento=>  res.json(tipoPagamento))
    });
}

export async function atualizarTipoPagamento(req, res){
    let tipoPagamento = req.body;
    openDb().then(db=>{
        db.run('UPDATE tipoPagamento SET tipo=? WHERE id=?', [tipoPagamento.tipo, tipoPagamento.id]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function apagarTipoPagamento(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM tipoPagamento WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}
