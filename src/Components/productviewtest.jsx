import { useEffect, useState } from "react";
//import axios from "axios";
import { useParams } from "react-router-dom";
import Pic from '/src/PHOTO-2024-04-09-09-43-08.jpg'
import { Link } from "react-router-dom";


const ProductCardTest = () => {

    let {slug} = useParams();

    const [product, setProduct] = useState({})

    useEffect (() => {
        getProducts()
    }, [slug])

    let getProducts = async () => {
        let response = await fetch (`http://127.0.0.1:8000/search/product/${slug}`)
        let data = await response.json()
        setProduct(data)
        console.log(data)
    }

    console.log(slug)
    console.log(product)

    let productstyle = {
        width: '100%',
    }

    console.log(product.category)

    return(
        <>
            <div className="py-60 px-8 ml-0 border-b-slate-700 max-sm:-mt-32 content-center container" style={productstyle}>
                <div>
                    <div className="sm:flex">
                            <div className="h-1/6">
                                <img src={Pic} width={800} className="h-4/6"></img>
                            </div>
                        <div>
                            <h1 className="text-5xl font-medium uppercase mb-1 ml-2 mt-3">
                                {product.name}
                            </h1>
                            <p className="font-semibold space-x-2 text-black ml-3 mb-4 text-2xl">
                                <span>Availability:</span>
                                <span className="text-green-600 font-bold">10 IN STOCK</span>
                            </p>
                            <p className="font-semibold space-x-2 text-black ml-3 mb-4 text-2xl">
                                <span>Category:</span>
                                <span className="font-bold text-blue-900">
                                    <Link to={`/category/${product.category}`}>
                                    {product.category}
                                    </Link>
                                    </span>
                            </p>
                            <div className="flex items-baseline mb-1 space-x-2 ml-3 font-normal">
                                <p className="text-3xl text-black font-semibold">D{product.discount_price}</p>
                                <p className="text-2xl line-through text-gray-500">D{product.regular_price}</p>
                            </div>
                            <p className="font-semibold space-x-2 text-gray-600 ml-3 mb-4 mt-5 text-2xl">
                                {product.description}
                            </p>
                            {! cartButtonClickStatus &&
                            //1
                            <Link key={product.slug}>
                                <button type="add-button" onClick={cartAddButtonHandler} className="transition-all w-auto px-11 h-10 ml-2 mt-7 mb-5 border-1 mr-3 border-slate-400 hover:border-black rounded-3xl bg-white hover:bg-black hover:text-white hover:no-underline" key={product.slug}>
                                        Add to cart
                                </button>
                            </Link>}
                            {cartButtonClickStatus &&
                            //2
                            <Link key={product.slug}>
                                <button type="remove-button" onClick={cartRemoveButtonHandler} className="transition-all w-auto px-11 h-10 ml-2 mt-7 mb-5 border-1 mr-3 border-orange-600 hover:border-orange-600 rounded-3xl bg-white hover:bg-orange-600 hover:text-white hover:no-underline" key={product.slug}>
                                        Remove from cart
                                </button>
                            </Link>}
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        <img src={Pic} className="w-full cursor-pointer border border-black"></img>
                        <img src={Pic} className="w-full cursor-pointer border border-black"></img>
                        <img src={Pic} className="w-full cursor-pointer border border-black"></img>
                        <img src={Pic} className="w-full cursor-pointer border border-black"></img>
                        <img src={Pic} className="w-full cursor-pointer border border-black"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCardTest