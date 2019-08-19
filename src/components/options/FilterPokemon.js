import Component from '../Component.js';

class FilterPokemon extends Component {
    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHTML() {
        const pokemonPlural = this.props.pokemonPlural;
        const types = getPokemonTypes(pokemonPlural);
        const optionsHTML = renderOptionsHTML(types);

        return /*html*/`
            <select class="filter">
                <option class="filter">All Pokemon</option>
                ${optionsHTML}
            </select>
        `;
    }
}

function getPokemonTypes(pokemonPlural) {
    const types = [];

    pokemonPlural.forEach(pokemon => {
        if(!types.includes(pokemon.type)) {
            types.puch(pokemon.type);
        }
    });

    types.sort();
    return types;
}

function renderOptionsHTML(types) {
    const optionsArray = types.map(type => {

        return /*html*/`
            <option value="${type}">${type}</option>
        `;
    });

    return optionsArray.join('');
}

export default FilterPokemon;