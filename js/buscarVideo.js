import { conectaApi } from "./conectaApi.js";
import constroiCard from './mostrarVideo.js';

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector('[data-lista]')

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    } //enquanto lista.firstChild tiver algum elemento, o while vai repetir o removeChild;

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    console.log(busca);
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');

botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento))
