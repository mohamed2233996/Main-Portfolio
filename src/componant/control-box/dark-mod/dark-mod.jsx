import React, { useState, useEffect } from 'react';
import "./dark-mod.css"
import Switch from "react-switch";
import { useDarkMode } from "@rbnd/react-dark-mode"

const Settings = () => {
    const { mode, setMode } = useDarkMode()

    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
        if (nextChecked) {
            setMode('dark')
        } else {
            setMode('light')
        }
    };

    useEffect(() => {
        window.localStorage.setItem('switchmod', JSON.stringify(checked));
    }, [checked]);

    useState(() => {
        const data = window.localStorage.getItem('scheme-mode');
        console.log(data)
        if (data === "dark") {
            console.log("gyetgjgify")
            setChecked(true)
            } else {
            setChecked(false)
        }
    }, [checked]);

    return (
        <>
            <h2>light option:</h2>
                <Switch
                    onChange={handleChange}
                    checked={checked}
                    className="react-switch"
                />
        </>
    )
}


export default Settings;
