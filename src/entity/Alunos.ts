import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne } from "typeorm"

@Entity()
export class Alunos {

    constructor(nome: string, dataNascimento: Date, turno: number, modalidade: number, dataCadastro: Date) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.turno = turno;
        this.modalidade = modalidade;
        this.dataCadastro = dataCadastro;

    }

    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    nome: string;

    @Column()
    dataNascimento: Date;

    @Column()
    turno: number;

    @Column()
    modalidade: number;

    @Column()
    dataCadastro: Date;
}


