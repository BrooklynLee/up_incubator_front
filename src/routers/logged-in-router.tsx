import React from "react";
import { Header } from "../componnents/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Features } from "../pages/client/features";
import { Feature } from "../pages/client/feature";
import { Search } from "../pages/client/search";
import { NotFound } from "../pages/404";

const ClientRoutes = [
    <Route key={1} path="/" element={<Features />} />,
    <Route key={2} path="/features/:id" element={<Feature />} />,
    <Route key={3} path="/search" element={<Search />} />
    // <Route key={2} path="/confirm" exact>
    //   <ConfirmEmail />
    // </Route>,
    // <Route key={3} path="/edit-profile" exact>
    //   <EditProfile />
    // </Route>,
];

export const LoggedInRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    {ClientRoutes}
                    {/* <Route>
                        <NotFound />
                    </Route> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}