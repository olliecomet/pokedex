import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {
    onRender(dom) {
        const pokemonPlural = this.props.pokemonData;
        
        pokemonPlural.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokemonItem = new PokemonItem(props);
            const pokemonItemDOM = pokemonItem.renderDOM();
            dom.appendChild(pokemonItemDOM);            
        });
    }

    renderHTML() {
        return /*html*/`
            <ul class="pokemon-plural"></ul>
        `;
    }
}

export default PokemonList;