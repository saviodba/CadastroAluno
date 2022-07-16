"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alunos = void 0;
const typeorm_1 = require("typeorm");
let Alunos = class Alunos {
    constructor(nome, dataNascimento, turno, modalidade, dataCadastro) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.turno = turno;
        this.modalidade = modalidade;
        this.dataCadastro = dataCadastro;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], Alunos.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Alunos.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Alunos.prototype, "dataNascimento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Alunos.prototype, "turno", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Alunos.prototype, "modalidade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Alunos.prototype, "dataCadastro", void 0);
Alunos = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, Date, Number, Number, Date])
], Alunos);
exports.Alunos = Alunos;
