//header.js
const styles = `

    /*=============== GOOGLE FONTS ===============*/
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");

    /*=============== VARIABLES CSS ===============*/
    :root {
        --header-height: 3.5rem;

        /*========== Colors ==========*/
        /*Color mode HSL(hue, saturation, lightness)*/
        --black-color: hsl(220, 24%, 12%);
        --black-color-light: hsl(220, 24%, 15%);
        --black-color-lighten: hsl(220, 20%, 18%);
        --white-color: #fff;
        --body-color: hsl(220, 100%, 97%);

        /*========== Font and typography ==========*/
        /*.5rem = 8px | 1rem = 16px ...*/
        --body-font: "Montserrat", sans-serif;
        --normal-font-size: .938rem;

        /*========== Font weight ==========*/
        --font-regular: 400;
        --font-semi-bold: 600;

        /*========== z index ==========*/
        --z-tooltip: 10;
        --z-fixed: 100;
    }

    /*=============== BASE ===============*/
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: var(--body-font);
        font-size: var(--normal-font-size);
        background-color: #black;
    }

    /*========== Responsive Typography ==========*/
    @media screen and (min-width: 1024px) {
        :root {
        --normal-font-size: 1rem;
        }
    }

    ul {
        list-style: none;
        -webkit-tap-highlight-color: transparent;
    }

    a {
        text-decoration: none;
    }

    /*=============== REUSABLE CSS CLASSES ===============*/
    .container {
        max-width: 1120px;
        margin-inline: 1.5rem;
    }

    /*=============== HEADER ===============*/
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: var(--black-color);
        box-shadow: 0 2px 16px hsla(220, 32%, 8%, .3);
        z-index: var(--z-fixed);
    }

    /*=============== NAV ===============*/
    .nav {
        background-color: var(--black-color);
        height: var(--header-height);
    }

    .nav__logo {
        color: var(--white-color);
        display: inline-flex;
        align-items: center;
        column-gap: .25rem;
        font-weight: var(--font-semi-bold);
        -webkit-tap-highlight-color: transparent;
    }

    .nav__data {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav__link {
        color: var(--white-color);
        background-color: var(--black-color);
        font-weight: var(--font-semi-bold);
        padding: 1.25rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: background-color .3s;
    }

    .nav__link:hover {
        background-color: var(--black-color-light);
    }

    .dropdown__item {
        cursor: pointer;
    }

    .dropdown__arrow {
        font-size: 1.5rem;
        font-weight: initial;
        transition: transform .4s;
    }

    .dropdown__link {
        font-size: small;
        padding: 1.25rem 1.25rem 1.25rem 1.25rem;
        color: var(--white-color);
        background-color: var(--black-color-light);
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: .5rem;
        font-weight: var(--font-semi-bold);
        transition: background-color .3s;
    }

    .dropdown__link i {
        font-size: 1.25rem;
        font-weight: initial;
    }

    .dropdown__link:hover {
        background-color: var(--black-color);
    }

    .dropdown__menu {
        max-height: 0;
        overflow: hidden;
        transition: max-height .4s ease-out;
    }

    .dropdown__item:hover .dropdown__menu {
        max-height: 1000px;
        transition: max-height .4s ease-in;
    }

    .dropdown__item:hover .dropdown__arrow {
        transform: rotate(180deg);
    }

    /* FOR LARGE DEVICES */
    @media screen and (min-width: 1200px) {
        .container {
            margin-left: 50px;
            margin-right: 50px;
        }

        .nav {
            height: calc(var(--header-height) + 2rem);
            display: flex;
            justify-content: space-between;
        }

        .nav a {    
            text-transform: uppercase;
            text-decoration: none;
            position: relative;
        }

        .nav__list {
            height: 100%;
            display: flex;
            column-gap: 2.5rem;
            margin-right: -125px;
        }

        .nav__list a:hover {
            color: #44D62C;
        }

        .nav-quiz:hover {
            color: #44D62C;
        }


        .nav-quiz:after {
            background: none repeat scroll 0 0 transparent;
            bottom: 30px;
            content: "";
            display: block;
            height: 3px;
            left: 50%;
            position: absolute;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
        }
        .nav-quiz:hover:after{
            width: 100%;
            left: 0;
            background-color: #44D62C;
        }

        .nav__list a:after {
            background: none repeat scroll 0 0 transparent;
            bottom: 30px;
            content: "";
            display: block;
            height: 3px;
            left: 50%;
            position: absolute;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
        }

        .nav__list a:hover:after {
            width: 100%;
            left: 0;
            background-color: #44D62C;
        }

        .nav__link {
            height: 100%;
            padding: 0;
            justify-content: initial;
            column-gap: .25rem;
        }

        .nav__link:hover {
            background-color: transparent;
        }

        .dropdown__item {
            position: relative;
        }

        .nav-quiz {
            height: 100%;
            padding: 0;
            justify-content: initial;
            column-gap: .25rem;
            color: var(--white-color);
            background-color: var(--black-color);
            font-weight: var(--font-semi-bold);
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background-color .3s;
        }


        // .nav-quiz:hover {
        //     color: #44D62C;
        //     text-decoration: underline;
        // }

        .nav-quiz a:after {
            background: none repeat scroll 0 0 transparent;
            bottom: 30px;
            content: "";
            display: block;
            height: 3px;
            left: 50%;
            position: absolute;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
        }

        .nav-quiz a:hover:after {
            width: 100%;
            left: 0;
            background-color: #44D62C;
        }

        .nav-quiz .ri-arrow-down-s-line dropdown__arrow {
            transform: none;  
        }

        .dropdown__menu {
            width: 90px;
            max-height: initial;
            overflow: initial;
            position: absolute;
            left: -13px;
            top: 6rem;
            opacity: 0;
            pointer-events: none;
            transition: opacity .3s, top .3s;
        }

        .dropdown__menu a:hover {
            background: var(--black-color);
            color: #44D62C;
        }

        .dropdown__menu a:after {
            background: transparent;
        }

        .dropdown__menu a:hover:after {
            background: transparent;
        }

        .dropdown__link 
            padding-inline: 1rem 3.5rem;
        }

        .dropdown__item:hover .dropdown__menu {
            opacity: 1;
            top: 5.5rem;
            pointer-events: initial;
            transition: top .3s;
        }

        .username {
            width: 170px; 
            height: 50px; 
            display: flex; 
            justify-content: end; 
            align-items: center; 
            font-weight: lighter; 
            color: white
        }

        .logo_login {
            margin-left: 0;
        }

        .logout {
            background-color: transparent; 
            margin-right: -130px;
        }

        #logoutButton {
            background-color: transparent; 
            border: none;
        }

        #logoutButton:focus {
            outline: none;
        }

        #logoutButton:hover {
            cursor: pointer;
        }
    }

    .flexbox {
        padding: 10px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;   
        margin-bottom: 27px;
    }

    .search {
        margin-left: 10px;
        margin-bottom: 27px;
    }

    .search>h1 {
        color: red;
        margin-bottom: 5px;
    }

    .search>div {
        display: inline-block;
        position: fixed;
    }

    .search>div:after {
        content: "";
        background: white;
        width: 4px;
        height: 20px;
        position: absolute;
        top: 20px;
        right: -3px;
        transform: rotate(135deg);
    }

    .search>div>input {
        color: white;
        font-size: 16px;
        background: transparent;
        width: 25px;
        height: 25px;
        padding: 10px;
        border: solid 3px white;
        outline: none;
        border-radius: 30px;
        transition: width 0.5s;
    }

    .search>div>input::placeholder {
        color: white;
        opacity: 10;
        transition: opacity 150ms ease-out;
    }

    .search>div>input:focus::placeholder {
        opacity: 1;
    }

    .search>div>input:focus,
    .search>div>input:not(:placeholder-shown) {
        width: 120px;
    }   
`;

