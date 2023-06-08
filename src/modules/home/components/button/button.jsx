import React from "react";
import { DownloadOutlined } from '@ant-design/icons';
import {useNavigate} from "react-router-dom";


const DownloadButton = ({children}) => {
    const navigate = useNavigate()
    return (
        <button className={'py-[17px] px-[55px] flex gap-x-8 items-center text-purple-700 bg-[#fff] text-xl border rounded-[80px] hover:bg-[#ADADAD] transition-colors duration-7000'} onClick={() => navigate('home')}>
            <DownloadOutlined/>
            <p>{children}</p>
        </button>
    )
}

export default DownloadButton
