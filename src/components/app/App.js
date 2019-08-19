import Component from '../Component.js';
import Header from './Header.js';
import PokemonList from '../pokemon/PokemonList.js';
import FilterPokemon from '../options/FilterPokemon.js';
import pokemonData from '../../../data/pokemon.json';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const pokemonList = new PokemonList({ pokemonData: [] });
        console.log(pokemonList);
        const pokemonListDOM = pokemonList.renderDOM();
        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(pokemonListDOM);

        const url = 'data/pokemon.json';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                pokemonList.update({ pokemonData: data });
            });

        const filterPokemonProps = {
            pokemonData: pokemonData,
            onFilter: (pokemonType) => {
                let filteredPokemon;

                if(pokemonType === 'all') {
                    filteredPokemon = pokemonData;
                }
                else {
                    filteredPokemon = pokemonData.filter(pokemon => {
                        return pokemon.type === pokemonType;
                    });
                }

                const updateProps = { pokemonData: filteredPokemon };
                pokemonList.update(updateProps);
            }
        };

        const filterPokemon = new FilterPokemon(filterPokemonProps);
        const filterPokemonDOM = filterPokemon.renderDOM();

        const optionsSelection = dom.querySelector('.options-section');
        optionsSelection.appendChild(filterPokemonDOM);
    }

    renderHTML() {
        return /*html*/`
            <div class="wrapper">

                <!-- header appears here -->

                <nav class="main-nav">
                    <form>
                        <input name="search" type="text">
                        <button id="search-button">Search</button>
                    </form>

                    <section class="options-section">

                        <!-- filter goes here -->

                    </section>
                </nav>

                <main class="main-content">
                    <section class="list-section">

                        <!-- list goes here -->

                    </section>
                </main>
            </div>
        `;
    }
}

export default App;