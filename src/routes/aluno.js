"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerAluno = void 0;
const express_1 = require("express");
const AlunoControllers_1 = require("../controller/AlunoControllers");
const Alunos_1 = require("../entity/Alunos");
const DateUtils_1 = require("../middleware/DateUtils");
const DateUtils_2 = require("../middleware/DateUtils");
const express_validator_1 = require("express-validator");
exports.routerAluno = (0, express_1.Router)();
const alunoCtrl = new AlunoControllers_1.AlunoControllers();
exports.routerAluno.post("/", [
    (0, express_validator_1.check)('nome').isEmpty().withMessage("Campo nome não pode estar em branco."),
    (0, express_validator_1.check)('dataNascimento').isEmpty().withMessage("Campo Data Nascimento não pode estar em branco.")
], (req, res) => {
    const dados = req.body;
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        return res.json(error);
    }
    if (!(0, DateUtils_1.validarDataNasc)(req.body.dataNascimento)) {
        return res.json({ "DataNascimento": "Aluno menor de idade" });
    }
    const aluno = new Alunos_1.Alunos(dados.nome, dados.dataNascimento, dados.modalidade, dados.turno, dados.dataCadastro = (0, DateUtils_2.dataAtual)());
    alunoCtrl.salvar(req, res, aluno);
});
exports.routerAluno.get("/", (req, res) => {
    alunoCtrl.recuperarTodos(req, res);
});
exports.routerAluno.get("/aluno/:id", (req, res) => {
    alunoCtrl.recuperar_aluno(req, res);
});
exports.routerAluno.put("/aluno/:id", (req, res) => {
    alunoCtrl.alterar(req, res);
});
exports.routerAluno.delete("/aluno/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    alunoCtrl.deletar(req, res);
}));
