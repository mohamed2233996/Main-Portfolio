import React from 'react';
import "./control-box.css"
import Settings from './dark-mod/dark-mod';

const ControlBox = () => {
    //local storage color
    let mainColors = localStorage.getItem("color_option")

    if (mainColors !== null) {

        document.documentElement.style.setProperty('--main-color', mainColors);

        //check active
        //remove active
        document.querySelectorAll(".color-op li").forEach(element => {
            element.classList.remove("active");


            //add active with Data-colors list item
            if (element.dataset.color === mainColors) {
                element.classList.add("active");
            }
        });

    };

    //switch color
    const colorsli = document.querySelectorAll(".color-op li");

    colorsli.forEach(li => {


        li.addEventListener("click", (e) => {


            //set on root
            document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
            //set on locl
            localStorage.setItem("color_option", e.target.dataset.color);
            //handel active


        });

    });

    return (
        <div className="settings-box open">
            <div className="settings-container">
                <Settings />
                <h2>Color option :</h2>
                <ul className="color-op">
                    <li className="active" data-color="#FF9800" />
                    <li data-color="#e9420fcb" />
                    <li data-color="#4c00ff" />
                    <li data-color="#09ff00" />
                    <li data-color="#0aefff" />
                </ul>
            </div>
        </div>
    );
}

export default ControlBox;
