export default class ISA {
    constructor(Isa){
        this.Isa = document.querySelector('body');
    }
    render (components) {   
        this.Isa.innerHTML = components.template;
    }
}