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
    const res = document.querySelector("#res");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputDataInicial = document.querySelector("#data--inicial");
        const inputDataFinal = document.querySelector("#data--final");

        const valorDataInicial = inputDataInicial.value;
        const valorDataFinal = inputDataFinal.value;

        if(valorDataInicial >= valorDataFinal || (valorDataInicial && valorDataFinal === "")) {
            // Erro
            res.innerHTML = `
                <div class="container--solucao falha">
                    <p>Insira uma Data Inicial e uma Data Final!</p>
                </div>
            `;
            return;
        }

        const dataInicial = new Date(valorDataInicial + "T00:00:00");
        const dataFinal = new Date(valorDataFinal + "T00:00:00");

        // Vamos fazer uma formatação de data para a exibição
        const diaInicialFormatado = (dataInicial.getDate() < 10) ? `0${dataInicial.getDate()}` : dataInicial.getDate();
        const mesInicialFormatado = ((dataInicial.getMonth() + 1) < 10) ? `0${(dataInicial.getMonth() + 1)}` : (dataInicial.getMonth() + 1);
        const anoInicialFormatado = dataInicial.getFullYear();
        const dataInicialFormatada = `${diaInicialFormatado}/${mesInicialFormatado}/${anoInicialFormatado}`;

        const diaFinalFormatado = (dataFinal.getDate() < 10) ? `0${dataFinal.getDate()}` : dataFinal.getDate();
        const mesFinalFormatado = ((dataFinal.getMonth() + 1) < 10) ? `0${(dataFinal.getMonth() + 1)}` : (dataFinal.getMonth() + 1);
        const anoFinalFormatado = dataFinal.getFullYear();
        const dataFinalFormatada = `${diaFinalFormatado}/${mesFinalFormatado}/${anoFinalFormatado}`;

        let dataCorrente = dataInicial;

        let diasUteis = 0;
        let feriado = 0;

        console.log("lista de feriados antes do loop: ", listaFeriados);

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

        res.innerHTML = `
            <div class="container--solucao sucesso">
                <p>Da data ${dataInicialFormatada} até data ${dataFinalFormatada}, tem ${diasUteis - feriado} dias úteis</p>
            </div>
        `;

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
            resModal.innerHTML = `
                <div class="container--solucao sucesso">
                    <p>Feriado regional adicionado em nossa lista!</p>
                </div>    
            `;
            return;
        }
        
        resModal.innerHTML = `
            <div class="container--solucao falha">
                <p>Feriado já existe em nossa lista!</p>
            </div>
        `;
        
    });
});