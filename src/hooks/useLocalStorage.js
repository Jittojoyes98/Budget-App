import  { useEffect, useState } from 'react';

export default function useLocalStorage(key,defaultvalue) {
    const [value,setValue]=useState(()=>{
        const jsonValue=localStorage.getItem(key);
        // console.log(jsonValue)
        if(jsonValue!=null){
            return JSON.parse(jsonValue);
        }else{
            if(defaultvalue==='function'){
                return defaultvalue();
            }else{
                return defaultvalue;
            }
        }
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[value]);
    return [value,setValue];
}

