import {Footer} from "../component/Footer";
import {Header} from "../component/Header";
import {About} from "./About";
import {Projects} from "./Project";
import {Contact} from "./Contact";

const Home = ()=>{
    return(
        <>
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
        </>
    );
        
}
export {Home}