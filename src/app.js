//import './assets/css/app.css';
import Isa from './core/ISA.js';
import Header from './components/header.js';
import Footer from './components/footer.js';


const element = `
    ${Header.render()}
    <main role="main">
        <h2>Hello, ISA</h2>
    </main>
    ${Footer.render()}
`; 
class App {
    render () { 
        return {template :element};     
    }
}

export default new App;