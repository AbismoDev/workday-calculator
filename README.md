# Calculadora de Dias Úteis 🗓️

## 📝 Descrição
<p>Quarto projeto do meu plano de estudos de JavaScript. Esta é uma ferramenta prática para calcular o número exato de dias úteis (segunda a sexta-feira) entre duas datas específicas. O projeto foi um exercício profundo de lógica de iteração sobre datas e manipulação condicional.</p>

## 🚀 Funcionalidades
-   Seleção de data inicial e data final.
-   Cálculo preciso do número de dias úteis, desconsiderando fins de semana (sábados e domingos).
-   **Bônus:** Inclui uma lista interna de feriados nacionais que também são desconsiderados no cálculo.
-   **Bônus:** Permite que o usuário adicione datas de feriados regionais para um cálculo ainda mais personalizado.
-   Validação para garantir que a data final seja posterior à data inicial.

## 💻 Tecnologias Utilizadas
-   ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
-   ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
-   ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 🖼️ Screenshot
![Screenshot da Aplicação](https://github.com/AbismoDev/workday-calculator/blob/main/assets/img/screenshot.png?raw=true)

## 🔗 Links
-   **Deploy:** https://workday-calculator.vercel.app
-   **Repositório:** https://github.com/AbismoDev/workday-calculator

## 🧠 Aprendizados
<p>Este projeto solidificou meu entendimento sobre a manipulação de objetos <code>Date</code> em JavaScript. O principal desafio foi criar um algoritmo de iteração que "caminhasse" dia a dia entre duas datas. A solução envolveu o uso de um laço <code>while</code> e a mutação do objeto de data a cada iteração. Aprendi a usar o método <code>.getDay()</code> para a verificação condicional de dias da semana. A implementação dos feriados foi um ótimo exercício de manipulação de arrays e de como comparar datas de forma eficaz, evitando as armadilhas da comparação direta de objetos.</p>