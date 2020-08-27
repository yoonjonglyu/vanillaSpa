//import './assets/css/index.css';
import Isa from './core/ISA.js';
import App from './app.js';

class Init extends Isa {
    return () {
        return  App.render();
    }
}

const Spa = new Init;
const app = Spa.return();
Spa.render(app);
