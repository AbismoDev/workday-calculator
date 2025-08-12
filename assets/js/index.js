document.addEventListener("DOMContentLoaded", () => {

    const listaFeriados = [
        {dia: 1, mes: 1, nome_feriado: "Confraternização Universal"},
        {dia: 18, mes: 4, nome_feriado: "Paixão de Cristo"},
        {dia: 21, mes: 4, nome_feriado: "Tiradentes"},
        {dia: 1, mes: 5, nome_feriado: "Dia do Trabalho"},
        {dia: 7, mes: 9, nome_feriado: "Independência do Brasil"},
        {dia: 12, mes: 10, nome_feriado: "Nossa Senhora Aparecida"},
        {dia: 2, mes: 11, nome_feriado: "Finados"},
        {dia: 15, mes: 11, nome_feriado: "Proclamação da República"},
        {dia: 20, mes: 11, nome_feriado: "Dia Nacional de Zumbi e da Consciência Negra"},
        {dia: 25, mes: 12, nome_feriado: "Natal"},
    ];

    const form = document.querySelector("#form");
    const formModal = document.querySelector("#form--modal");
    const btnOpenModal = document.querySelector("#btn--openModal");
    let msg;
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const res = document.querySelector("#res");
        const inputDataInicial = document.querySelector("#data--inicial");
        const inputDataFinal = document.querySelector("#data--final");

        const valorDataInicial = inputDataInicial.value;
        const valorDataFinal = inputDataFinal.value;

        if(valorDataInicial >= valorDataFinal || (valorDataInicial && valorDataFinal === "")) {
            msg = `Insira uma Data Inicial e uma Data Final!`;
            res.innerHTML = exibirMensagem(msg, "falha");
            return;
        }

        const dataInicial = new Date(valorDataInicial + "T00:00:00");
        const dataFinal = new Date(valorDataFinal + "T00:00:00");

        const dataInicialFormatada = formataData(dataInicial);
        const dataFinalFormatada = formataData(dataFinal)
        const diasUteis = contarDiasUteis(dataInicial, dataFinal);

        msg = `Da data ${dataInicialFormatada} até data ${dataFinalFormatada}, tem ${diasUteis} dias úteis`;
        res.innerHTML = exibirMensagem(msg, "sucesso");

    });

    btnOpenModal.addEventListener("click", () => {
        const modal = document.querySelector("#modal");
        const btnCloseModal = document.querySelector("#close--modal"); 
        modal.style.display = "flex";
        btnCloseModal.addEventListener("click", () => modal.style.display = "none");
    });

    formModal.addEventListener("submit", (e) => {
        e.preventDefault();

        const resModal = document.querySelector("#res--modal");

        const inputNomeFeriado = document.querySelector("#nome--feriado--regional");
        const inputDataFeriado = document.querySelector("#feriado--regional");
        const valorNomeFeriado = inputNomeFeriado.value;
        const valorDataFeriado = inputDataFeriado.value;

        const dataFeriado = new Date(valorDataFeriado + "T00:00:00");
        const diaFeriado = dataFeriado.getDate();
        const mesFeriado = dataFeriado.getMonth() + 1;

        let feriadoIgual = false;

        for(let i = 0; i < listaFeriados.length; i++) {
            if(diaFeriado === listaFeriados[i].dia && mesFeriado === listaFeriados[i].mes) {
                feriadoIgual = true;
            }            
        }

        if(!feriadoIgual) {
            listaFeriados.push({dia: diaFeriado, mes: mesFeriado, nome_feriado: valorNomeFeriado});
            msg = `Feriado regional adicionado em nossa lista!`;
            resModal.innerHTML = exibirMensagem(msg, "sucesso");
            return;
        }
        
        msg = `Feriado já existe em nossa lista!`;
        resModal.innerHTML = exibirMensagem(msg, "falha");
        
    });

    function exibirMensagem(msg, tipoMensagem) {
        return `
            <div class="container--solucao ${tipoMensagem}">
                <p>${msg}</p>
            </div>
        `;
    }

    function contarDiasUteis(dataCorrente, dataFinal) {
        let diasUteis = 0;
        let feriado = 0;

        while(dataCorrente <= dataFinal) {
            if(dataCorrente.getDay() > 0 && dataCorrente.getDay() < 6){
                for(let i = 0; i < listaFeriados.length; i++) {  
                    if(dataCorrente.getDate() === listaFeriados[i].dia && (dataCorrente.getMonth() + 1) === listaFeriados[i].mes){
                        feriado++;
                    } 
                }                         
                diasUteis++;
            }      
            dataCorrente.setDate(dataCorrente.getDate() + 1);
        }

        return diasUteis - feriado;
    }

    function formataData(data) {
        const diaFormatado = (data.getDate() < 10) ? `0${data.getDate()}` : data.getDate();
        const mesFormatado = ((data.getMonth() + 1) < 10) ? `0${(data.getMonth() + 1)}` : (data.getMonth() + 1);
        const anoFormatado = data.getFullYear();
        const dataFormatada = `${diaFormatado}/${mesFormatado}/${anoFormatado}`;

        return dataFormatada;
    }

});