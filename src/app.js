//import './assets/css/app.css';
import {Isa, Spa} from './core/ISA.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

const element = `
    ${Header.template()}
    <main role="main">
        <h2>Hello, ISA</h2>
    </main>
    ${Footer.template()}
`;

class App extends Isa {
    Spa = {
        template : element,
        event : function () {
            console.log(this);
            this.addEventListener('click', () => {
                console.log(this);
            });
        }
    }
}

export default new App;