import { useState, useEffect} from "react";
import React from "react";


function getSavedValue(key, address) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue) {
        return savedValue
    } else {
        return address;
    }
}

export default function useLocalStorageForAddress(key, address) {
    let [addressvalue, setAddress] = useState(() => {
        return getSavedValue(key, address);
    });


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(addressvalue))
    }, [addressvalue, key]);

    return [addressvalue, setAddress]
}
