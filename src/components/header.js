import {Isa, Spa} from '../core/ISA.js';
Spa.getStyle('header.css');

const element = `
<header>
    <h1>header section.</h1>
</header>
`;

class Header extends Isa {
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

export default new Header;