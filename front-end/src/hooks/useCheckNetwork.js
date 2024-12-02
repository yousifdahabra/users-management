import { useState,useEffect } from "react";


export const useCheckNetwork = ()=>{
    const [isOnline,setIsOnline] = useState(true);

    useEffect(()=>{
        function checkOnline(){
            setIsOnline(true)
        }
        function checkOffline(){
            setIsOnline(false)
        }
        window.addEventListener('online',checkOnline)
        window.addEventListener('offline',checkOffline)
        return () => {
            window.removeEventListener('online',checkOnline)
            window.removeEventListener('offline',checkOffline)
        }
    },[])
    return isOnline;
}

    