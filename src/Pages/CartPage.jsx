import { Link } from "react-router-dom"
import Pic from '/src/PHOTO-2024-04-09-09-43-08.jpg'
import useLocalStorageForNumber from "../Components/useLocalStorageNumber";
import useLocalStorageForAddress from "../Components/useLocalStorageAddress";
import axios from "axios";

function CartPage() {

    const [value, setPhoneNumber] = useLocalStorageForNumber('Phone Number', '');

    const [addressvalue, setAddress] = useLocalStorageForAddress('Address', '');

    const [namevalue, setName] = useLocalStorageForAddress('Name', '');


    const getCartData = () => {
        let cartContent = []
        if (localStorage.getItem('CartData')) {
            cartContent = JSON.parse(localStorage.getItem('CartData'))
        }
        return cartContent;
    }
    console.log(getCartData())

    let cartContent =  getCartData()

    ///for auto clear of cart when make order is clicked
    const cartRemoveButtonHandler = () => {
        const cartContent = getCartData()
        localStorage.removeItem('CartData', JSON.stringify(cartContent))
        window.location.reload
    }

    //let uniqueitems = cartContent.map(item => item.product.slug).filter((value, index, self) =>
      //  self.indexOf(value) === index);
    
    //console.log(uniqueitems);

    
    const uniqueItems = cartContent.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.product.slug === value.product.slug
        ))
    )
    
    console.log(uniqueItems)

    {/*const ItemsArray = cartContent.map(content => content.product.slug)
        console.log(ItemsArray)

    const uniqueItemsArray =  ItemsArray.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.product.slug === value.product.slug
        ))
    )  

    console.log(uniqueItemsArray) */}

    const TotalCartWorthString = cartContent.map(content => content.product.regular_price)
    console.log(TotalCartWorthString)

    let TotalCartWorthInt = TotalCartWorthString.map(Number);
    console.log(TotalCartWorthInt)

    let Total = 0;

    for (let s = 0; s < 
        TotalCartWorthInt.length; s++){
            Total += TotalCartWorthInt[s];
        }
    

    console.log(Total)

    const cartproducts = uniqueItems.map(item => {

        {/*function getOccurrence(array, value) {
            return array.filter((v) => (v === value)).length;
        }
        console.log(getOccurrence(getCartData(), item.product.slug))*/}

        const cartAddButtonHandler = () => {
            let previousCart = localStorage.getItem('CartData')
            let cartJson = JSON.parse(previousCart)
            let CartData = {
                'product': {
                    'slug': item.product.slug,
                    'name': item.product.name,
                    'regular_price': item.product.regular_price
                }
            }
            if(cartJson!=null) {
                cartJson.push(CartData)
                let cartString = JSON.stringify(cartJson)
                localStorage.setItem('CartData', cartString)
                window.location.reload
            }
            else {
                let newCartList = []
                newCartList.push(CartData)
                let cartString = JSON.stringify(newCartList)
                localStorage.setItem('CartData', cartString)
            }
        }

        const cartRemoveButtonHandler = () => {
            const cartContent = getCartData()
            const notcartContent = cartContent.filter(content => content.product.slug !== item.product.slug)
            console.log(notcartContent)
            localStorage.setItem('CartData', JSON.stringify(notcartContent))
            window.location.reload
        }

        const cartDeductHandler = () => {
            let previousCart = localStorage.getItem('CartData')
            let cartJson = JSON.parse(previousCart)
            let CartData = {
                'product': {
                    'slug': item.product.slug,
                    'name': item.product.name,
                    'regular_price': item.product.regular_price
                }
            }
            
            const cartArrayToDelete = cartJson.filter(content => content.product.slug == item.product.slug)
            console.log(cartArrayToDelete)
            cartArrayToDelete.pop(CartData)
            const cartArrayLeftAlone = cartJson.filter(content => content.product.slug !== item.product.slug)
            const mergedCartArr = cartArrayLeftAlone.concat(cartArrayToDelete);
            let cartString = JSON.stringify(mergedCartArr)
            localStorage.setItem('CartData', cartString)
            window.location.reload
        }

        console.log(item.product.slug)

        const getallproductincart = cartContent.map(content => content.product.slug)
        console.log(getallproductincart)

        console.log(getallproductincart.filter(content => content === item.product.slug))
        let quantity = getallproductincart.filter(content => content === item.product.slug).length
        console.log(quantity)
        return <div className="w-full flex justify-between items-center border border-solid border-glass p-4 mb-6"  key={item.product.slug}>
                        <div className="flex items-center gap-4 w-1/6 h-1/6">
                            <img src={Pic} alt="" className="object-cover"></img>
                        </div>
                        <div className="flex flex-col items-start 2xl:-ml-24 max-w-[5.8rem]" key={item.product.slug}>
                            <div>
                                {item.product.name}
                            </div>
                            <div className="flex items-center gap-4 mt-2" key={item.product.slug}>
                                <button key={item.product.slug} onClick={cartDeductHandler} className="w-8 h-8 text-white bg-black rounded-full hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all">
                                    -
                                </button>
                                    {quantity}
                                <button key={item.product.slug} onClick={cartAddButtonHandler} className="w-8 h-8 border border-black text-black bg-white rounded-full hover:text-white hover:bg-black  transition-all">
                                    + 
                                </button>
                            </div>
                        </div>
                        <div key={item.product.slug} className="flex flex-col items-center gap-3">
                            <p key={item.product.slug} onClick={cartRemoveButtonHandler} className="cursor-pointer text-xl  hover:text-orange-500 transition-all"> Remove </p>
                            <div key={item.product.slug} className="text-xl">
                                D{item.product.regular_price}
                            </div>
                        </div>
        </div>}
                    )

    const createOrder = async() => {
        const order_email = namevalue
        const phone = value
        const address = addressvalue
    
        const body = {order_email, phone, address}

        const response = await axios.post("http://127.0.0.1:8000/search/order", body)
        console.log(response)
        console.log(response.data.id)
        const OrderID = (response.data.id)
        createOrderItems(uniqueItems, OrderID)
        return response.data
    }


    if (Array.isArray(uniqueItems)) {
        console.log('TThs is an array')
    }
    else {
        console.error('Its not an array', uniqueItems)
    }

    Object.keys(uniqueItems).forEach(key => {
        console.log(uniqueItems[key]);
    });



    async function createOrderItems(uniqueItems, OrderID) {
        console.log(uniqueItems)
        for (const item of uniqueItems) {
            console.log(item.product.name)
            const getallproductincart = cartContent.map(content => content.product.slug)
            console.log(getallproductincart)

            let amount_ordered = getallproductincart.filter(content => content === item.product.slug).length
            console.log(amount_ordered)

            const order = OrderID
            const product = item.product.slug
            const quantity = amount_ordered
            const total_price = item.product.regular_price * amount_ordered

            const body = {order, product, quantity, total_price}

            const response = await axios.post("http://127.0.0.1:8000/search/order_items", body)
            console.log(response)
        }
    }    
 
    {/*const allItems = uniqueItems.map(item => {

        const getallproductincart = cartContent.map(content => content.product.slug)
        console.log(getallproductincart)

        console.log(getallproductincart.filter(content => content === item.product.slug))
        let amount_ordered = getallproductincart.filter(content => content === item.product.slug).length
        console.log(amount_ordered)

        const createOrderItems = async() => {

        const product = item.product.slug
        const quantity = amount_ordered
        const total_price = item.product.regular_price * amount_ordered

        const body = {product, quantity, total_price}

        const response = await axios.post("http://127.0.0.1:8000/search/order_items", body)
        console.log(response)
        return response.data
        }
        createOrderItems();
    })*/}
    

    return (
        <>
    <div className='py-60 px-3 -mt-2 border-b-slate-700 max-sm:-mt-32'>
            {cartproducts}

            <div>
            <h4>
                Provide your order details
            </h4>
            <div className="mt-20 transition-all h-[64px] w-full right-5 mx-auto flex flex-row items-center justify-center">
                <form className="w-full">
                    <input type="text" onChange={(event) => setName(event.target.value)} value={namevalue}
                    className="mb-2 w-full transition-all h-[64px] px-8 items-center justify-center border rounded-full  hover:bg-slate-300" placeholder="Your Name or Email Address">
                    </input>
                    <input type="text" onChange={(event) => setPhoneNumber(event.target.value)} value={value}
                    className="mb-2 w-full transition-all h-[64px] px-8 items-center justify-center border rounded-full  hover:bg-slate-300" placeholder="Your Phone number"></input>
                    <input type="text" onChange={(event) => setAddress(event.target.value)} value={addressvalue}
                    className="w-full transition-all h-[64px] px-8 items-center justify-center border rounded-full  hover:bg-slate-300" placeholder="Your Address"></input>
                </form>            
            </div>

                <table className="mt-28">
                    <tr>
                        <td>
                        <h4>
                            Amount To Pay: 
                        </h4>
                        </td>
                        <td>
                            <strong>
                                <h4>
                                    D {Total}
                                </h4>
                            </strong>
                        </td>
                    </tr>
                </table>
            </div>
            <div >
                <div className="justify-between items-center" >
                    <Link to="/confirmedorder" onClick={createOrder}>
                        <button onClick={cartRemoveButtonHandler} className="transition-all w-1/6 px-11 h-10 ml-2 mt-4 mb-1 border-1 mr-3 border-slate-400 hover:border-black rounded-3xl bg-white hover:bg-black hover:text-white">
                        <h5>
                        Make Order
                        </h5>
                        </button>
                        
                    </Link>
                </div>
            </div>
        </div>
    </>
    )
}

export default CartPage