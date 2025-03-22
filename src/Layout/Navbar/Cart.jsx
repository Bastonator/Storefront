import { Link } from "react-router-dom";


function Cart() {

    const getCartData = () => {
        let cartContent = []
        if (localStorage.getItem('CartData')) {
            cartContent = JSON.parse(localStorage.getItem('CartData'))
        }
        return cartContent;
    }
    console.log(getCartData())

    return(
        <Link to="/cart">
            <div className="border-none transition-all p-2 relative flex border rounded-3xl h-11 w-6/6">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                
            </div>
        </Link>
    )
}
export default Cart