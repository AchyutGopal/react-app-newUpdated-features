import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <footer class="">
                <nav class="navbar navbar-expand-lg navbar-light bg-light py-2 nav-styles1 ">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="ml-auto" href="/">
                                <img alt="Udemy for Business" src="https://www.udemy.com/staticx/udemy/images/v6/ufb-logo-coral.svg" width="110" height="32" />
                            </Link>
                        </li>
                        <li>
                            <Link class="mx-2 " href="#">Copyright © 2020 Udemy, Inc.</Link>

                        </li>
                        <li class="nav-item">
                            <Link class="mx-2 " href="#">Udemy app</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="mx-2 " href="#">About us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="mx-2 " href="#">Privacy Policy</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="mx-2 " href="#">Terms</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="mx-2  mr-5" href="#">Help and Support</Link>
                        </li>
                    </ul>
                    <div class=" ml-auto ">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                
                            </li>
                            <li class="nav-item ">
                                <Link class="ml-1" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/facebook.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="ml-1" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/linkedin.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="ml-1" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/twitter.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="ml-1" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/youtube.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer