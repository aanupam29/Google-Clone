import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from '@material-ui/core';
import Search from './Search';

function Home() {
    return (
        <div className="home">
           <div className="home__header">
            <div className="home__headerLeft">
                <Link to="/about">About</Link>
                <Link to="/store">Store</Link>
            </div>
            <div className="home__headerRight">
                <Link to="/gmail">Gmail</Link>
                <Link to="/images">Images</Link>
                <AppsIcon />
                <Avatar />
            </div>
           </div>

           <div className="home__body">
            <img src="https://openthread.google.cn/images/ot-contrib-google.png" alt="" />
            <div className="home__input">
                <Search />
            </div>
           </div>
        </div>
    )
}

export default Home
