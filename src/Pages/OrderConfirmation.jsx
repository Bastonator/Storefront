import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function ConfirmOrder () {


    function SendToDatabase (){

    }

    return(
        <>
        <div className='py-60 px-3 -mt-2 border-b-slate-700 max-sm:-mt-32'>
            <div className="justify-between items-center">
                <h4>
                    Order has been submiited to us, <strong>wait for our call.</strong>
                </h4>

                <Link to="/">
                    <button className="transition-all w-auto px-11 h-10 ml-2 mt-4 mb-1 border-1 mr-3 border-slate-400 hover:border-black rounded-3xl bg-white hover:bg-black hover:text-white">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default ConfirmOrder