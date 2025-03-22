import { Link } from "react-router-dom"; 
import { useParams } from "react-router-dom";

function Category({categories}) {

    console.log(categories)

    const getcategory = categories.map((category) =>
        <Link to={`/category/${category.slug}`} key={category.slug}>
            <button className="transition-all w-auto px-11 h-10 ml-2 mt-4 mb-1 border-1 mr-3 border-slate-400 hover:border-black rounded-3xl bg-white hover:bg-black hover:text-white" key={category.slug}>
                {category.name}
            </button>
        </Link>
    )
    
    return(
        <>   
            <div className='flex w-full h-auto 2xl:mt-32 max-2xl:mt-28 max-xl:mt-28 max-lg:mt-28 max-md:mt-28 max-sm:mt-auto fixed max-sm:bg-transparent xl:bg-white lg:bg-white md:bg-white overflow-x-scroll'> 
                {getcategory}
            </div>
        </>
    )
}

{/*if (category.slug === cat) {
            <Link to={`/category/${category.slug}`} key={category.slug}>
                <button className="transition-all w-auto px-11 h-10 ml-2 mt-4 mb-1 border-1 mr-3 border-slate-400 hover:border-black rounded-3xl bg-black text-white hover:bg-white hover:text-black" key={category.slug}>
                    {category.name}
                </button>
            </Link>
        }
        else {
            <Link to={`/category/${category.slug}`} key={category.slug}>
                <button className="transition-all w-auto px-11 h-10 ml-2 mt-4 mb-1 border-1 mr-3 border-slate-400 hover:border-black rounded-3xl bg-white hover:bg-black hover:text-white" key={category.slug}>
                    {category.name}
                </button>
            </Link>
        }
        }*/}

export default Category