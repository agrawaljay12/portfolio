import {Footer} from "../component/Footer";
import {Header} from "../component/Header";
import {About} from "./About";
import {Projects} from "./Project";
import {Contact} from "./Contact";
import { TechnicalSkills } from "./TechnicalSkills";

const Home = ()=>{
    return(
        <>
        <section><Header/></section>
        <section id="about"><About/></section>
        <section id="project"><Projects/></section>
        <section id="contact"><Contact/></section>
        <section id="skills"><TechnicalSkills/></section>
        <section><Footer/></section>
        </>
    );
        
}
export {Home}