import { useState, useRef, useEffect } from "react";
import clappingCat from "../assets/clappingcat.mp4";
import './calc.css'


function Calc(){
    const [display, setDisplay] = useState<string>('0')
    const [first, setFirst] = useState<number>(0)
    const [opera, setOperator] = useState<string>('')
    const [fresh, setFresh] = useState<boolean>(true) 
    const [inoperation, setOperation] = useState(false)
    const [sumed, setSumed] = useState<boolean>(false)
    const [showMeme, setShowMeme] = useState<boolean>(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (showMeme && videoRef.current) {
            videoRef.current.currentTime = 0;
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch((err) => {
                    console.log("Autoplay error:", err);
                });
            }
        }
    }, [showMeme]);
    
    function pressNumber(data:string):void{
        if(sumed){
            setDisplay('0')
            setSumed(false)
        }
        // setDisplay(data)

        // result()
        setDisplay(display => {
            if(fresh){
                if(display === '0'){
                    return display = "" + data
                }else{
                    return display + data
                }
            }else{
                setFresh(true)
                return display = "" + data
            }
        })
    }

    function clear():void{
        setDisplay("0")
        setOperator('')
        setShowMeme(false)
    }
    
    function operator(operator:string){
        if (opera === '/' && (display === '0' || Number(display) === 0)) {
            setShowMeme(true)
            setDisplay(`can't divide by zero`)
            return
        }
        setFirst(Number(display))
        setOperator(operator)
        setFresh(false)
    }
    
    function result(){

        
        if(opera === '+')setDisplay(String(first + Number(display)))
        if(opera === '-')setDisplay(String(first - Number(display)))
        if(opera === '*')setDisplay(String(first * Number(display)))
        if(opera === '/'){
            if (display === '0' || Number(display) === 0) {
                setShowMeme(true)
                return setDisplay(`can't divide by zero`)
            }
            return setDisplay(String(first / Number(display)))
        }
        setSumed(true)
    }
    
    function negativity(){
        if(display[0] !== '-'){
            setDisplay('-'+display)            
        }else{
            setDisplay(display.slice(1, display.length))
        }
    }

    function persentage(){
        setDisplay(display=> String(Number(display)/100))
    }


    function dot(){
        setDisplay(display + '.')

    }
    


    return(
        <div className='body'>
        <div className="calculator">
            <div className="output" id="output">{display}</div>
            <div>
                {/*first row  */}
                <div className='row'>
                    <div className="normal" onClick={()=>clear()}>AC</div>                
                    <div className="normal" onClick={()=>negativity()}>+/-</div>                
                    <div className="normal" onClick={()=>persentage()}>%</div>                
                    <div className="operator" onClick={() => operator('/')}>/</div>                
                </div>

                {/*second row  */}
                <div className='row'>
                    <div className="number" onClick={() => pressNumber('7')}>7</div>                
                    <div className="number" onClick={() => pressNumber('8')}>8</div>                
                    <div className="number" onClick={() => pressNumber('9')}>9</div>                
                    <div className="operator" onClick={() => operator('*')}>*</div>                
                </div>

                {/*third row  */}
                <div className='row'>
                    <div className="number" onClick={() => pressNumber('4')}>4</div>                
                    <div className="number" onClick={() => pressNumber('5')}>5</div>                
                    <div className="number" onClick={() => pressNumber('6')}>6</div>                
                    <div className="operator" onClick={() => operator('-')}>-</div>                
                </div>

                {/*fourth row  */}
                <div className='row'>
                    <div className="number" onClick={() => pressNumber('1')}>1</div>                
                    <div className="number" onClick={() => pressNumber('2')}>2</div>                
                    <div className="number" onClick={() => pressNumber('3')}>3</div>                
                    <div className="operator" onClick={() => operator('+')}>+</div>                
                </div>

                {/*fifth row  */}
                <div className='row'>
                    <div className=" zero" onClick={() => pressNumber('0')}>0</div>                
                    <div className="number" onClick={() => dot()}>.</div>                
                    <div className="operator" onClick={() => result()}>=</div>               
                </div>
            </div>
        </div>

        {showMeme && (
            <div className="meme-overlay" onClick={() => setShowMeme(false)}>
                <div className="meme-modal" onClick={(e) => e.stopPropagation()}>
                    <div className="meme-header">
                        <span className="meme-title">😹 Can't divide by zero! 😹</span>
                        <button
                            className="meme-close-btn"
                            onClick={() => setShowMeme(false)}
                            aria-label="Close meme"
                        >
                            ✕
                        </button>
                    </div>
                    <video
                        ref={videoRef}
                        src={clappingCat}
                        autoPlay
                        playsInline
                        controls
                        onEnded={() => setShowMeme(false)}
                        className="meme-video"
                    />
                </div>
            </div>
        )}
        </div>
    ) 
}


export default Calc
