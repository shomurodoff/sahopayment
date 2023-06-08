import React from 'react';
import {Element} from "react-scroll";
import {Row, Col, Button} from "antd";
import Logo from '../../../../../assets/about/icons/logo.svg'
import Logo2 from '../../../../../assets/about/icons/logo2.svg'
import AboutImg1 from  '../../../../../assets/about/images/image1.jpg'
import AboutImg2 from  '../../../../../assets/about/images/image2.png'
import AboutImg3 from  '../../../../../assets/about/images/image3.png'



import Lottie from "react-lottie";

import ThickData from '../../../../../assets/about/lotties/tick.json'
import LockData from "../../../../../assets/features/lotties/lock.json";

const AboutSection = ()=> {

    const defaultOptionsThickData = {
        loop: false,
        autoplay: true,
        style: 'float-left',
        animationData: ThickData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    return(
        <Element
            name="about-us"
            classname="bg-[#fff] h-[calc(150vh-64px)] relative flex flex-col gap-y-[100px] justify-center  items-center"
        >
            <div className={'flex flex-wrap justify-center gap-x-[200px] mt-[100px]'}>
                <div>
                    <h1 className={'text-5xl font-bold'}>Who we are</h1>
                    <p className={'text-base font-light my-[30px] text-gray-400'}>The London Wallet app was designed and developed in <br/> 2020 by a team of blockchain believers and crypto <br/> enthusiasts <br/><br/>

                        Our main goal is to assist people in leveraging the power of <br/> cryptocurrency by investing in crypto assets with maximum <br/> security and simplicity. <br/><br/>

                        Our main goal is to assist people in leveraging the power of <br/> cryptocurrency by investing in crypto assets with maximum <br/> security and simplicity
                    </p>

                    <Button className={'hover:bg-purple-600 hover:text-[#fff] text-purple-600 border rounded-[40px] border-purple-600 px-[30px] h-[40px] '}>
                        Try it Now
                    </Button>

                </div>

                <div className={' relative'}>
                    <img src={AboutImg1} width={570} className={'rounded-[20px]'}/>
                    <img src={Logo} className={'absolute top-[-70px] left-[210px]'} width={150}/>
                </div>

            </div>

            <div className={'flex flex-wrap-reverse justify-center gap-x-[200px] items-center my-[100px]'}>


                <div className={' relative'}>
                    <img src={AboutImg2} width={570} className={'rounded-[20px]'}/>
                    <img src={Logo2} className={'absolute top-[-70px] left-[290px]'} width={150}/>
                </div>

                <div>
                    <h1 className={'text-5xl font-bold'}>Grow with us</h1>
                    <p className={'text-base font-light my-[30px] text-gray-400'}>
                        London is a rapidly expanding cryptocurrency target <br/> company that combines blockchain potential with the <br/> innovation of developers. <br/><br/>

                        Our goal is to help investors of all sizes thrive and achieve <br/> financial independence by providing them with an amazing <br/> cryptocurrency experience. <br/>
                    </p>

                    <Button className={'hover:bg-purple-600 hover:text-[#fff] text-purple-600 border border-purple-600 px-[30px]  h-[40px] rounded-[40px]'}>
                        Try it Now
                    </Button>

                </div>
            </div>


            <div className={'flex justify-center flex-start items-center gap-x-[200px] bg-[#EDF7FA] py-[70px] w-[1200px] mx-auto rounded-[20px] mb-[120px]'}>
                <div>
                    <h1 className={'text-5xl font-bold'}>Fast buy and sell</h1>
                    <p className={'text-base font-light my-[30px]'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore <br/> magna aliqua. Ut enim ad minim
                    </p>

                    <div className={'flex relative'}>
                        <div className={'absolute'}>
                            <Lottie
                                options={defaultOptionsThickData}
                                width={30}
                                height={30}
                            />
                        </div>

                        <p className={'ml-[50px]'}>Direct from mobile</p>
                    </div>
                    <div className={'flex my-[20px]'}>
                        <div className={'absolute'}>
                            <Lottie
                                st
                                options={defaultOptionsThickData}
                                width={30}
                                height={30}
                            />
                        </div>

                        <p className={'ml-[50px]'}>No extra fees</p>
                    </div>
                    <div className={'flex'}>
                        <div className={'absolute'}>
                            <Lottie
                                st
                                options={defaultOptionsThickData}
                                width={30}
                                height={30}
                            />
                        </div>

                        <p className={'ml-[50px]'}>Save and secure</p>
                    </div>
                </div>

                <div>
                    <img src={AboutImg3} width={500}/>
                </div>
            </div>

        </Element>
    )
}

export default AboutSection;
