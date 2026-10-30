import { Outlet, Route, Routes } from "react-router-dom";

import Nav from "@/components/layout/Nav/nav.tsx";
import ProductCarousel from "@/components/layout/ProductCarousel";
import MarqueeCa from "@/components/layout/ProductMarquee";
import Bar from "./components/layout/Bar/bar";
import { ListProducts } from "./components/layout/Products/ListProdutcs";
import RouteProgress from "./components/layout/RouteProgress";
import Carrito from "./pages/carrito";
import Favorites from "./pages/favorites";
import Login from "./pages/Login/login";

// LAYOUT PRINCIPAL
function MainLayout() {
    return (
        <main className="min-h-screen w-full min-w-0">
            <Nav />
            <Outlet />
        </main>
    );
}

// RUTAS
export default function App() {
    return (
        <>
            <RouteProgress />

            <Routes>
                <Route path="/login" element={<Login />} />

                <Route element={<MainLayout />}>
                    <Route
                        path="/"
                        element={
                            <>
                                <Bar />
                                <ProductCarousel />
                                <div className="h-[0.1px] bg-[#6b6b6b] mt-2 mb-5" />
                                <MarqueeCa />
                                <div className="h-[0.1px] bg-[#6b6b6b] mt-2 mb-5" />
                                <ListProducts />
                            </>
                        }
                    />

                    <Route path="/favoritos" element={<Favorites />} />
                    <Route path="/carrito" element={<Carrito />} />
                </Route>
            </Routes>
        </>
    );
}