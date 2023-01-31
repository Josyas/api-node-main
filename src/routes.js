import { Router } from "express";
import { createDespesa, cadastrardepesa, listaDepesa, listaDespesaId, atualizarDespesa, apagarDespesa } from './Controler/despesa.js';
import { createCategoria, cadastraCategoria, listarCategorias, listarCategoriaId, atualizarcategoria, apagarCategoria} from './Controler/categoria.js';
import { createTipoPagamento, cadastraTipoPagamento, listarTipoPagamentos, listarTipoPagamentoId, atualizarTipoPagamento, apagarTipoPagamento } from './Controler/tipoPagamento.js';

createDespesa();
createCategoria();
createTipoPagamento();


const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    });
});

//despesa

router.post('/cadastarDespesa', cadastrardepesa);
router.get('/listarDespesa', listaDepesa);
router.get('/listarDespesaId', listaDespesaId);
router.put('/atualizarDespesa', atualizarDespesa);
router.delete('/apagarDespesa', apagarDespesa);

//categoria

router.post('/cadastarCategoria', cadastraCategoria);
router.get('/listarCategorias', listarCategorias);
router.get('/listarCategoriaId', listarCategoriaId);
router.put('/atualizarCategoria', atualizarcategoria)
router.delete('/apagarCategoria', apagarCategoria);

//tipo de pagamento

router.post('/cadastrarTipoPagamento', cadastraTipoPagamento);
router.get('/listarTipoPagamentos', listarTipoPagamentos);
router.get('/listarTipoPagamentoId', listarTipoPagamentoId);
router.put('/atualizarTipoPagamento', atualizarTipoPagamento)
router.delete('/apagarTipoPagamento', apagarTipoPagamento);

export default router;


