import { Link } from "react-router-dom"; 
import { useParams } from "react-router-dom";

function Clicked_Category({categories, category_slug}) {

    console.log(categories)
    console.log(category_slug.slug)

    let categorySlug = category_slug.slug


    const getcategory = categories.map(categori => {

        console.log(categori)


        if (categori.slug === categorySlug) {
            return (
                <Link to={`/category/${categori.slug}`} key={categori.slug}>
                    <button className="transition-all w-auto px-11 h-10 ml-2 mt-4 mb-1 border-1 mr-3 border-slate-400 hover:border-black rounded-3xl bg-black hover:bg-white hover:text-black text-white" key={categori.slug}>
                        {categori.name}
                    </button>
                </Link>
            )
        }
        else {
            return(
                <Link to={`/category/${categori.slug}`} key={categori.slug}>
                    <button className="transition-all w-auto px-11 h-10 ml-2 mt-4 mb-1 border-1 mr-3 border-slate-400 hover:border-black rounded-3xl bg-white hover:bg-black hover:text-white" key={categori.slug}>
                        {categori.name}
                    </button>
                </Link>
            )
        }

        }
    )
    

    return(
        <>   
            <div className='flex w-full h-auto 2xl:mt-32 max-2xl:mt-28 max-xl:mt-28 max-lg:mt-28 max-md:mt-28 max-sm:mt-auto fixed max-sm:bg-transparent xl:bg-white lg:bg-white md:bg-white overflow-x-scroll'> 
                {getcategory}
            </div>
        </>
    )
}

export default Clicked_Category