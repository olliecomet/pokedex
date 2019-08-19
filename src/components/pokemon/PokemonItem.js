import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
            <li class="pokemon-item">
                <img src="${pokemon.url}" alt="${pokemon.name}">
                <h3>${pokemon.name}</h3>
                <p class="pokemon-type">${pokemon.type}</p>
            </li>
        `;
    }
}

export default PokemonItem;