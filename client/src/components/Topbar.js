import React from 'react'

function Topbar() {
    return (
        <div>
            <div className="top-bar">

                {/* <div className="profile-box">
                    <div className="circle"></div>
                    <span className="arrow fa fa-angle-down"></span>
                </div> */}

                <ul className="top-menu">
                    <li className="menu-icon trigger-sidebar-toggle">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </li>
                    <li className="active"><a href="#">Browse Books</a></li>
                    <li><a href="#">My Books</a></li>
                </ul>

            </div>
        </div>
    )
}

export default Topbar
