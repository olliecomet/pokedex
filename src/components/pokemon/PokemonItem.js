import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
            <li class="pokemon-item">
                <img src="${pokemon.url_image}" alt="${pokemon.pokemon}">
                <h3>${pokemon.pokemon}</h3>
                <p class="pokemon-type">${pokemon.type_1} ${pokemon.type_2}</p>
            </li>
        `;
    }
}

export default PokemonItem;