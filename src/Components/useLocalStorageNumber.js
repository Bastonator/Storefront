import { useState, useEffect} from "react";
import React from "react";


function getSavedValue(key, number) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue) {
        return savedValue
    } else {
        return number;
    }
}

export default function useLocalStorageForNumber(key, number) {
    let [value, setPhoneNumber] = useState(() => {
        return getSavedValue(key, number);
    });


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key]);

    return [value, setPhoneNumber]
}
