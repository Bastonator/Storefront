import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, Navigate } from "react-router-dom"
import { document } from "postcss"
import { useNavigate } from "react-router-dom"

function Search({setProduct, setProducts}) {

    const [Search, setSearch] = useState("")
    const navigate = useNavigate();

    const handleChange = (val) => {
        setSearch(val)
        console.log('Value', val)
    }

    const handleSubmit = (val) => {
        console.log('Submitted', val);
        navigate(`/query/${val}`);
        console.log('Submitted', val);
    }

    useEffect(() => {
        axios.get(`http://16.171.17.83/search/search_results?search=${Search}`)

        .then(res => {
            console.log(res.data)
            setProduct(res.data)
            setProducts(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [Search])

    ///let style = {
       /// display: 'none',
    ///}

    {/*const form = document.getElementById('form')

    form.addEventListener('keypress', function(e){
        if (e.keyCode ===13) {
            e.preventDefault();
            handleChange();
            Navigate('/query');
        }
    });

    const handleClickedSearch = (val, e) => {
        setSearch(val)
        Navigate('/query');
        e.preventDefault();
    }*/}

    return(
        <div className="transition-all h-[64px] w-full right-5 mx-auto flex flex-row items-center justify-center border rounded-full hover:bg-slate-900">
            <form className="w-full">
                <input className="w-full transition-all h-[64px] px-8 items-center justify-center border rounded-full  hover:bg-slate-300"
                 placeholder="Search" value={Search} onChange={(e) => handleChange(e.target.value.toLowerCase())} onKeyDown={(e) => {
                    if (e.key === "Enter") handleSubmit(e.target.value.toLowerCase());
                 }}>
                 </input>
                {/*<button style={style}></button>*/}
            </form>            
        </div>
    )
}

export default Search