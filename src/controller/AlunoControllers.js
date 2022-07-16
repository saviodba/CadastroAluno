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
exports.AlunoControllers = void 0;
const Alunos_1 = require("../entity/Alunos");
const db_1 = require("../config/db");
class AlunoControllers {
    salvar(req, res, aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            db_1.AppDataSource.initialize().then(() => __awaiter(this, void 0, void 0, function* () {
                yield db_1.AppDataSource.manager.save(Alunos_1.Alunos, aluno)
                    .then(resolve => {
                    res.json(resolve);
                    db_1.AppDataSource.destroy();
                }).catch(error => console.log(error));
            })).catch(error => console.log(error));
        });
    }
    recuperarTodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            db_1.AppDataSource.initialize().then(() => __awaiter(this, void 0, void 0, function* () {
                yield db_1.AppDataSource.manager.find(Alunos_1.Alunos)
                    .then(resolve => {
                    res.json(resolve);
                    db_1.AppDataSource.destroy();
                }).catch(error => console.log(error));
            })).catch(error => console.log(error));
        });
    }
    recuperar_aluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            db_1.AppDataSource.initialize().then(() => __awaiter(this, void 0, void 0, function* () {
                yield db_1.AppDataSource.manager.findOneById(Alunos_1.Alunos, id)
                    .then(resolve => {
                    if (!resolve) {
                        res.status(404).json({ error: "O Aluno não existe" });
                    }
                    else {
                        res.json(resolve);
                    }
                    db_1.AppDataSource.destroy();
                }).catch(error => console.log(error));
            })).catch(error => console.log(error));
        });
    }
    alterar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const dados = req.body;
            db_1.AppDataSource.initialize().then(() => __awaiter(this, void 0, void 0, function* () {
                yield db_1.AppDataSource.manager.update(Alunos_1.Alunos, id, dados)
                    .then(resolve => {
                    res.json(resolve);
                    db_1.AppDataSource.destroy();
                }).catch(error => console.log(error));
            })).catch(error => console.log(error));
        });
    }
    deletar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            db_1.AppDataSource.initialize().then(() => __awaiter(this, void 0, void 0, function* () {
                yield db_1.AppDataSource.manager.delete(Alunos_1.Alunos, id)
                    .then(resolve => {
                    res.json(resolve);
                    db_1.AppDataSource.destroy();
                }).catch(error => console.log(error));
            })).catch(error => console.log(error));
        });
    }
}
exports.AlunoControllers = AlunoControllers;
