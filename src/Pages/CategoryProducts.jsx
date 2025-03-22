import CategorizedCard from "../Components/ProductCategoryCard";


function CategoryProducts({products, categories}) {

    return(
        <>
            <CategorizedCard products={products} categories={categories} />
        </>
        )
}

export default CategoryProducts