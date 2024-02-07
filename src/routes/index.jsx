import React from 'react';
import {Routes, Route} from "react-router-dom";
import Xodimlar from "../pages/xodimlar";
import Lavozimlar from "../pages/lavozimlar";
import Ilmiy_daraja from "../pages/ilmiy_daraja";
import Layout from "../components/Layout";
import Landing from "../pages/landing"

function Index(props) {
    return (
        <div>
            <Routes>
                <Route path={"/landing"} element={<Landing/>}/>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/xodimlar"} element={<Xodimlar/>}/>
                    <Route path={"/lavozimlar"} element={<Lavozimlar/>}/>
                    <Route path={"/ilmiy_daraja"} element={<Ilmiy_daraja/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default Index;