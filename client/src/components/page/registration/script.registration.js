import { useEffect } from "react";
import { registration } from "./action.registration";


export const useRegistration = (formRef) => {
    useEffect(() => {
        const form = formRef.current

        const pushData = (event) => {
            event.preventDefault()
            
            const {elements} = form 
            const data = {}
            Array.from(elements)
                .forEach((element) => {
                    const { name, value } = element
                    if (name)
                        data[name] = value
                })
            registration(data)
        }

        if (form)
            form.addEventListener('submit', pushData);
        
        return () => {
            if (form) 
                form.removeEventListener('submit', pushData);
        }
    }, [])
    
}

