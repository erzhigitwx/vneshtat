import {Suspense, lazy} from "react";
import {Route, Routes} from "react-router-dom";

const Home = lazy(() => import("@/pages/home/home"));
const Journey = lazy(() => import("@/pages/journey/journey"));
const Flight = lazy(() => import("@/pages/flight/flight"));
const Bus = lazy(() => import("@/pages/bus/bus"));

const Layout = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/journey" element={<Journey/>}/>
                <Route path="/flight" element={<Flight/>}/>
                <Route path="/bus" element={<Bus/>}/>
            </Routes>
        </Suspense>
    );
};

export {Layout};