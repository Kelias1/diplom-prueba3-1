// import { React } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import { Cart } from "./components/cart/Cart";
// import { Catalog } from "./components/catalog/Catalog";
// import { About } from "./pages/About";
// import { MainPage } from "./components/mainPage/MainPage";
// import { Page404 } from "./pages/Page404";
// import { ProductPage } from "./components/productPage/ProductPage";
// import { Menu } from "./components/menu/Menu";
// import { Contacts } from "./pages/Contacts";
// import { Footer } from "./UI/Footer";
// import { Banner } from "./UI/Banner.jsx";
// import { useDispatch } from "react-redux";
// import { resetClicks } from "./app/store/searchBarSlice";

// function App() {
//     const dispatch = useDispatch();

//     const hideMenuSearchBar = () => {
//         dispatch(resetClicks());
//     };

//     return (
//         <Routes basename="/diplom-prueba3-1">
//             <Route className="App">
// 						<Route path="/" element={<Menu />} />
//                 {/* <Menu /> */}
//                 <main className="container" onClick={hideMenuSearchBar}>
//                     <div className="row">
//                         <div className="col">
//                             <Banner />
//                             <Routes>
//                                 <Route
//                                     path="/"
//                                     exact
//                                     element={<MainPage />}
//                                 ></Route>

//                                 <Route
//                                     path="/about"
//                                     element={<About />}
//                                 ></Route>
//                                 <Route
//                                     path="/products/:prdId"
//                                     element={<ProductPage />}
//                                 ></Route>
//                                 <Route path="/cart" element={<Cart />}></Route>
//                                 <Route
//                                     path="/contacts"
//                                     element={<Contacts />}
//                                 ></Route>
//                                 <Route path="*" element={<Page404 />}></Route>
//                                 <Route
//                                     path="/:catId"
//                                     element={<MainPage />}
//                                 ></Route>
//                                 <Route
//                                     path="/catalog/:catId?"
//                                     element={<Catalog isCatalogPage={true} />}
//                                 ></Route>
//                             </Routes>
//                         </div>
//                     </div>
//                 </main>

//                 <Footer />
//             </Route>
//         </Routes>
//     );
// }

// export default App;


// import { React } from "react";
// import { Routes, Route } from "react-router-dom";
// import { Cart } from "./components/cart/Cart";
// import { Catalog } from "./components/catalog/Catalog";
// import { About } from "./pages/About";
// import { MainPage } from "./components/mainPage/MainPage";
// import { Page404 } from "./pages/Page404";
// import { ProductPage } from "./components/productPage/ProductPage";
// import { Menu } from "./components/menu/Menu";
// import { Contacts } from "./pages/Contacts";
// import { Footer } from "./UI/Footer";
// import { Banner } from "./UI/Banner.jsx";
// import { useDispatch } from "react-redux";
// import { resetClicks } from "./app/store/searchBarSlice";

// function App() {
//     const dispatch = useDispatch();

//     const hideMenuSearchBar = () => {
//         dispatch(resetClicks());
//     };

//     return (
//         <div className="App">
//             <Menu />
//             <main className="container" onClick={hideMenuSearchBar}>
//                 <div className="row">
//                     <div className="col">
//                         <Banner />
//                         <Routes basename="/diplom-prueba3-1">
//                             <Route path="/" exact element={<MainPage />} />
//                             <Route path="/about" element={<About />} />
//                             <Route path="/products/:prdId" element={<ProductPage />} />
//                             <Route path="/cart" element={<Cart />} />
//                             <Route path="/contacts" element={<Contacts />} />
//                             <Route path="*" element={<Page404 />} />
//                             <Route path="/:catId" element={<MainPage />} />
//                             <Route path="/catalog/:catId?" element={<Catalog isCatalogPage={true} />} />
//                         </Routes>
//                     </div>
//                 </div>
//             </main>
//             <Footer />
//         </div>
//     );
// }

// export default App;


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/cart/Cart";
import { Catalog } from "./components/catalog/Catalog";
import { About } from "./pages/About";
import { MainPage } from "./components/mainPage/MainPage";
import { Page404 } from "./pages/Page404";
import { ProductPage } from "./components/productPage/ProductPage";
import { Menu } from "./components/menu/Menu";
import { Contacts } from "./pages/Contacts";
import { Footer } from "./UI/Footer";
import { Banner } from "./UI/Banner.jsx";
import { useDispatch } from "react-redux";
import { resetClicks } from "./app/store/searchBarSlice";

function App() {
    const dispatch = useDispatch();

    const hideMenuSearchBar = () => {
        dispatch(resetClicks());
    };

    return (
        <BrowserRouter basename="/diplom-prueba3-1">
            <div className="App">
                <Menu />
                <main className="container" onClick={hideMenuSearchBar}>
                    <div className="row">
                        <div className="col">
                            <Banner />
                            <Routes>
                                <Route path="/" exact element={<MainPage />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/products/:prdId" element={<ProductPage />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/contacts" element={<Contacts />} />
                                <Route path="*" element={<Page404 />} />
                                <Route path="/:catId" element={<MainPage />} />
                                <Route path="/catalog/:catId?" element={<Catalog isCatalogPage={true} />} />
                            </Routes>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;