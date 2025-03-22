import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter, createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Layout from "./Layout/Navbar/MainLayout";
import CategoryProducts from "./Pages/CategoryProducts"
import ProductPage from "./Pages/ProductPage"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import ConfirmOrder from "./Pages/OrderConfirmation";
import SearchedProducts from "./Pages/SearchedProducts";
import ProductCardTest from "./Components/productviewtest";

function Start() {

  const [categories, setCategory] = useState([])

  useEffect (() => {
    axios.get("/search/category")

    .then(res => {
      console.log(res.data)
      setCategory(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [])

  const [Products, setProduct] = useState([])

    useEffect (() => {
        axios.get("/search/products")

        .then(res => {
        console.log(res.data)
        setProduct(res.data)
        })
        .catch(err => {
        console.log(err.message)
        })
    }, [])
  
  const [products, setProducts] = useState ([])

  useEffect (() => {
      axios.get("/search/products")

      .then(res => {
      console.log(res.data)
      setProducts(res.data)
      })
      .catch(err => {
      console.log(err.message)
      })
  }, [])


  const [searchprods, setsearchprods] = useState ([])

  useEffect (() => {
      axios.get("/search/products")

      .then(res => {
      console.log(res.data)
      setsearchprods(res.data)
      })
      .catch(err => {
      console.log(err.message)
      })
  }, [])


  {/*const [searchProducts, setResults] = useState ([])

  useEffect (() => {
      axios.get("/search/products")

      .then(res => {
      console.log(res.data)
      setResults(res.data)
      })
      .catch(err => {
      console.log(err.message)
      })
  }, [])*/}

  let {slug} = useParams();

  const categoryfilterproducts = products.filter(product => product.category === slug)
  console.log(categoryfilterproducts)

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout categories={categories} setProduct={setProduct} setProducts={setProducts} />}>
      <Route index element = {<Homepage categories={categories} Products={Products} />} /> 
      <Route path="/category/:slug" element = {<CategoryProducts categories={categories} products={products} />}/>
      <Route path="/product/:slug" element = {<ProductPage />} />
      <Route path="/producttest/:slug" element = {<ProductCardTest />} />
      <Route path="/cart" element = {<CartPage/>}/>
      <Route path="/confirmedorder" element = {<ConfirmOrder />} />
      <Route path="/query/:val" element = {<SearchedProducts  searchprods={searchprods}/>} />
    </Route>
  ))

  return <RouterProvider router={router}/>
}

export default Start