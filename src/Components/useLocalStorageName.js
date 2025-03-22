import { useState, useEffect} from "react";
import React from "react";


function getSavedValue(key, name) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue) {
        return savedValue
    } else {
        return name;
    }
}

export default function useLocalStorageForNumber(key, name) {
    let [namevalue, setName] = useState(() => {
        return getSavedValue(key, name);
    });


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(namevalue))
    }, [namevalue, key]);

    return [namevalue, setName]
}
