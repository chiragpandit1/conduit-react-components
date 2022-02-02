import React from 'react'
import './TopBar.css'

const TopBar = () => {

    return (
        <div className="container-topbar">
            <div className="logo">
                Conduit
            </div>
            <div className="topbar-links">
                <div>
                    Home
                </div>
                <div>
                    Sign in
                </div>
                <div>
                    Sign up
                </div>
            </div>
        </div>
    )
}

export default TopBar;