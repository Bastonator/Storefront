import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pic from '/src/PHOTO-2024-04-09-09-43-08.jpg'

function Homeproducts({Products}) {


    const getproducts = Products.map(product =>
        <Link to={`/product/${product.slug}`} key={product.slug}>
            <div key={product.slug}>
                        <img className="w-auto min-h-40" src={product.image} alt={product.slug} ></img>
                        <p>
                            {product.name}
                        </p>
            </div>
        </Link>
    )

    return (
        <>
        <div className='py-60 px-8 -mr-3 -ml-3 -mt-2 border-b-slate-700 max-sm:-mt-32'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
            {getproducts}
        </div>
        </div>
        </>
    )

}

export default Homeproducts