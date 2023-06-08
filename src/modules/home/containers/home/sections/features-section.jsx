import React from "react";
import { Element } from "react-scroll";
import Marquee from "react-fast-marquee";
import Lottie from 'react-lottie';
import LockData from '../../../../../assets/features/lotties/lock.json'
import ThreeArrow from '../../../../../assets/features/lotties/three-arrow.json'
import CheckedData from '../../../../../assets/features/lotties/checked.json'

import BackCircle from '../../../../../assets/features/images/back-circle.svg'
import LogoCrypto from '../../../../../assets/features/images/logo-crypto.svg'




//Companies Logo
import CompanyLogo1 from '../../../../../assets/features/images/company1.svg'
import CompanyLogo2 from '../../../../../assets/features/images/company2.svg'
import CompanyLogo3 from '../../../../../assets/features/images/company3.svg'
import CompanyLogo4 from '../../../../../assets/features/images/company4.svg'
import CompanyLogo5 from '../../../../../assets/features/images/company5.svg'
import CompanyLogo6 from '../../../../../assets/features/images/company6.svg'
import CompanyLogo7 from '../../../../../assets/features/images/company7.svg'
import CompanyLogo8 from '../../../../../assets/features/images/company8.svg'
import CompanyLogo9 from '../../../../../assets/features/images/company9.svg'
import CompanyLogo10 from '../../../../../assets/features/images/company10.svg'



