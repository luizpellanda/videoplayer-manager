import { conectaApi } from "./conectaApi";

const formulario = document.querySelector('[data-formulario]');
const botao = document.getElementById('submit__button')

async function criarVideo(evento) {
    evento.preventDefault();

    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.random() * 10).toString();

    await conectaApi.criaVideo(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html";
};

formulario.addEventListener('submit', evento => criarVideo(evento));