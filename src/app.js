import {Isa, Spa} from './core/ISA.js';
Spa.getStyle('app.css');
import Header from './components/header.js';
import Footer from './components/footer.js';
import Hello from './page/hello.js';

const element = `
<div id= "wrap">
    ${Header.return()}
    <main role="main">
        ${Hello.return({test : 'prop테스트'})}
    </main>
    ${Footer.return()}
</div>
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