const htmlContent = `
    <!--=============== REMIXICONS ===============-->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet">

    <!--=============== HEADER ===============-->
    <header class="header">
        <nav class="nav container">

            <!-- LOGO, NAME, SEARCHING -->
            <div class="nav__data">
                <a title="Astroverse Logo" class="nav__logo" href="https://instagram.com/astroverse.site?igshid=MTk0NTkyODZkYg==" target="_blank">
                     <img style="width: 40px; margin-right: 10px;" src="assets/element/logo_website.png"></img> ASTROVERSE
                </a>

                <div class="flexbox">
                    <div class="search">
                        <div>
                            <input type="text" placeholder="Search..." required>
                        </div>
                    </div>
                </div>
            </div>

            <!--=============== NAV MENU ===============-->
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list" >
                    <li><a href="index.html" class="nav__link">HOME</a></li>

                    <li><a href="gallery.html" class="nav__link">GALLERY</a></li>

                    <li><a href="potd.html" class="nav__link">POTD</a></li>

                    <!--=============== DROPDOWN MENU QUIZ ===============-->
                    <li class="dropdown__item">
                        <div class="nav-quiz">
                            QUIZ
                            <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                        </div>

                        <ul class="dropdown__menu">
                            <li>
                                <a href="landing_easy.html" class="dropdown__link">
                                    EASY
                                </a>
                            </li>

                            <li>
                                <a href="landing_medium.html" class="dropdown__link">
                                    MEDIUM
                                </a>
                            </li>

                            <li>
                                <a href="landing_hard.html" class="dropdown__link">
                                    HARD
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li><a href="videos.html" class="nav__link">VIDEOS</a></li>

                    <li><a href="forum.html" class="nav__link">FORUM</a></li>
                </ul>
            </div>

            <div style="display: flex; align-items: center;  gap: 10px; margin-right: 75px">
                <div class="username">
                    ERROR
                </div>
                <div class="logo_login">
                    <a title="Login Account" href="login.html">
                        <img style="width: 50px; " src="assets/element/login.png">
                    </a>
                </div>
                <div class="logout">
                    <button title="Logout Account" style="" id="logoutButton"><img style="width: 50px; " src="assets/element/logout.png"></button>
                </div>
    
            </div>

        </nav>
    </header>
`;

// Function to apply styles and content
function applyStylesAndContent() {
    const styleTag = document.createElement('style');
    styleTag.textContent = styles;

    const body = document.querySelector('body');
    body.appendChild(styleTag);

    body.innerHTML += htmlContent;
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', applyStylesAndContent);