import React from "react";
import { Header } from "../components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Features } from "../pages/client/features";
import { Feature } from "../pages/client/feature";
import { Search } from "../pages/client/search";
import { Login } from "../pages/login";
// import { ExploreContainer } from "../pages/client/index";
import { CsvReader } from "../components/csv-reader";
import FeatureList from "../pages/client/featureList";
import FollowingList from "../pages/client/followingList";
// import FeaturePage from "../pages/client/featurePage";
import { Haappy } from "../components/myResponsiveBullet";
import FeatureSearchList from "../pages/client/featureSearchList";
import FeatureList2 from "../pages/client/featureList copy";
import Price from "../components/price";
// import { ExploreContainer } from "../pages/client/ExploreContainer";

const ClientRoutes = [
  <Route key={1} path="/" element={<Features />} />,
  <Route key={2} path="/features/:id/*" element={<Feature />} />,
  <Route key={3} path="/search" element={<Search />} />,
  <Route key={4} path="/test" element={<FeatureList2 />} />,
  <Route key={5} path="/login" element={<Login />} />,
  // <Route key={6} path="/" element={<Features />} />,
  <Route key={7} path="/my" element={<FollowingList />} />,
  <Route key={8} path="/chart" element={<Haappy />} />,
  // <Route key={9} path="price" element={<Price />} />,
  // <Route key={9} path="/" element={<FeatureList />} />,
  <Route key={10} path="/test-search" element={<FeatureSearchList />} />,
];

export const LoggedInRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>{ClientRoutes}</Routes>
      </BrowserRouter>
    </div>
  );
};
