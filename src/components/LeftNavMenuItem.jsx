import React from 'react'

const LeftNavMenuItem = ({ text, icon, action, className }) => {
    return (
        <div
            className={"text-white cursor-pointer h-10 flex items-center px-4 mb-[1px] rounded-lg hover:bg-white/[0.15] " + className}
            onClick={action}
        >
            <span className='text-base mr-5'>{icon}</span>{text}
        </div>
    )
}

export default LeftNavMenuItem;