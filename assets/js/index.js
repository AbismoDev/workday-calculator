document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");
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

        while(dataCorrente <= dataFinal) {
            if(dataCorrente.getDay() > 0 && dataCorrente.getDay() < 6){
                diasUteis++;                
            }

            dataCorrente.setDate(dataCorrente.getDate() + 1);
        }

        res.innerHTML = `
            <div class="container--solucao sucesso">
                <p>Da data ${dataInicialFormatada} até data ${dataFinalFormatada}, tem ${diasUteis} dias úteis</p>
            </div>
        `;

    });
});