import Homeproducts from "../Components/homeproducts"
import Category from "../Components/Category"

function Homepage({categories, Products}) {

    return(
        <>
         <Category categories={categories} />
         <Homeproducts Products={Products} />
        </>
      
    )

}

export default Homepage