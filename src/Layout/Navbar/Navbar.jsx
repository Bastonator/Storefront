import Wriber from '/src/assets/Wriber.png'
//import styles from '/src/Navbar/Navbar.module.css'
import '/src/index.css'
import Search from './Search'
import Cart from './Cart'
import { Link } from 'react-router-dom'

//fixed top-0 left-0 py-2 border-b bg-white z-10'

function Navbar({setProduct, setProducts, setResults}) {
    return(
        <nav className='w-full fixed top-0 left-0 bg-white max-sm:-mb-20'>
            <div className='mx-auto px-6 max-sm:-mb-20'>
                <div className='flex justify-between items-center'>
                    <Link to='/'>
                        <img
                        src={Wriber}                     
                        alt='Wriber Fiteness'
                        width={135}
                        height={90}
                        />
                    </Link>
                    <div className='flex w-4/6'>
                        <Search setProduct={setProduct} setProducts={setProducts} setResults={setResults}/>
                    </div>

                    <div className='flex w-1/6'>
                        <Cart/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar