class ISA {
    constructor(Isa, head, style){
        this.Isa = document.querySelector('body');
        this.head = document.querySelector('head');
        this.style = [];
    }
    // 렌더링
    render () {   
        this.Isa.innerHTML = this.Spa.template;
    }
    // 템플릿
    template () {
        return this.Spa.template;
    }
    // css 가져오기
    getStyle (url) {
        const link = document.createElement('link');
        
        link.href = `../src/assets/css/${url}`;
        link.type = "text/css";
        link.rel = "stylesheet";

        this.style.push(link);      
    }
    // cssom 렌더링
    setStyle () {
        this.style.reverse().map((css) => this.head.appendChild(css));
    }
};

const VanilaSpa = new ISA;

export { ISA as Isa, VanilaSpa as Spa};