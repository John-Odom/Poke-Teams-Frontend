import React, {useRef, useEffect} from 'react'
import Navbar from '../containers/NavBar'
import { Link } from 'react-router-dom';
import bulbasaur from '../images/bulbasaur.png'
import pikachu from '../images/pika.png'
import charmander from '../images/charmander.png'
import eevee from '../images/eevee.png'
import chikorita from '../images/chikorita.png'
import squirtle from '../images/squirtle.png'
import grookey from '../images/grookey.png'
import marill from '../images/marill.png'
import {POKEMONPAGE} from '../routePaths'
import {TweenMax, TimelineLite, Power3} from 'gsap'


const Home = () => {
    let app = useRef(null);
    let images = useRef(null);
    let header = useRef(null);
    let tl = new TimelineLite()

    useEffect(()=>{
        const bulbasaur = images.firstElementChild
        const pikachu = images.children[1]
        const chikorita = images.children[2]
        const squirtle = images.children[3]
        const eevee = images.children[4]
        const charmander = images.lastElementChild
        TweenMax.to(app, 0, {css: {visibility:'visible'}})
        tl.to(bulbasaur, 3, {x:0,y:"400%", ease:Power3.easeOut})
        .to(charmander, 3, {x:0, y:"400%", ease:Power3.easeOut}, '-=3')
        .to(pikachu, 3, {x:"-100%", ease:Power3.easeOut}, '-=2')
        .to(eevee, 3, {x:"100%", ease:Power3.easeOut}, '-=3')
        .to(chikorita, 3, {x:"-200%", y:"200%", ease:Power3.easeOut}, '-=3')
        .to(squirtle, 3, {x:"200%", y:"200%", ease:Power3.easeOut}, '-=3')
        .to(header, 1, {opacity:1, pointerEvents:'auto'})

    })
    
    return (
        <div id="home-page" ref={el => app = el} >
            <Navbar />
            <div className='gsap-div'>
                <div className='gsap-closed'ref={el => images = el} >
                    <img src={bulbasaur} className="pokemon-movers" alt='bulbasaur' />
                    <img src={pikachu} className="pokemon-movers" alt='pikachu' />
                    <img src={chikorita} className="pokemon-movers" alt='chikorita' />
                    <img src={squirtle} className="pokemon-movers" alt='squirtle' />
                    <img src={eevee} className="pokemon-movers" alt='eevee' />
                    <img src={charmander} className="pokemon-movers" alt='charmander' />
                </div>
                <div className="gsap-opened" ref={el => header = el}>
                        <h1><a href={POKEMONPAGE}>Build Your Team</a></h1>
                </div>
            </div>
            <div className='bottomPage'>
                <div id="welcome-div">
                    <h1 id="welcome-text">Welcome to Poketeam Builder - Build your POKETEAM!</h1>
                </div>
                <div id="home-page-link-options">
                    <Link to="teams">See our teams!</Link>
                    <Link to="team/new">Make a new Team!</Link>
                </div>
            </div>
            
        </div>
    )
}
export default Home