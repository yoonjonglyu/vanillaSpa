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

            const length = Object.keys(this.Spa.data).length;
            if(length > 0){
                for(const [key, value] of Object.entries(this.Spa.data)){
                    if(this.Spa.template){
                        const regExp =  new RegExp(key, 'gi');
                        
                        if(value.includes('Prop-') === true){
                            console.error(`Invalid Prop data : ${key}`);
                            this.Spa.template = this.Spa.template.replace(regExp, '@@Invalid Prop data@@');
                        } else {
                            this.Spa.template = this.Spa.template.replace(regExp, value);
                        }
                    }
                }

                this.Spa.template = this.Spa.template.replace(/\{\{/g, '').replace(/\}\}/g, '');
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