import React from 'react';
import {Element} from "react-scroll";
import {Row, Col, Button, Collapse} from "antd";

import Avatar1 from '../../../../../assets/testimonials/images/avatar1.jpg'
import Avatar2 from '../../../../../assets/testimonials/images/avatart2.jpg'
import ArrowRight from '../../../../../assets/testimonials/icons/arrow-right.svg'
import ArrowLeft from '../../../../../assets/testimonials/icons/arrow-left.svg'
import Wave from '../../../../../assets/testimonials/icons/wave.svg'
import GooglePlay from '../../../../../assets/testimonials/icons/google-play.svg'
import AppStore from '../../../../../assets/testimonials/icons/app-store.svg'

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.min.css'
import Card from "../../../components/card";
import DownloadButton from "../../../components/button/button";
import Footer from "../../../components/footer/footer";


const TestimonialsSection = () => {
    const {Panel} = Collapse;

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    return (
        <Element
            name="testimonials"
            className=" h-[calc(250vh-64px)] relative flex flex-col   bg-[#fff] "
        >
            <div className={'grid grid-cols-12 '}>
                <div className={'col-span-8 text-center mb-[50px]'}><h1 className={'text-5xl'}>What others say about us</h1></div>

            </div>
            {/*Swiping Images*/}
            <div className={'mb-[100px]'}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={{
                        nextEl: ArrowRight,
                        prevEl: ArrowLeft,
                        clickable: true
                    }}

                >
                    <SwiperSlide>
                        <Card
                            children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis id egestas eu risus dignissim. Nunc, viverra volutpat nam sollicitudin.'}
                            avatar={Avatar2}
                            name={'Henery Dawson'}
                            job={'Brand Ambassador'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis id egestas eu risus dignissim. Nunc, viverra volutpat nam sollicitudin.'}
                            avatar={Avatar1}
                            name={'Henery Dawson'}
                            job={'Brand Ambassador'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis id egestas eu risus dignissim. Nunc, viverra volutpat nam sollicitudin.'}
                            avatar={Avatar2}
                            name={'Henery Dawson'}
                            job={'Brand Ambassador'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis id egestas eu risus dignissim. Nunc, viverra volutpat nam sollicitudin.'}
                            avatar={Avatar1}
                            name={'Henery Dawson'}
                            job={'Brand Ambassador'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card
                            children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis id egestas eu risus dignissim. Nunc, viverra volutpat nam sollicitudin.'}
                            avatar={Avatar1}
                            name={'Henery Dawson'}
                            job={'Brand Ambassador'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card
                            children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis id egestas eu risus dignissim. Nunc, viverra volutpat nam sollicitudin.'}
                            avatar={Avatar1}
                            name={'Henery Dawson'}
                            job={'Brand Ambassador'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card
                            children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis id egestas eu risus dignissim. Nunc, viverra volutpat nam sollicitudin.'}
                            avatar={Avatar1}
                            name={'Henery Dawson'}
                            job={'Brand Ambassador'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card
                            children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis id egestas eu risus dignissim. Nunc, viverra volutpat nam sollicitudin.'}
                            avatar={Avatar1}
                            name={'Henery Dawson'}
                            job={'Brand Ambassador'}
                        />
                    </SwiperSlide>

                </Swiper>
                {/*swiper buttons temporary don't exist */}


                {/*<div className={'flex gap-x-10'}>*/}
                {/*    <div>*/}
                {/*        <img src={ArrowLeft} className={'border w-[30px] h-[30px] cursor-pointer'}/>*/}
                {/*    </div>*/}
                {/*    <img src={ArrowRight} className={'border w-[30px] h-[30px]'}/>*/}
                {/*</div>*/}
            </div>

            {/*Accordion... most asked question*/}
            <div className={'flex justify-center items-start gap-x-[300px] mb-[100px]'}>
                <div>
                    <h1 className={'text-5xl font-bold mb-[15px]'}>Frequently Asked <br/> Questions</h1>
                    <p className={'text-base font-light text-[#808080]'}>Haven’t found what you’re looking for? <br/> Try the platform or Contact Us</p>
                </div>

                <div className={'w-[500px] flex flex-col gap-y-5'}>
                    <Collapse size={"large"}>
                        <Panel key={1} header={'What is London wallet app ?'} className={'hover:bg-[#EFECF3] transition-colors'}>
                            <p>{text}</p>
                        </Panel>
                    </Collapse>

                    <Collapse size={"large"}>
                        <Panel key={1} header={'What are advantages of Lodon app ?'} className={'hover:bg-[#EFECF3] transition-colors'}>
                            <p>{text}</p>
                        </Panel>
                    </Collapse>

                    <Collapse size={"large"}>
                        <Panel key={1} header={'How is my profile secured ?'} className={'hover:bg-[#EFECF3] transition-colors'}>
                            <p>{text}</p>
                        </Panel>
                    </Collapse>

                    <Collapse size={"large"}>
                        <Panel key={1} header={'How to recover my password ?'} className={'hover:bg-[#EFECF3] transition-colors'}>
                            <p>{text}</p>
                        </Panel>
                    </Collapse>

                    <Collapse size={"large"}>
                        <Panel key={1} header={'What are the London app fees ? '} className={'hover:bg-[#EFECF3] transition-colors'}>
                            <p className={'text-base text-[#808080]'}>{text}</p>
                        </Panel>
                    </Collapse>
                </div>
            </div>

            <div className={'relative z-20 mb-[50px]'}>
                <div className={'relative w-[1200px] h-[250px] justify-around items-center bg-purple-600 mx-auto flex rounded-[20px] mb-[100px] z-10'}>
                    <h1 className={'text-5xl font-bold text-[#fff]'}>Get started now!</h1>
                    <DownloadButton>Download</DownloadButton>
                </div>

                <div className={'relative w-[800px] mx-auto p-[50px]  rounded-[10px] shadow-xl z-50 mb-[50px]'}>
                    <div className={'mb-[60px]'}>
                        <h1 className={'text-5xl font-bold'}>Reach us out</h1>
                        <p className={'text-base font-light'}>Contact us in case you have any inquiry, or, just wanting to say hi!</p>
                    </div>

                    <form className={'grid grid-cols-12'}>
                        <div className={'col-span-6'}>
                            <label className={'text-[#808080]'}>First Name *</label> <br/>
                            <input type={'text'} required className={'border focus:outline-purple-600 py-[10px] w-full rounded-[10px] px-[10px]'} />
                        </div>

                        <div className={'col-span-6 ml-[10px]'}>
                            <label className={'text-[#808080]'}>Last Name *</label> <br/>
                            <input type={'text'} required className={'border focus:outline-purple-600 py-[10px] w-full rounded-[10px] px-[10px]'}/>
                        </div>

                        <div className={'col-span-12 mt-[50px]'}>
                            <label className={'text-[#808080]'}>Email *</label> <br/>
                            <input type={'email'} required className={'border focus:outline-purple-600 py-[10px] w-full rounded-[10px] px-[10px]'}/>
                        </div>

                        <div className={'col-span-12 mt-[50px]'}>
                            <label className={'text-[#808080]'}>Message *</label> <br/>
                            <textarea className={'border focus:outline-purple-600 py-[10px] w-full rounded-[10px] px-[10px]'} rows={8}></textarea>
                        </div>


                        <div className={'col-span-12 mt-[50px]'}>
                            <input type={'submit'} className={'border cursor-pointer bg-purple-600 hover:bg-purple-500 transition-colors text-[#fff] py-[20px] w-full rounded-[30px] text-xl px-[10px]'} value={'Send Message'}/>
                        </div>
                    </form>
                </div>

                <img src={Wave} className={'absolute top-[50px] left-[50px] -z-10'}/>
            </div>

            <div className={'w-[1200px] flex justify-between items-center mx-auto wrap mb-[50px]'}>
                <div>
                    <h1 className={'text-5xl font-bold mb-[30px]'}>Stay up to date <br/> with London</h1>

                    <div className={'flex gap-x-[30px]'}>
                        <img src={AppStore} className={'w-[150px]'}/>
                        <img src={GooglePlay} className={'w-[150px]'}/>

                    </div>
                </div>

                <div className={'flex flex-col'}>
                    <p className={'text-xl mb-[15px]'}>Subscribe to our newsletter</p>

                    <form className={'border rounded-[50px] py-[15px] px-[20px] w-[500px]'}>
                        <input type={'email'} placeholder={'Your Email'} className={'w-[320px]  focus:outline-transparent px-[10px] '}/>
                        <button className={'py-[10px] px-[30px] bg-purple-600 rounded-[20px] text-[#fff] hover:bg-purple-500'}>Subscribe</button>
                    </form>

                </div>
            </div>

            <Footer/>
        </Element>
    )
}

export default TestimonialsSection