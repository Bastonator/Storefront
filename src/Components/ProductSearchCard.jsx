import Pic from '/src/PHOTO-2024-04-09-09-43-08.jpg'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Card({searchprods}){

    let {val} = useParams();

    let descriptResult = val;


    ///const searchedproducts = searchprods.filter(product => product.slug  === val)
    const searchedproducts = searchprods.filter((product) => {
        const searchedSlug = product.slug
        const searchedName = product.name
        .toLowerCase().includes(val)
        const searchedDescription = product.description.toLowerCase().includes(descriptResult.toLowerCase())
        return searchedDescription || searchedName && searchedSlug;
    });
    console.log(searchedproducts)

    const Products = [
        {id:1, name:'Creatinine'},
        {id:2, name:'Wey'},
        {id:3, name:'Boots'},
        {id:4, name:'Casein'},
        {id:5, name: 'Lifting Gloves'}
    ];
    

    const allProducts = searchedproducts.map(prod =>
        <div className="flex mt-5 " key={prod.slug}>
            <div className="" key={prod.slug}>
                <img className="h-56 object-cover 2xl:w-64 w-64 sm:w-44 md:w-64 lg:w-64 " src={prod.image} alt={prod.name}></img>
            </div>
            <Link to={`/product/${prod.slug}`} key={prod.slug}>
            <div className="p-8">
                <a href="" className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">{prod.name}</a>
                <p className="mt-2 text-black font-bold">D{prod.discount_price}</p>
                <p className="mt-2 line-through text-slate-500">D{prod.regular_price}</p>
            </div>
            </Link>
        </div>
)

    return(
        <>
        <div className="mt-60 mt max-w-lg mx-auto bg-white rounded-xl ml-1 sm:ml-16 md:ml-20 lg:ml-28 xl:ml-44 md:max-w-2xl">
            {allProducts}
        </div>
        </>
    )
}

export default Card