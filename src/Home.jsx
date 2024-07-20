import Header from "./components/Header.jsx"
import HomeSection from "./components/HomeSection.jsx"
import Products from "./components/Products"
import Footer from "./components/footer"
import './assets/css/style1.css';

export default function Home() {
    return (
        <>
            <HomeSection/>
            <Products/>
            <Footer/>
        </>
    )
}