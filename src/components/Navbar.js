import React, { useState } from "react";
import Navbar from "reactjs-navbar";
import {
    faUsers,
    faBookOpen,
    faGlobe,
    faCameraRetro,
    faDoorOpen /*...*/ ,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./MeetPlaceLogo.png"
import "reactjs-navbar/dist/index.css";

//declaram componenta <Navbar in container-ul ei AppNavbar si ii adaugam proprietati. De exemplu am pus logo-ul meu

function AppNavbar() {
    return ( <
        Navbar logo = { logo }
        menuItems = {
            [{
                    title: "Instagram",
                    icon: faCameraRetro,
                    isAuth: true,
                    onClick: () => {
                        window.location.href = 'https://www.instagram.com/?hl=en'
                    },
                },
                {
                    title: "Facebook",
                    icon: faBookOpen,
                    isAuth: true,
                    onClick: () => {
                        window.location.href = 'https://www.facebook.com/'
                    },
                },
                {
                    title: "Email Us",
                    icon: faGlobe,
                    isAuth: true,
                    onClick: () => {
                        window.location.href = 'mailto:contact@meetplace.com'
                    },
                },
                {
                    title: "Log out",
                    icon: faDoorOpen,
                    isAuth: true,
                    onClick: () => {
                        window.location.href = '/login'
                    },
                },
            ]
        }
        />

    )



}

export default AppNavbar;