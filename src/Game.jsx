import React,{useState,useEffect} from 'react'
export default function Game(){
const mole='./src/images/mole.png'
    const[visibility,setVisibility]=useState(null)
    const[score,setScore]=useState(0)
    const[timer,setTimer]=useState(30)
    
    useEffect(()=>{
        if(timer===0){
            const finalScore=document.querySelector(".scoreDisplayer")
            finalScore.style.display="flex";
            setTimeout(()=>{
            setTimer(30);
            setScore(0);
            setVisibility(null)
            location.reload()},1500)
        }
    },[timer])

    useEffect(()=>{
        const interValid=setInterval(()=>{
            setTimer(prevTime=>prevTime-1);
        },1000)
    },[])
    useEffect(()=>{
        const moles=document.querySelectorAll("img")

        function updateVisibility(){
            let n=Math.ceil(Math.random()*moles.length)
            setVisibility(n)        
        }
        function updateScore(){
            setScore(prevScore=>prevScore+1)
        }
        if(visibility!==null && moles[visibility]){
            
            moles[visibility].style.opacity=1
            moles[visibility].style.animation=" animation:show-up 1.5s 1 alternate forwards;"

            function handleClick(event){
                event.target.style.opacity=0;
                updateVisibility();
                updateScore();
            }
            moles[visibility].addEventListener("click",handleClick);

            return()=>{
                moles[visibility].removeEventListener("click",handleClick);
            }
        }
        else{
            updateVisibility();
        }
    },[visibility])
    return(
        <div>
        <header>
        <h1>Whack-a-Mole <b>{timer}</b></h1>
        <h2>Score:{score}</h2>
        </header>  
        <div className='ball-container'>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>       
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>       
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>       
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>
        <button className="balls"><img src={mole} /></button>       
        </div>
        <div className='scoreDisplayer'>Your Whacks:{score}</div>
        </div>
        )
}