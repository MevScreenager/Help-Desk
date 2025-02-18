import React, { useRef } from "react";
import PersonForm from "../../PersonForm";
import { useRegistration } from "./script.registration";

const Registration = () => {

    const formRef = useRef(null)

    useRegistration(formRef)

    return (
        <div>
            <PersonForm ref={formRef}/>
        </div>
    )
}

export default Registration