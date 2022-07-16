"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Alunos_1 = require("../entity/Alunos");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    entities: [Alunos_1.Alunos],
    synchronize: true,
});
