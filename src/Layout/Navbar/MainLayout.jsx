import Navbar from "./Navbar";
import Category from "../../Components/Category";
import { Outlet } from "react-router-dom";

function Layout({categories, setProduct, setProducts, setResults}) {

    return(
    <>
        <Navbar setProduct={setProduct} setProducts={setProducts} setResults={setResults}/>
        <Category categories={categories} />
        <Outlet/>
    </>
    )
}

export default Layout