const Features = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    style: 'float-left',
    animationData: LockData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptionsThreeArrow = {
    loop: false,
    autoplay: true,
    animationData: ThreeArrow,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptionsCheckedData = {
    loop: false,
    autoplay: true,
    animationData: CheckedData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Element
      name="features"
      className=" bg-opacity-20 h-[calc(250vh-64px)] relative flex flex-col justify-center items-center bg-[#fff] "
    >
      <div className={' grid grid-cols-12 mb-[60px]'}>


        <div className={'col-span-12 flex gap-y-[50px] flex-col'}>
          <h2 className={'text-3xl text-center mb-[30px] font-bold'}>As featured in</h2>
          <Marquee>
            <div className={'mx-[90px]'}>
              <img src={CompanyLogo1}/>
            </div>
            <div className={'mx-[90px]'}>
              <img src={CompanyLogo2}/>
            </div>
            <div className={'mx-[90px]'}>
              <img src={CompanyLogo3}/>
            </div>
            <div className={'mx-[90px]'}>
              <img src={CompanyLogo4}/>
            </div>
            <div className={'mx-[90px]'}>
              <img src={CompanyLogo5}/>
            </div>
          </Marquee>

          <Marquee direction={'right'}>
            <div className={'mx-[90px]'}>
              <img src={CompanyLogo6}/>
            </div>
            <div className={'mx-[90px]'}>
              <img src={CompanyLogo7}/>
            </div>
            <div className={'mx-[90px]'}>
              <img src={CompanyLogo8}/>
            </div>
            <div className={'mx-[90px]'}>
              <img src={CompanyLogo9}/>
            </div>
            <div className={'mx-[90px]'}>
              <img src={CompanyLogo10}/>
            </div>
          </Marquee>
        </div>

      </div>

      <div className={'grid grid-cols-12 mb-[60px]'}>
          <div className={'col-span-12'}>
            <h2 className={'text-3xl text-center mb-[30px] font-bold'}>Live market</h2>

            <div className={'relative  overflow-y-scroll w-[700px] h-[500px] py-[30px]  rounded-[10px] shadow-xl z-20 '}>
              <table className="   m-auto py-[20px] z-30">
                <thead >
                <tr className={'border font-normal'}>
                  <th className=" py-[10px] px-[20px]">Name</th>
                  <th className=" py-[10px] px-[20px]">Price</th>
                  <th className=" py-[10px] px-[20px]">24h %</th>
                  <th className=" py-[10px] px-[20px]">7D %</th>
                  <th className=" py-[10px] px-[20px]">Marcet Cap</th>
                </tr>
                </thead>
                <tbody  className={'overflow-y-scroll h-[300px]'}>
                <tr>
                  <td className="border py-[10px] text-center flex items-center gap-x-2 px-[5px]">
                    <span>1</span>
                    <img src={LogoCrypto} className={'w-[30px] h-[30px]'}/>
                    <p className={'text-lg'}>BTC</p>
                    <p className={'text-lg text-[#808a9d]'}>Bitcoin</p>
                  </td>
                  <td className="border text-center px-[17px]">$21,934.66</td>
                  <td className="border text-center">7.20%</td>
                  <td className="border text-center">25.61%</td>
                  <td className="border text-center">$416,828,752,7</td>
                </tr>
                <tr>
                  <td className="border py-[10px] text-center flex items-center gap-x-2 px-[5px]">
                    <span>2</span>
                    <img src={LogoCrypto} className={'w-[30px] h-[30px]'}/>
                    <p className={'font-normal text-lg'}>ETH</p>
                    <p className={'text-lg text-[#808a9d] font-normal'}>Ethereum</p>
                  </td>
                  <td className="border text-center px-[17px]">$21,934.66</td>
                  <td className="border text-center text-center">7.20%</td>
                  <td className="border text-center text-center">25.61%</td>
                  <td className="border text-center">$416,828,752,7</td>
                </tr>
                <tr>
                  <td className="border py-[10px] text-center flex items-center gap-x-2 px-[5px]">
                    <span>3</span>
                    <img src={LogoCrypto} className={'w-[30px] h-[30px]'}/>
                    <p className={'font-normal text-lg'}>USDT</p>
                    <p className={'text-lg text-[#808a9d] font-normal'}>Tether</p>
                  </td>
                  <td className="border px-[17px]">$21,934.66</td>
                  <td className="border text-center">7.20%</td>
                  <td className="border text-center">25.61%</td>
                  <td className="border">$416,828,752,7</td>
                </tr>

                <tr>
                  <td className="border py-[10px] text-center flex items-center gap-x-2 px-[5px]">
                    <span>4</span>
                    <img src={LogoCrypto} className={'w-[30px] h-[30px]'}/>
                    <p className={'font-normal text-lg'}>USDC</p>
                    <p className={'text-lg text-[#808a9d] font-normal'}>USD Coin</p>
                  </td>
                  <td className="border px-[17px]">$21,934.66</td>
                  <td className="border text-center">7.20%</td>
                  <td className="border text-center">25.61%</td>
                  <td className="border">$416,828,752,7</td>
                </tr>
                <tr>
                  <td className="border py-[10px] text-center flex items-center gap-x-2 px-[5px]">
                    <span>5</span>
                    <img src={LogoCrypto} className={'w-[30px] h-[30px]'}/>
                    <p className={'font-normal text-lg'}>USDT</p>
                    <p className={'text-lg text-[#808a9d] font-normal'}>Tether</p>
                  </td>
                  <td className="border px-[17px]">$21,934.66</td>
                  <td className="border text-center">7.20%</td>
                  <td className="border text-center">25.61%</td>
                  <td className="border">$416,828,752,7</td>
                </tr>
                <tr>
                  <td className="border py-[10px] text-center flex items-center gap-x-2 px-[5px]">
                    <span>6</span>
                    <img src={LogoCrypto} className={'w-[30px] h-[30px]'}/>
                    <p className={'text-lg'}>ETH</p>
                    <p className={'text-lg text-[#808a9d] '}>Ethereum</p>
                  </td>
                  <td className="border px-[17px]">$21,934.66</td>
                  <td className="border text-center">7.20%</td>
                  <td className="border text-center">25.61%</td>
                  <td className="border">$416,828,752,7</td>
                </tr>
                <tr>
                  <td className="border py-[10px] text-center flex items-center gap-x-2 px-[5px]">
                    <span>7</span>
                    <img src={LogoCrypto} className={'w-[30px] h-[30px]'}/>
                    <p className={'text-lg'}>BTC</p>
                    <p className={'text-lg text-[#808a9d]'}>Bitcoin</p>
                  </td>
                  <td className="border px-[17px]">$21,934.66</td>
                  <td className="border text-center">7.20%</td>
                  <td className="border text-center">25.61%</td>
                  <td className="border">$416,828,752,7</td>
                </tr>

                <tr>
                  <td className="border py-[10px] text-center flex items-center gap-x-2 px-[5px]">
                    <span>8</span>
                    <img src={LogoCrypto} className={'w-[30px] h-[30px]'}/>
                    <p className={'text-lg'}>USDC</p>
                    <p className={'text-lg text-[#808a9d]'}>USD Coin</p>
                  </td>
                  <td className="border px-[17px]">$21,934.66</td>
                  <td className="border text-center">7.20%</td>
                  <td className="border text-center">25.61%</td>
                  <td className="border">$416,828,752,7</td>
                </tr>

                <tr>
                  <td className="border py-[10px] text-center flex items-center gap-x-2 px-[5px]">
                    <span>9</span>
                    <img src={LogoCrypto} className={'w-[30px] h-[30px]'}/>
                    <p className={'text-lg'}>BTC</p>
                    <p className={'text-lg text-[#808a9d]'}>Bitcoin</p>
                  </td>
                  <td className="border px-[17px]">$21,934.66</td>
                  <td className="border text-center">7.20%</td>
                  <td className="border text-center">25.61%</td>
                  <td className="border">$416,828,752,7</td>
                </tr>

                <tr>
                  <td className="border py-[10px] text-center flex items-center gap-x-2 px-[5px]">
                    <span>10</span>
                    <img src={LogoCrypto} className={'w-[30px] h-[30px]'}/>
                    <p className={'text-lg'}>BTC</p>
                    <p className={'text-lg text-[#808a9d]'}>Bitcoin</p>
                  </td>
                  <td className="border px-[17px]">$21,934.66</td>
                  <td className="border text-center">7.20%</td>
                  <td className="border text-center">25.61%</td>
                  <td className="border">$416,828,752,7</td>
                </tr>

                <tr>
                  <td className="border py-[10px] text-center flex items-center gap-x-2 px-[5px]">
                    <span>11</span>
                    <img src={LogoCrypto} className={'w-[30px] h-[30px]'}/>
                    <p className={'text-lg'}>BTC</p>
                    <p className={'text-lg text-[#808a9d]'}>Bitcoin</p>
                  </td>
                  <td className="border px-[17px]">$21,934.66</td>
                  <td className="border text-center">7.20%</td>
                  <td className="border text-center">25.61%</td>
                  <td className="border">$416,828,752,7</td>
                </tr>


                </tbody>
              </table>

            </div>


          </div>
      </div>

      <div className={'grid grid-cols-12  my-[80px] items-center'}>
        <div className={'col-span-12 text-center my-[80px]'}>
          <h1 className={'text-5xl mb-[10px]'}>London Wallet provides</h1>
          <p className={'text-[#979797] text-lg '}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim.</p>
        </div>

        <div className={'col-span-12 flex justify-between flex-wrap w-[1200px] mx-auto'}>
          <div className={'col-span-4 '}>
            <div className={'absolute'}>
              <Lottie
                  options={defaultOptionsThreeArrow}
                  height={100}
                  width={100}

              />
            </div>

            <h1 className={'text-3xl font-bold mb-[15px] mt-[120px]'}>Easy Navigation</h1>

            <p className={'text-base'}>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. <br/> <a className={'text-purple-700'}>‍Ut enim ad minim veniam</a> </p>

          </div>

          <div className={'col-span-4 '}>
            <div className={'absolute'}>
              <Lottie
                  options={defaultOptions}
                  height={100}
                  width={100}

              />
            </div>

            <h1 className={'text-3xl font-bold mb-[15px] mt-[120px]'}>Secured Profile</h1>

            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et <a className={'text-purple-700'}>dolore magna aliqua <br/> </a> .Ut enim ad minim veniam</p>

          </div>

          <div className={'col-span-4 '}>
            <div className={'absolute'}>
              <Lottie
                  options={defaultOptionsCheckedData}
                  height={100}
                  width={100}

              />
            </div>

            <h1 className={'text-3xl font-bold mb-[15px] mt-[120px]'}>Two-Factor <br/> Authentication</h1>

            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. <br/> Ut enim ad minim <a className={'text-purple-700'}>veniam</a></p>

          </div>
        </div>

      </div>


    </Element>
  );
};

export default Features;
