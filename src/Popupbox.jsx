import React from 'react'
import { useNavigate } from "react-router-dom";

const Popupbox = ({ visible, reset, winner}) => {
    const navigate = useNavigate();
    if (!visible) return null;
    else return (
        <div className={`fixed inset-0 transition-colors ${visible ? "visible bg-black/80" : "invisible"} flex justify-center items-center`}>
            <div className='bg-[#192A32] w-[25rem] h-56 flex flex-col justify-around items-center p-3'>
                <div className='text-[#ACC2CD]'>{winner} WON!</div>
                <div className='text-[#F7B336] font-bold text-2xl'>
                    O TAKES THE ROUND
                </div>
                <div className="flex">
                    <button className='bg-[#F2B237] text-[#192A32] rounded-lg p-1 w-28 text-md m-2' onClick={() => navigate("/")}>QUIT</button>
                    <button className='bg-[#31C4BE] text-[#192A32] rounded-lg p-1 w-28 text-md m-2 ' onClick={reset}>NEXT ROUND</button>
                </div>
            </div>
        </div>
    )
}

export default Popupbox