import { Alunos } from "../entity/Alunos";
import { AppDataSource } from "../config/db";
import { Request, Response } from "express";


export class AlunoControllers {

    async salvar(req: Request, res: Response, aluno: Alunos) {

        AppDataSource.initialize().then(async () => {

            await AppDataSource.manager.save(Alunos, aluno)
                .then(resolve => {
                    res.json(resolve)
                    AppDataSource.destroy();
                }).catch(error => console.log(error));


        }).catch(error => console.log(error))

    }

    async recuperarTodos(req: Request, res: Response) {

        AppDataSource.initialize().then(async () => {

            await AppDataSource.manager.find(Alunos)
                .then(resolve => {
                    res.json(resolve)
                    AppDataSource.destroy();
                }).catch(error => console.log(error));

        }).catch(error => console.log(error))


    }

    async recuperar_aluno(req: Request, res: Response) {
        const id = req.params.id;

        AppDataSource.initialize().then(async () => {
            await AppDataSource.manager.findOneById(Alunos, id)
                .then(resolve => {
                    if (!resolve) {
                        res.status(404).json({ error: "O Aluno não existe" });
                    } else {
                        res.json(resolve)
                    }


                    AppDataSource.destroy();
                }).catch(error => console.log(error));


        }).catch(error => console.log(error))

    }

    async alterar(req: Request, res: Response) {
        const id = req.params.id;
        const dados = req.body;

        AppDataSource.initialize().then(async () => {
            await AppDataSource.manager.update(Alunos, id, dados)
                .then(resolve => {
                    res.json(resolve)
                    AppDataSource.destroy();
                }).catch(error => console.log(error));

        }).catch(error => console.log(error))
    }

    async deletar(req: Request, res: Response) {
        const id = req.params.id;
        AppDataSource.initialize().then(async () => {

            await AppDataSource.manager.delete(Alunos, id)
                .then(resolve => {
                    res.json(resolve)
                    AppDataSource.destroy();
                }).catch(error => console.log(error));

        }).catch(error => console.log(error))


    }
}
