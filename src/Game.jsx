import React, { useContext, useEffect, useState } from "react";
import Cross from "./assets/Cross.svg";
import Circle from "./assets/Circle.svg";
import whitecross from "./assets/whitecross.svg";
import retry from "./assets/retry.svg";
import { GameContext } from "./GameContext";
import Popupbox from "./Popupbox";

const Game = () => {
    const [grid, setGrid] = useState(Array(9).fill(null));
    const { userChoice, pcChoice } = useContext(GameContext);
    const [userScore, setUserScore] = useState(0);
    const [pcScore, setPcScore] = useState(0);
    const [tieScore, setTieScore] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [winner, setWinner] = useState("")

    function checkWin(play) {
        if (
            (play[0] == play[1] && play[1] == play[2] && play[1] != null) ||
            (play[3] == play[4] && play[4] == play[5] && play[4] != null) ||
            (play[6] == play[7] && play[7] == play[8] && play[7] != null) ||
            (play[0] == play[4] && play[4] == play[8] && play[4] != null) ||
            (play[2] == play[4] && play[4] == play[6] && play[4] != null) ||
            (play[0] == play[3] && play[3] == play[6] && play[3] != null) ||
            (play[1] == play[4] && play[4] == play[7] && play[4] != null) ||
            (play[2] == play[5] && play[5] == play[8] && play[5] != null)
        ) {
            return true;
        } else {
            return false;
        }
    }

    function findID(ngrid) {
        let id = 4;
        

        let empty = [];
        ngrid.forEach((item, index) => {
            if (item == null) {
                empty.push(index);
            }
        });

        if(empty.length==0){
            setWinner("NO ONE")
            setTieScore(tieScore+1);
            return;
        }

        if (
            (ngrid[1] == ngrid[2] && ngrid[1] == userChoice) ||
            (ngrid[3] == ngrid[6] && ngrid[3] == userChoice) ||
            (ngrid[4] == ngrid[8] && ngrid[4] == userChoice)
        ) {
            console.log("Checking if index 0 is free to block user");
            if (ngrid[0] == null) {
                id = 0;
            }
        }
        if (
            (ngrid[0] == ngrid[2] && ngrid[0] == userChoice) ||
            (ngrid[4] == ngrid[7] && ngrid[4] == userChoice)
        ) {
            console.log("Checking if index 1 is free to block user");
            if (ngrid[1] == null) {
                id = 1;
            }
        }
        if (
            (ngrid[0] == ngrid[1] && ngrid[0] == userChoice) ||
            (ngrid[4] == ngrid[6] && ngrid[4] == userChoice) ||
            (ngrid[5] == ngrid[8] && ngrid[5] == userChoice)
        ) {
            console.log("Checking if index 2 is free to block user");
            if (ngrid[2] == null) {
                id = 2;
            }
        }
        if (
            (ngrid[0] == ngrid[6] && ngrid[0] == userChoice) ||
            (ngrid[4] == ngrid[5] && ngrid[4] == userChoice)
        ) {
            console.log("Checking if index 3 is free to block user");
            if (ngrid[3] == null) {
                id = 3;
            }
        }
        if (
            (ngrid[0] == ngrid[8] && ngrid[0] == userChoice) ||
            (ngrid[1] == ngrid[7] && ngrid[1] == userChoice) ||
            (ngrid[2] == ngrid[6] && ngrid[2] == userChoice) ||
            (ngrid[3] == ngrid[5] && ngrid[3] == userChoice)
        ) {
            console.log("Checking if index 4 is free to block user");
            if (ngrid[4] == null) {
                id = 4;
            }
        }
        if (
            (ngrid[2] == ngrid[8] && ngrid[2] == userChoice) ||
            (ngrid[3] == ngrid[4] && ngrid[3] == userChoice)
        ) {
            console.log("Checking if index 5 is free to block user");
            if (ngrid[5] == null) {
                id = 5;
            }
        }
        if (
            (ngrid[0] == ngrid[3] && ngrid[0] == userChoice) ||
            (ngrid[2] == ngrid[4] && ngrid[2] == userChoice) ||
            (ngrid[7] == ngrid[8] && ngrid[7] == userChoice)
        ) {
            console.log("Checking if index 6 is free to block user");
            if (ngrid[6] == null) {
                id = 6;
            }
        }
        if (
            (ngrid[1] == ngrid[4] && ngrid[1] == userChoice) ||
            (ngrid[6] == ngrid[8] && ngrid[6] == userChoice)
        ) {
            console.log("Checking if index 7 is free to block user");
            if (ngrid[7] == null) {
                id = 7;
            }
        }
        if (
            (ngrid[0] == ngrid[4] && ngrid[0] == userChoice) ||
            (ngrid[2] == ngrid[5] && ngrid[2] == userChoice) ||
            (ngrid[6] == ngrid[7] && ngrid[6] == userChoice)
        ) {
            console.log("Checking if index 8 is free to block user");
            if (ngrid[8] == null) {
                id = 8;
            }
        }

        if (
            (ngrid[1] == ngrid[2] && ngrid[1] == pcChoice) ||
            (ngrid[3] == ngrid[6] && ngrid[3] == pcChoice) ||
            (ngrid[4] == ngrid[8] && ngrid[4] == pcChoice)
        ) {
            console.log("Checking if index 0 is free for pc to win");
            if (ngrid[0] == null) {
                id = 0;
            }
        }
        if (
            (ngrid[0] == ngrid[2] && ngrid[0] == pcChoice) ||
            (ngrid[4] == ngrid[7] && ngrid[4] == pcChoice)
        ) {
            console.log("Checking if index 1 is free for pc to win");
            if (ngrid[1] == null) {
                id = 1;
            }
        }
        if (
            (ngrid[0] == ngrid[1] && ngrid[0] == pcChoice) ||
            (ngrid[4] == ngrid[6] && ngrid[4] == pcChoice) ||
            (ngrid[5] == ngrid[8] && ngrid[5] == pcChoice)
        ) {
            console.log("Checking if index 2 is free for pc to win");
            if (ngrid[2] == null) {
                id = 2;
            }
        }
        if (
            (ngrid[0] == ngrid[6] && ngrid[0] == pcChoice) ||
            (ngrid[4] == ngrid[5] && ngrid[4] == pcChoice)
        ) {
            console.log("Checking if index 3 is free for pc to win");
            if (ngrid[3] == null) {
                id = 3;
            }
        }
        if (
            (ngrid[0] == ngrid[8] && ngrid[0] == pcChoice) ||
            (ngrid[1] == ngrid[7] && ngrid[1] == pcChoice) ||
            (ngrid[2] == ngrid[6] && ngrid[2] == pcChoice) ||
            (ngrid[3] == ngrid[5] && ngrid[3] == pcChoice)
        ) {
            console.log("Checking if index 4 is free for pc to win");
            if (ngrid[4] == null) {
                id = 4;
            }
        }
        if (
            (ngrid[2] == ngrid[8] && ngrid[2] == pcChoice) ||
            (ngrid[3] == ngrid[4] && ngrid[3] == pcChoice)
        ) {
            console.log("Checking if index 5 is free for pc to win");
            if (ngrid[5] == null) {
                id = 5;
            }
        }
        if (
            (ngrid[0] == ngrid[3] && ngrid[0] == pcChoice) ||
            (ngrid[2] == ngrid[4] && ngrid[2] == pcChoice) ||
            (ngrid[7] == ngrid[8] && ngrid[7] == pcChoice)
        ) {
            console.log("Checking if index 6 is free for pc to win");
            if (ngrid[6] == null) {
                id = 6;
            }
        }
        if (
            (ngrid[1] == ngrid[4] && ngrid[1] == pcChoice) ||
            (ngrid[6] == ngrid[8] && ngrid[6] == pcChoice)
        ) {
            console.log("Checking if index 7 is free for pc to win");
            if (ngrid[7] == null) {
                id = 7;
            }
        }
        if (
            (ngrid[0] == ngrid[4] && ngrid[0] == pcChoice) ||
            (ngrid[2] == ngrid[5] && ngrid[2] == pcChoice) ||
            (ngrid[6] == ngrid[7] && ngrid[6] == pcChoice)
        ) {
            console.log("Checking if index 8 is free for pc to win");
            if (ngrid[8] == null) {
                id = 8;
            }
        }

        if (ngrid[id] != null) {
            console.log("trying to make pc win");
            let flag = false;
            for (var index = 0; index < 9; index++) {
                if (ngrid[index] == pcChoice && flag == false) {
                    empty.forEach((pcId) => {
                        if (
                            pcId == index - 1 ||
                            pcId == index + 1 ||
                            pcId == index + 3 ||
                            pcId == index - 3
                        ) {
                            id = pcId;
                            flag = true;
                        }
                    });
                }
            }
            if (flag == false) {
                console.log("all right places were filled therefore choosing random");
                id = empty[Math.floor(Math.random() * empty.length)];
            }
        }

        return id;
    }

    function putUser(id) {
        const newgrid = grid.map((item, index) => {
            if (index === id) {
                item = userChoice;
                return item;
            } else {
                return item;
            }
        });
        if (checkWin(newgrid)) {
            setGrid(newgrid);
            setUserScore(userScore+1);
            console.log("YOU WON");
            setWinner("YOU")
        } else {
            putPC(newgrid);
        }
    }

    function putPC(ngrid) {
        let id = findID(ngrid);

        const newgrid = ngrid.map((item, index) => {
            if (index === id) {
                item = pcChoice;
                return item;
            } else {
                return item;
            }
        });
        if (checkWin(newgrid)) {
            console.log("PC WON");
            setWinner("PC")
            setPcScore(pcScore+1)
        }
        setGrid(newgrid);
    }

    function reset(){
        setGrid(Array(9).fill(null));
        setOpenModal(false);
    }

    useEffect(() => {
        if(winner!=""){
            setOpenModal(true);
        }
    }, [winner]);

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex justify-start w-full">
                    <div className="flex">
                        <img src={Cross} alt="" className="mx-1" />
                        <img src={Circle} alt="" className="mx-1" />
                    </div>
                    <div className="text-[#A8BEC9] bg-[#1F3540] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] h-8 w-24 rounded-md p-0.5 my-6 mx-10 flex justify-center items-center">
                        <div className="flex justify-center items-center">
                            <img src={whitecross} alt="" />
                            <div className="ml-2">TURN</div>
                        </div>
                    </div>
                    <button className="bg-[#A7BDC8] p-1 h-8 w-8 rounded-md shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex justify-center items-center my-6 ml-8">
                        <img src={retry} alt="" onClick={reset}/>
                    </button>
                </div>
                <div className="grid grid-cols-[1fr_1fr_1fr] gap-6 w-full h-[19rem]">
                    <div
                        className=" cursor-pointer bg-[#1F3540] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-md aspect-square flex justify-center items-center"
                        onClick={() => {
                            putUser(0);
                        }}
                    >
                        {grid[0] == "x" && <img src={Cross} alt="" className="h-10 w-10" />}
                        {grid[0] == "o" && (
                            <img src={Circle} alt="" className="h-10 w-10" />
                        )}
                    </div>
                    <div
                        className=" cursor-pointer bg-[#1F3540] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-md aspect-square flex justify-center items-center"
                        onClick={() => {
                            putUser(1);
                        }}
                    >
                        {grid[1] == "x" && <img src={Cross} alt="" className="h-10 w-10" />}
                        {grid[1] == "o" && (
                            <img src={Circle} alt="" className="h-10 w-10" />
                        )}
                    </div>
                    <div
                        className=" cursor-pointer bg-[#1F3540] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-md aspect-square flex justify-center items-center"
                        onClick={() => {
                            putUser(2);
                        }}
                    >
                        {grid[2] == "x" && <img src={Cross} alt="" className="h-10 w-10" />}
                        {grid[2] == "o" && (
                            <img src={Circle} alt="" className="h-10 w-10" />
                        )}
                    </div>
                    <div
                        className="  cursor-pointer bg-[#1F3540] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-md aspect-square flex justify-center items-center"
                        onClick={() => {
                            putUser(3);
                        }}
                    >
                        {grid[3] == "x" && <img src={Cross} alt="" className="h-10 w-10" />}
                        {grid[3] == "o" && (
                            <img src={Circle} alt="" className="h-10 w-10" />
                        )}
                    </div>
                    <div
                        className=" cursor-pointer bg-[#1F3540] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-md aspect-square flex justify-center items-center"
                        onClick={() => {
                            putUser(4);
                        }}
                    >
                        {grid[4] == "x" && <img src={Cross} alt="" className="h-10 w-10" />}
                        {grid[4] == "o" && (
                            <img src={Circle} alt="" className="h-10 w-10" />
                        )}
                    </div>
                    <div
                        className=" cursor-pointer bg-[#1F3540] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-md aspect-square flex justify-center items-center"
                        onClick={() => {
                            putUser(5);
                        }}
                    >
                        {grid[5] == "x" && <img src={Cross} alt="" className="h-10 w-10" />}
                        {grid[5] == "o" && (
                            <img src={Circle} alt="" className="h-10 w-10" />
                        )}
                    </div>
                    <div
                        className=" cursor-pointer bg-[#1F3540] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-md aspect-square flex justify-center items-center"
                        onClick={() => {
                            putUser(6);
                        }}
                    >
                        {grid[6] == "x" && <img src={Cross} alt="" className="h-10 w-10" />}
                        {grid[6] == "o" && (
                            <img src={Circle} alt="" className="h-10 w-10" />
                        )}
                    </div>

                    <div
                        className="  cursor-pointer bg-[#1F3540] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-md aspect-square flex justify-center items-center"
                        onClick={() => {
                            putUser(7);
                        }}
                    >
                        {grid[7] == "x" && <img src={Cross} alt="" className="h-10 w-10" />}
                        {grid[7] == "o" && (
                            <img src={Circle} alt="" className="h-10 w-10" />
                        )}
                    </div>
                    <div
                        className=" cursor-pointer bg-[#1F3540] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-md aspect-square flex justify-center items-center"
                        onClick={() => {
                            putUser(8);
                        }}
                    >
                        {grid[8] == "x" && <img src={Cross} alt="" className="h-10 w-10" />}
                        {grid[8] == "o" && (
                            <img src={Circle} alt="" className="h-10 w-10" />
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_1fr_1fr] gap-6 w-full m-6">
                    <button className="bg-[#31C4BE] rounded-md flex flex-col items-center justify-center h-12">
                        <div>{userChoice.toUpperCase()} (YOU)</div>
                        <div className="font-bold">{userScore}</div>
                    </button>
                    <button className="bg-[#A8BEC9] rounded-md flex flex-col items-center justify-center h-12">
                        <div>TIES</div>
                        <div className="font-bold">{tieScore}</div>
                    </button>
                    <button className="bg-[#F2B237] rounded-md flex flex-col items-center justify-center h-12">
                        <div>{pcChoice.toUpperCase()} (CPU) </div>
                        <div className="font-bold">{pcScore}</div>
                    </button>
                </div>
            </div>
            <Popupbox visible={openModal} reset={reset} winner={winner}/>
        </>
    );
};

export default Game;
