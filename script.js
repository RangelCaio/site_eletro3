const nome = "Serjão Eletro";
const ano = "2024";
const twitter = "@Loja_eletro";
const facebook = "@Loja_eletro";
const instagram = "@Loja_eletro";
const linkedin = "@Loja_eletro";
const sexo = "Masculino";
const localizacao = "Osasco";

const footerDiv = document.getElementById("footer");

footerDiv.innerHTML = `
    <p>${nome}</p>
    <p>Ano - ${ano}</p>
    <p>Twitter: ${twitter}</p>
    <p>Facebook: ${facebook}</p>
    <p>Instagram: ${instagram}</p>
    <p>LinkedIn: ${linkedin}</p>
    <p>Sexo: ${sexo}</p>
    <p>Localização - ${localizacao}</p>
`;

