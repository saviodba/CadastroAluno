import { DataSource } from 'typeorm';
import { Alunos } from '../entity/Alunos';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    entities: [Alunos],
    synchronize: true,
})


