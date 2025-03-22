import { useEffect, useState } from 'react';
import Pic from '/src/PHOTO-2024-04-09-09-43-08.jpg'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Clicked_Category from './ClickedCategory';

function CategorizedCard({products, categories}) {

    let {slug} = useParams();

    let category_slug = useParams();

    const categoryfilterproducts = products.filter(product => product.category === slug)
    console.log(categoryfilterproducts)

    const getproducts = categoryfilterproducts.map(product =>
        <Link to={`/product/${product.slug}`} key={product.slug}>
            <div key={product.slug}>
                        <img className="w-auto min-h-40" src={Pic} alt='Wriber'></img>
                        <p>
                            {product.name}
                        </p>
            </div>
        </Link>
    )

    return (
        <>
        <Clicked_Category categories={categories} category_slug={category_slug} />
        <div className='py-60 px-8 -mr-3 -ml-3 -mt-2 border-b-slate-700 max-sm:-mt-32'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
            {getproducts}
        </div>
        </div>
        </>
    )

}

export default CategorizedCard