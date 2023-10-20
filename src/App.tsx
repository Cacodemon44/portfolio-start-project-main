import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Footer} from "./layout/footer/Footer";
import {About} from "./layout/sections/about/About";
import {Works} from "./layout/sections/projects/Works";
import {Contacts} from "./layout/sections/contacts/Contacts";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

