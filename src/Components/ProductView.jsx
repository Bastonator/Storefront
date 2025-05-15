import { useEffect, useState } from "react";
//import axios from "axios";
import { useParams } from "react-router-dom";
import Pic from '/src/PHOTO-2024-04-09-09-43-08.jpg'
import { Link } from "react-router-dom";


function ProductCard(){ 

    // 3 
    const [product, setProduct] = useState({})

    //1 & 2
    const [cartButtonClickStatus, setcartButtonClickStatus] = useState (false)

    //3
    let {slug} = useParams();


    //4
    const [image, setImages] = useState({
        image1 : product.image,
        image2 : product.image_first,
        image3 : product.image_second,
        image4 : product.image_third,
        image5 : Pic
    })

    const [activeImg, setActiveImg] = useState(product.image)

    useEffect(() => {
        if (product.image && product.image.length > 0) {
            setActiveImg(product.image);
        }
    }, [product.image]);

    useEffect (() => {
        getProducts()
    }, [slug])

    //1
    const cartAddButtonHandler = () => {
        let previousCart = localStorage.getItem('CartData')
        let cartJson = JSON.parse(previousCart)
        let CartData = {
            'product': {
                'slug': product.slug,
                'name': product.name,
                'regular_price': product.regular_price
            }
        }
        if(cartJson!=null) {
            cartJson.push(CartData)
            let cartString = JSON.stringify(cartJson)
            localStorage.setItem('CartData', cartString)
        }
        else {
            let newCartList = []
            newCartList.push(CartData)
            let cartString = JSON.stringify(newCartList)
            localStorage.setItem('CartData', cartString)
        }
        setcartButtonClickStatus(true)
    }

    //4
    const getCartData = () => {
        let cartContent = []
        if (localStorage.getItem('CartData')) {
            cartContent = JSON.parse(localStorage.getItem('CartData'))
        }
        return cartContent;
    }
    //console.log(getCartData())

    //2
    const cartRemoveButtonHandler = () => {
        const cartContent = getCartData()
        const notcartContent = cartContent.filter(content => content.product.slug !== slug)
        console.log(notcartContent)
        localStorage.setItem('CartData', JSON.stringify(notcartContent))
        setcartButtonClickStatus(false)
    };

    {/*//2
    const cartRemoveButtonHandler = () => {
        const cartContent = getCartData()
        const notcartContent = cartContent.filter((content) => {
            if()
        })
        console.log(notcartContent)
        localStorage.setItem('CartData', JSON.stringify(cartContent))
        setcartButtonClickStatus(false)
    };*/}

   
    

    let getProducts = async () => {
        let response = await fetch (`http://51.20.76.251/search/product/${slug}`)
        let data = await response.json()
        setProduct(data)
        console.log(data)
    }

    console.log(slug)
    console.log(product)

    {/*const cartContent = getCartData()
    const getallproductsinscart = cartContent.map(content => content.product.slug)
    console.log(getallproductsinscart)

    const productsincart_thatiscurrently_beingviewed = getallproductsinscart.filter(productincart => productincart === slug)
    console.log(productsincart_thatiscurrently_beingviewed)

    window.onload = () => {
        if(productsincart_thatiscurrently_beingviewed === slug){
            console.log(slug)
            setcartButtonClickStatus(true)
        } else if(productsincart_thatiscurrently_beingviewed !== slug) {
            console.log(slug)
            setcartButtonClickStatus(false)
        }
    }*/}

    let productstyle = {
        width: '100%',
    }

    return(
        <>
            {/*<div className='py-60 px-8 ml-0 -mt-2 border-b-slate-700 max-sm:-mt-32 content-center' style={productstyle}>
            <div className="w-full">
                        <img src={Pic} alt='Wriber'></img>
                        <p>
                            {product.name}
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
            </div>*/}

            <div className="py-60 px-8 ml-0 border-b-slate-700 max-sm:-mt-32 content-center container" style={productstyle}>
                <div>
                    <div className="sm:flex">
                            <div className="h-1/6">
                                <img src={activeImg} alt={product.image} width={800} className="h-4/6 aspect-square object-cover rounded-md"></img>
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
                    <div className="grid grid-cols-5 gap-4 mt-4 justify-between">
                        <img src={product.image} className="w-full h-full rounded-sm cursor-pointer border border-black" onClick={() => setActiveImg(product.image)}></img>
                        <img src={product.image_first} className="w-full h-full rounded-sm cursor-pointer border border-black" onClick={() => setActiveImg(product.image_first)}></img>
                        <img src={product.image_second} className="w-full h-full rounded-sm cursor-pointer border border-black" onClick={() => setActiveImg(product.image_second)}></img>
                        <img src={product.image_third} className="w-full h-full rounded-sm cursor-pointer border border-black" onClick={() => setActiveImg(product.image_third)}></img>
                        <img src={image.image5} className="w-full h-full rounded-sm cursor-pointer border border-black" onClick={() => setActiveImg(image.image5)}></img>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ProductCard