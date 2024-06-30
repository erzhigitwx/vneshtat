import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@/pages/home/home"));
const Journey = lazy(() => import("@/pages/journey/journey"));

const Layout = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/journey" element={<Journey />} />
            </Routes>
        </Suspense>
    );
};

export { Layout };