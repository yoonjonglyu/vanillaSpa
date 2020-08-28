import {Isa, Spa} from '../core/ISA.js';
Spa.getStyle('footer.css');

const element = `
<footer>
    <copyright>ISA ALL RIGHT RESERVE.</copyright>
</footer>
`;

class Footer extends Isa {
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

export default new Footer; 