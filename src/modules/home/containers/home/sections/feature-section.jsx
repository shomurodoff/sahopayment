import React from 'react';
import {Element} from "react-scroll";
import {Row, Col} from "antd";



// importing img
import CardImg1 from '../../../../../assets/feature/images/card-img1.webp'
import CardImg2 from '../../../../../assets/feature/images/card-img2.webp'
import CardImg3 from '../../../../../assets/feature/images/card-img3.webp'

const featureSection = () => {
    return (
        <Element
            name="feature"
            className="bg-[#EDF7FA] h-[calc(146vh-64px)] relative flex flex-col  items-center"
        >
            <div className={'grid grid-cols-12'}>
                <div className={'col-span-12 text-center my-[80px]'}>
                    <h1 className={'text-5xl mb-[10px]'}>We provide</h1>
                    <p className={'text-[#979797] text-lg '}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua, <a className={'text-purple-700'}>Ut enim ad minim.</a></p>
                </div>


            </div>

            <div className={'grid grid-cols-12 flex-wrap mb-[80px]'}>
                <div className={'col-span-5  border w-[450px] rounded-[20px]  bg-[#fff] flex flex-col pl-[40px] pt-[40px]'}>
                    <h2 className={'text-3xl font-bold'}>Secured Profile</h2>
                    <p className={'text-base font-light mt-[15px] mb-[40px]'}>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt aliqua. Ut enim ad minim</p>
                    <img src={CardImg1} className={'w-[350px]'}/>
                </div>

                <div className={'col-span-7 flex flex-col gap-y-[60px]'}>
                        <div className={'flex items-center rounded-[20px] bg-[#fff] gap-x-[100px]  border max-w-[700px] h-[250px] px-[40px] relative overflow-hidden'}>
                            <div className={'flex flex-col pt-[10px]'}>
                                <h2 className={'text-3xl font-bold'}>Two-Factor <br/> Authentication</h2>
                                <p className={'text-base font-light mt-[15px] mb-[40px]'}>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt aliqua. Ut enim ad minim</p>
                            </div>

                            <div></div>
                            <img src={CardImg2} className={'absolute w-[350px] top-0 left-[455px]'}/>
                        </div>

                    <div className={'flex items-center gap-x-[60px]  rounded-[20px] bg-[#fff]  border max-w-[700px] max-h-[350px] px-[40px] overflow-hidden'}>
                        <img src={CardImg3} className={'h-[250px]'} />

                        <div className={'flex flex-col pt-[40px]'}>
                            <h2 className={'text-3xl font-bold'}>Easy Navigation</h2>
                            <p className={'text-base font-light mt-[15px] mb-[40px]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliqua. Ut enim ad minim</p>
                        </div>

                    </div>
                </div>
            </div>


            {/*<Row justify={"space-around"} wrap={true} className={'w-[1200px] py-[70px] rounded-[20px] bg-gradient-to-r from-purple-500 to-pink-500 text-[#fff] text-center mb-[100px]'}>*/}
            {/*    <Col className={'flex justify-center flex-col gap-y-3'}>*/}
            {/*        <h1 className={'text-5xl font-bold'}>27M+</h1>*/}
            {/*        <p className={'text-base font-normal'}>Verified users</p>*/}
            {/*    </Col>*/}
            {/*    <Col className={'flex justify-center flex-col gap-y-3'}>*/}
            {/*        <h1 className={'text-5xl font-bold'}>80+</h1>*/}
            {/*        <p className={'text-base font-normal'}>Countries supported</p>*/}
            {/*    </Col>*/}
            {/*    <Col className={'flex justify-center flex-col gap-y-3'}>*/}
            {/*        <h1 className={'text-5xl font-bold'}>$120M</h1>*/}
            {/*        <p className={'text-base font-normal'}>Yearly trading</p>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </Element>
    )
}

export default featureSection