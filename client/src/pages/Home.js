import React from "react";
import NavBar from '../components/NavBar/NavBar';
import BasicTextFields from '../components/EventSearchInput/EventSearchInput';
import SimpleCard from '../components/Hero/Hero';
import Maps from '../components/Maps/Maps';
import './Home.css';

function Home() {

    return (
        <>
        <NavBar />
        <div className='container'>
            <div className='row' id='app-title'>
                <div className='col s12 m12 l12'>
                    <p>#ShowMyShow</p>
                </div>
            </div>
            <div className='row' id='event-input'>
                <div className='col s12 m12 l12'>
                    {BasicTextFields()}
                </div>
            </div>
            <div className='row' id='hero-card'>
                <div className='col s12 m12 l12'>
                    {SimpleCard()}
                </div>
            </div>
            <br></br>
            <div className='row' id='home-map'>
                <div className='col s12 m12 l12'>
                    <Maps />
                </div>
            </div>
            <div className='row' style={{justifyContent: 'center'}}>
                <div className='col s12 m12 l12'>
                <a className="waves-effect waves-light btn-small">Login</a>
                <br></br>
                <a className="waves-effect waves-light btn-small">Sign-Up</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;