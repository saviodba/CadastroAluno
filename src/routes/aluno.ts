import { Router } from "express";
import { AlunoControllers } from "../controller/AlunoControllers";
import { Alunos } from "../entity/Alunos";
import { Request, Response } from "express";
import { validarDataNasc } from "../middleware/DateUtils"
import { dataAtual } from "../middleware/DateUtils";
import { check, validationResult } from "express-validator";

export const routerAluno = Router();
const alunoCtrl = new AlunoControllers();


routerAluno.post("/",
    [
        check('nome').isEmpty().withMessage("Campo nome não pode estar em branco."),
        check('dataNascimento').isEmpty().withMessage("Campo Data Nascimento não pode estar em branco.")

    ],

    (req: Request, res: Response) => {
        const dados = req.body;

        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.json(error);
        }

        if (!validarDataNasc(req.body.dataNascimento)) {
            return res.json({ "DataNascimento": "Aluno menor de idade" })
        }

        const aluno = new Alunos(
            dados.nome,
            dados.dataNascimento,
            dados.modalidade,
            dados.turno,
            dados.dataCadastro = dataAtual()
        )

        alunoCtrl.salvar(req, res, aluno);

    })


routerAluno.get("/", (req: Request, res: Response) => {
    alunoCtrl.recuperarTodos(req, res);
})


routerAluno.get("/aluno/:id", (req: Request, res: Response) => {
    alunoCtrl.recuperar_aluno(req, res);
})


routerAluno.put("/aluno/:id", (req: Request, res: Response) => {
    alunoCtrl.alterar(req, res);
})

routerAluno.delete("/aluno/:id", async (req, res) => {

    alunoCtrl.deletar(req, res);
})

