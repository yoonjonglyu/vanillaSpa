
import {Isa, Spa} from '../core/ISA.js';
Spa.getStyle('hello.css');

const element = `
<h2>{{ message }} {{ TeSt }}</h2>
`;

class Hello extends Isa {
    Spa = {
        data : {
            message : '<span>Hello, ISA</span>',
            test : '<span>{{ Prop-Test }}</span>'
        },
        template : element,
        event : function () {
            console.log(this);
            this.addEventListener('click', () => {
                console.log(this);
            });
        }
    }
}

export default new Hello; 