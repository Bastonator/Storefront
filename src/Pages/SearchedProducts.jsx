import Card from "../Components/ProductSearchCard";
import Navbar from "../Layout/Navbar/Navbar";

function SearchedProducts({searchprods}) {

    return(
        <Card searchprods={searchprods} />
    )
}

export default SearchedProducts