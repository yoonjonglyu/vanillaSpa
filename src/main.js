import {Isa, Spa} from './core/ISA.js';
Spa.getStyle('index.css');
import App from './app.js';

class Init extends Isa {
    Spa = {
        template : App.return()
    }
}

const ISA = new Init;
Spa.setStyle();
ISA.render();
