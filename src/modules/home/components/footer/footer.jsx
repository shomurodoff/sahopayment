import React from 'react';
import {Element} from "react-scroll";
import Logo from '../../../../assets/home/icons/logo-black.svg'
import Instagram from '../../../../assets/home/icons/instagram.svg'
import Facebook from '../../../../assets/home/icons/facebook.svg'
import Twitter from '../../../../assets/home/icons/twitter.svg'
import LinkedIn from '../../../../assets/home/icons/linkedin.svg'

const Footer = () => {

    return (
        <footer className={'bg-[#F8FBFE]'}>
            <div className={'w-[1200px] grid grid-cols-12 mx-auto py-[40px]'}>
                <div className={'col-span-4 text-[#808080]'}>
                    <ul >
                        <li>
                            <img src={Logo}/>
                        </li>
                        <li>
                            <p>United Kingdom 17</p>
                        </li>
                        <li>
                            <p> Park Avenue</p>
                        </li>
                        <li>
                            <p>London </p>
                        </li>
                        <li>
                            <p>WC78 4AAR</p>
                        </li>
                    </ul>
                </div>

                <div className={'col-span-8 flex justify-around text-[#808080]'}>
                    <ul className={'flex flex-col gap-y-2'}>
                        <li>
                            <p>Buy Crypto</p>
                        </li>
                        <li>
                            <p>Features</p>
                        </li>
                        <li>
                            <p>About us</p>
                        </li>
                        <li>
                            <p>Testimonials </p>
                        </li>

                    </ul>


                    <ul className={'flex flex-col gap-y-2'}>

                        <li>
                            <p>Licensing</p>
                        </li>
                        <li>
                            <p>Change Log</p>
                        </li>
                        <li>
                            <p>Style Guide </p>
                        </li>

                    </ul>


                    <ul className={'flex flex-col gap-y-2'}>

                        <li>
                            <p>Privacy Policy </p>
                        </li>
                        <li>
                            <p>Instructions</p>
                        </li>
                    </ul>

                    <ul></ul>
                </div>

                <div className={'col-span-12 justify-self-end'}>
                    <div className={'flex gap-x-4 cursor-pointer hover:text-purple-700'}>
                        <img src={Twitter}/>
                        <img src={Facebook}/>
                        <img src={LinkedIn}/>
                        <img src={Instagram}/>

                    </div>
                </div>
            </div>

            <hr/>

            <div className={'w-[1200px] mx-auto  my-[20px]'}>
                <div className={'flex justify-between'}>
                    <div className={'flex text-[#808080] gap-x-4'}>
                        <p>Crafted by <span className={'text-[#000]'}>Azwedo</span> &  <span className={'text-[#000]'}>Wedoflow</span></p>
                        <p>Powered by <span className={'text-[#000]'}>Webflow</span></p>
                    </div>

                    <p>London © Copyright 2022 All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer