import React from 'react';

const Card = ({
    children,
    avatar,
    name,
    job
              }) => {
    return (
        <div className={'w-[350px] bg-[#F5F5F5] py-[20px] px-[40px] h-[300px] mx-auto rounded-[20px]'}>
            <p className={'mb-[80px] text-base'}>{children}</p>

            <div className={'flex items-center gap-x-3'}>
                <img src={avatar} className={'rounded-[60px] w-[70px] h-[70px]'} />

                <div>
                    <p className={'font-bold'}>{name}</p>
                    <p className={'text-[#808080]'}>{job}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;

