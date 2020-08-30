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
    // class 객체 가져오기
    return(obj) {
        if(obj){
            for(const [key, value] of Object.entries(this.Spa.data)){
                if(this.Spa.data && obj[key]){
                    if(value.includes('Prop-') === true){
                        const regExp =  new RegExp('Prop-' + key, 'gi');
                        this.Spa.data[key] = this.Spa.data[key].replace(regExp, obj[key]);
                    }
                }
            }
        }

        return this.template();
    }
    // 템플릿
    template () {
        if(this.Spa.data){
            const dataLength = Object.keys(this.Spa.data).length;
            const templateExp =  [new RegExp('{{', 'g'), new RegExp('}}', 'g')];
            let state = this.Spa.template.split(' ').join('');
            const templateLength = [[...state.matchAll(templateExp[0])].length, [...state.matchAll(templateExp[1])].length];

            if(dataLength > 0 && dataLength === templateLength[0] && dataLength === templateLength[1]){
                for(const [key, value] of Object.entries(this.Spa.data)){
                    if(this.Spa.template){
                        const regExp =  new RegExp(key, 'gi');
                        
                        if(value.includes('Prop-') === true){
                            console.error(`Invalid Prop data : ${key}`);
                            this.Spa.template = this.Spa.template.replace(regExp, '<span style="font-size: 2rem; color : red;">@@Invalid Prop data@@</span>');
                        } else {
                            this.Spa.template = this.Spa.template.replace(regExp, value);
                        }
                    }
                }
                
                this.Spa.template = this.Spa.template.replace(/\{\{/g, '').replace(/\}\}/g, '');
            } else if(dataLength !== templateLength[0] && templateLength[0] === templateLength[1]){
                console.error(`Undefined Data`);
                this.Spa.template = '<span style="font-size: 2rem; color : red;">@@Undefined Data@@</span>';
            } else {
                console.error(`Syntax Error`);
                this.Spa.template = '<span style="font-size: 2rem; color : red;">@@Syntax Error@@</span>';
            }
        }

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
        const links = this.head.querySelectorAll('link');
        if(links.length > 0){
            links.map((node) => node.remove());
        }

        this.style.reverse().map((css) => this.head.appendChild(css));
    }
};

const VanilaSpa = new ISA;

export { ISA as Isa, VanilaSpa as Spa};