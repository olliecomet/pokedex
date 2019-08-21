import Component from '../../components/Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header class="main-header">
                <div>
                    <h1>Pokedex</h1>
                </div>
            </header>
        `;  
    }
}

export default Header;