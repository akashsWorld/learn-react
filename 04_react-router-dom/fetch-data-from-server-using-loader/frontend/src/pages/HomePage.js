import React, { Fragment } from "react";
import { Outlet,useNavigation } from "react-router-dom";
import MainNavigation from "./../components/MainNavigation";

const HomePage = () => {

    const navigation = useNavigation();
  return (
    <Fragment>
      <MainNavigation />
        {navigation.state==='loading' && <h1>Loading page for home component....</h1>}
        <Outlet/>
    </Fragment>
  );
};

export default HomePage;
