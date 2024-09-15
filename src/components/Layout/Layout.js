import React from "react";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import Navbar from "./../Navbar/Navbar";

const Layout = ({children}) => {
    return(
       <div>
       <Navbar />
       <Header data={"Online shop"}/>
            {children}
       <Footer />
       </div>
    )
}
export default Layout;