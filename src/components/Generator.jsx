import React, {useState } from 'react';
import { FaRegCopy } from "react-icons/fa";

const Generator = () => {
    const[password,setPassword] = useState("");
    const[range,setRange] = useState(8);
    const[click,setClick] = useState({
        uppercase : false,
        lowercase : false,
        numbers : false,
        symbols : false
    });
    const[strength,setStrength] = useState("");
    const[strengthColor,setStrengthColor] = useState({
        barOne:"transparent",
        barTwo:"transparent",
        barThree:"transparent",
        barFour:"transparent",
    })
    // const[strengthColorOne,setStrengthColorOne] = useState("transparent");
    // const[strengthColorTwo,setStrengthColorTwo] = useState("transparent");
    // const[strengthColorThree,setStrengthColorThree] = useState("transparent");
    // const[strengthColorFour,setStrengthColorFour] = useState("transparent");


    function handleRangeInput(e){
        setRange(e.target.value);
    }

    function handleClick(e){
        const{id,checked} = e.target;
        let charSet = "";
        let newPassword = "";
        setClick((prev)=> {
            const updatedClick = {
                ...prev,
                [id] : checked
            }

            const trueConditions = [
                updatedClick.uppercase,
                updatedClick.lowercase,
                updatedClick.numbers,
                updatedClick.symbols
            ].filter(Boolean).length;
    
            if(trueConditions === 4){
                setStrength("HIGH");
                setStrengthColor({
                    ...strengthColor,
                    barOne:"bg-lime-500",
                    barTwo:"bg-lime-500",
                    barThree:"bg-lime-500",
                    barFour:"bg-lime-500",
                });
                // setStrengthColorOne("lime-500");
                // setStrengthColorTwo("lime-500");
                // setStrengthColorThree("lime-500");
                // setStrengthColorFour("lime-500");
            }
            else if(trueConditions === 3 || trueConditions === 2){
                setStrength("MEDIUM");
                if(trueConditions === 3){
                    setStrengthColor({
                        ...strengthColor,
                        barOne:"bg-orange-500",
                        barTwo:"bg-orange-500",
                        barThree:"bg-orange-500",
                        barFour:"transparent",
                    });
                    // setStrengthColorOne("orange-500");
                    // setStrengthColorTwo("orange-500");
                    // setStrengthColorThree("orange-500");
                    // setStrengthColorFour("transparent");
                }
                else{
                    setStrengthColor({
                        ...strengthColor,
                        barOne:"bg-orange-500",
                        barTwo:"bg-orange-500",
                        barThree:"transparent",
                        barFour:"transparent",
                    });
                    // setStrengthColorOne("orange-500");
                    // setStrengthColorTwo("orange-500");
                    // setStrengthColorThree("transparent");
                    // setStrengthColorFour("transparent");
                }
                
            }
            else if(trueConditions === 1){
                setStrength("LOW");
                setStrengthColor({
                    ...strengthColor,
                    barOne:"bg-red-500",
                    barTwo:"transparent",
                    barThree:"transparent",
                    barFour:"transparent",
                });
                // setStrengthColorOne("red-500");
                // setStrengthColorTwo("transparent");
                // setStrengthColorThree("transparent");
                // setStrengthColorFour("transparent");
            }
            else{
                setStrength("");
                setStrengthColor({
                    ...strengthColor,
                    barOne:"transparent",
                    barTwo:"transparent",
                    barThree:"transparent",
                    barFour:"transparent",
                });
            }

            
    
            return updatedClick;
        });

        
    }

    function generatePwd(){
        let charSet = "";
        let newPassword = "";
        if(click.uppercase || click.lowercase || click.numbers || click.symbols){
            if(click.uppercase){
                charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                console.log(charSet);
            }
            if(click.lowercase){
                charSet += "abcdefghijklmnopqrstuvwxyz";
                console.log(charSet);
            }
            if(click.numbers){
                charSet += "1234567890";
                console.log(charSet);
            }
            if(click.symbols){
                charSet += "!@$%^&*()_+=-";
                console.log(charSet);
            }

        }
        else{
            alert("please Select One");
            
        }

        for(let i=0; i<= range; i++){
            newPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        setPassword(newPassword);

        console.log(newPassword);
    }

    async function handleCopy(){
        try{
            await window.navigator.clipboard.writeText(password);
            alert("Copied");
        }
        catch(err){
            console.error("unable to copy", err);
            alert("unable To Copy");
        }
    }
  return (
    <>
    <div className="flex items-center bg-[#24232B] h-14 justify-between md:w-96 max-w-[350px] p-3 my-5">
      <input type='text' readOnly placeholder='Generate Password' className="h-full w-full font-primaryFont text-white text-2xl outline-none bg-[#24232B]" value={password}/>
      {password.length > 1 ? <FaRegCopy className="text-white text-2xl cursor-pointer" onClick={handleCopy}/> : ""}
    </div>
    <div className='flex items-center bg-[#24232B] justify-between p-3 flex-col'>
        <div className='charcter_length flex items-center justify-between w-full'>
            <p className='font-primaryFont text-white'>Character Length</p>
            <p className='text-[#81B88B] font-primaryFont font-bold text-3xl'>{range}</p>
        </div>

        <div className='input_range w-full'>
            <input type='range' min="8" max="16" value={range} className='accent-black rounded-none w-full h-1 bg-[#81b888] outline-none slider-thumb border-none appearance-none cursor-pointer border-[#81b888] border-2' onChange={handleRangeInput}/>
        </div>

        <div className='checkbox w-full my-5'>
            <div className='uppercases flex items-center gap-3 font-primaryFont'>
                <input type="checkbox" id='uppercase' className='cursor-pointer accent-[#81b888]' checked={click.uppercase} onChange={handleClick}/>
                <label htmlFor='uppercase' className="text-white cursor-pointer">Include Uppercase Letter</label>
            </div>

            <div className='lowercases flex items-center gap-3 font-primaryFont'>
                <input type="checkbox" id='lowercase' className='cursor-pointer accent-[#81b888]' checked={click.lowercase} onChange={handleClick}/>
                <label htmlFor='lowercase' className="text-white cursor-pointer">Include Lowercase Letter</label>
            </div>

            <div className='numbers flex items-center gap-3 font-primaryFont'>
                <input type="checkbox" id='numbers' className='cursor-pointer accent-[#81b888]' checked={click.numbers} onChange={handleClick}/>
                <label htmlFor='numbers' className="text-white cursor-pointer">Include Numbers</label>
            </div>

            <div className='symbols flex items-center gap-3 font-primaryFont'>
                <input type="checkbox" id='symbols' className='cursor-pointer accent-[#81b888]' checked={click.symbols} onChange={handleClick}/>
                <label htmlFor='symbols' className="text-white cursor-pointer">Include Symbols</label>
            </div>
        </div>

        <div className='strength flex items-center justify-between w-full'>
            <p className='font-primaryFont uppercase text-white'>Strength</p>

            <div className='strength_display flex items-center gap-2'>
                <p className='text-white font-primaryFont text-xl uppercase transition-colors duration-150 ease-linear'>{strength}</p>

                <div className='bars flex items-center gap-2'>
                    <div className={`w-2 h-5 border border-white ${strengthColor.barOne} transition-all duration-150 ease-linear`}></div>
                    <div className={`w-2 h-5 border border-white ${strengthColor.barTwo} transition-all duration-150 ease-linear`}></div>
                    <div className={`w-2 h-5 border border-white ${strengthColor.barThree} transition-all duration-150 ease-linear`}></div>
                    <div className={`w-2 h-5 border border-white ${strengthColor.barFour} transition-all duration-150 ease-linear`}></div>
                </div>
            </div>
        </div>

        <div className='generate_btn my-5 w-full flex items-center justify-center'>
            <button className='bg-[#81b888] font-primaryFont text-white cursor-pointer w-full h-12 uppercase hover:bg-transparent border border-[#81b888] transition-all duration-150 ease-in-out' onClick={generatePwd}>Generate Password →</button>
        </div>
      
    </div>
    </>
  )
}

export default Generator
