import React from "react";
import Cross from "./assets/Cross.svg";
import Circle from "./assets/Circle.svg";
import { useNavigate } from "react-router-dom";
import { GameContext } from "./GameContext";
import { useContext } from 'react';

const StartMenu = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/game");

  const { userChoice, setUserChoice, setPCChoice } = useContext(GameContext);
  return (
    <div className=" h-4/6 w-full flex flex-col items-center">
      <div className="flex justify-center">
        <img src={Cross} alt="" className="mx-1" />
        <img src={Circle} alt="" className="mx-1" />
      </div>
      <div className="bg-[#1F3540] h-40 w-full rounded-md my-6 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex flex-col justify-around items-center">
        <div className=" text-white text-2xl">PICK PLAYER</div>
        <div className="bg-[#192A32] w-11/12 h-12 rounded-md flex justify-around items-center">
          <button
            className={`${userChoice === 'x' ? 'w-[45%] h-9 p-0.5 rounded-md bg-[#D9D9D9]' : 'w-[45%] h-9 p-0.5 rounded-md bg-[#192A32]'}`}
            onClick={() => {
              setUserChoice("x");
              setPCChoice("o");
            }}
          >
            <img src={Cross} alt="" className="m-auto" />
          </button>
          <button
            className={`${userChoice === 'o' ? 'w-[45%] h-9 p-0.5 rounded-md bg-[#D9D9D9]' : 'w-[45%] h-9 p-0.5 rounded-md bg-[#192A32]'}`}
            onClick={() => {
              setUserChoice("o");
              setPCChoice("x");
            }}
          >
            <img src={Circle} alt="" className="m-auto" />
          </button>
        </div>
      </div>
      <button
        className="bg-[#F2B237] w-full h-10 rounded-md my-2"
        onClick={handleClick}
      >
        NEW GAME ( VS CPU )
      </button>
      <button className="bg-[#32C4C3] w-full h-10 rounded-md my-2">
        NEW GAME ( VS HUMAN ) Coming soon
      </button>
      <button className="bg-[#F2B237] w-1/2 h-10 rounded-md mt-9">
        Invite your friend
      </button>
    </div>
  );
};

export default StartMenu;
