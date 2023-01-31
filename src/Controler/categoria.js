import { openDb } from '../configDB.js';

export async function createCategoria(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS categoria (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, descricao TEXT)')
    })
}

export async function cadastraCategoria(req, res){
    let categoria = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO categoria (nome, descricao) VALUES (?,?)', [categoria.nome, categoria.descricao]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function listarCategorias(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM categoria')
        .then(categoria=>  res.json(categoria))
    });
}

export async function listarCategoriaId(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM categoria WHERE id=?', [id])
        .then(categoria=> res.json(categoria) );
    });
}

export async function atualizarcategoria(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run('UPDATE categoria SET nome=?, descricao=? WHERE id=?', [pessoa.nome, pessoa.descricao, pessoa.id]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function apagarCategoria(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM categoria WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}