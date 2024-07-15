import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import  Single  from "./views/single";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import injectContext from "./store/appContext";


const Layout = () => {
    const basename = process.env.BASENAME || "";
	//el nombre base se utiliza cuando su proyecto se publica en un subdirectorio y no en la raíz del dominio
// puedes establecer el nombre base en el archivo .env ubicado en la raíz de este proyecto, por ejemplo: BASENAME=/reacthello-webapp/
    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home/>}/> 
						{/* Donde aparecen todas las card de vehiculos, planetas opersonajes */}
						<Route path="/:type/:id" element={<Single />} />
						{/* Al pulsar en icono (botton) de cada card, te lleva a sus detalles. Por ejemplo, si type es characters y item.id es 1, el enlace debería ser /characters/1. */}
                        <Route path="*" element={<h1>Not found!</h1>}/>
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
