
export const validarDataNasc = (dataAniversario: string) => {

    const dataAtual = new Date();
    const dtAniversario = new Date(dataAniversario);

    let dia = dtAniversario.getUTCDate();
    let mes = dtAniversario.getMonth() + 1;
    let ano = dtAniversario.getFullYear();


    let ano_atual = dataAtual.getFullYear();
    let mes_atual = dataAtual.getMonth() + 1;
    let dia_atual = dataAtual.getDate();

    ano = +ano;
    mes = +mes;
    dia = +dia;

    let quantos_anos = ano_atual - ano;

    if (mes_atual < mes || mes_atual == mes && dia_atual < dia) {
        quantos_anos--;
    }

    var idade = quantos_anos < 0 ? 0 : quantos_anos;

    if (idade >= 18) {
        return true
    } else {
        return false
    }
}

export const dataAtual = () => {
    const dataAtual = new Date();

    let ano = dataAtual.getFullYear();
    let mes = dataAtual.getMonth() + 1;
    let dia = dataAtual.getDate();
    let hora = dataAtual.getHours();
    let min = dataAtual.getMinutes();

    const data = `${ano}-${mes}-${dia} ${hora}:${min}`;
    return new Date(data);

}
