import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, } from 'react-pro-sidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from 'react-router-dom';

function SideBar({ collapsed, toggleSidebar }) {
   
    const location = useLocation();




    return (
        <div >

            <Sidebar className='main-sidebar' style={{ height: "100vh", position: "sticky" }} collapsed={collapsed}
                backgroundColor='black' >
                <Menu menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                        if (level === 0) {
                            return {
                                color: disabled ? "#455A64" : "#eeeeec",
                                backgroundColor: active ? "black" : undefined,
                                "&:hover": {
                                    backgroundColor: "#494844 !important",
                                    color: "white !important",
                                    //  borderRadius: "8px !important",
                                    fontWeight: "bold !important"
                                },
                            };
                        }
                    },
                }}>
                    <MenuItem
                        className="menu"
                        icon={<FontAwesomeIcon icon={faBarsStaggered} style={{ fontSize: "20px" }} />}
                        onClick={toggleSidebar}
                        style={{ textAlign: "center" }}
                    >
                        <h2>M</h2>
                    </MenuItem>

                    <MenuItem component={<Link to="/" className='Link' />} className={`menu ${location.pathname === '/' ? 'active' : ''}`} icon={<FontAwesomeIcon icon={faHouse} className='MenuIcons' />}>
                        Home
                    </MenuItem>

                    <MenuItem component={<Link to="/about" className='Link' />} className={`menu ${location.pathname === '/about' ? 'active' : ''}`} icon={<FontAwesomeIcon icon={faUser} className='MenuIcons' />}>
                        About
                    </MenuItem>

                    <MenuItem component={<Link to="/services" className='Link' />} className={`menu ${location.pathname === '/services' ? 'active' : ''}`} icon={<FontAwesomeIcon icon={faClipboardCheck} className='MenuIcons' />}>
                        Service
                    </MenuItem>

                    <MenuItem component={<Link to="/portfolio" className='Link' />} className={`menu ${location.pathname === '/portfolio' ? 'active' : ''}`} icon={<FontAwesomeIcon icon={faBriefcase} className='MenuIcons' />}>
                        Portfolio
                    </MenuItem>

                    <MenuItem component={<Link to="/contact" className='Link' />} className={`menu ${location.pathname === '/contact' ? 'active' : ''}`} icon={<FontAwesomeIcon icon={faEnvelope} className='MenuIcons' />}>
                        Contact
                    </MenuItem>


                </Menu>
            </Sidebar>

        </div>
    )
}

export default SideBar;

export function MobileNavbar() {
    const [MobileSidebarOpen, setMobileSidebarOpen] = useState(false);


    const toggleMobileSidebar = () => {
        setMobileSidebarOpen(!MobileSidebarOpen);
    };

    return (
        <>
            {/* Mobile navbar */}

            <div className="mobile-navbar">

                <h2>MORNINGST<FontAwesomeIcon icon={faStar} style={{color:"white", marginBottom:"1px"}} />R</h2>
                <button className="mobile-menu-button" onClick={toggleMobileSidebar}>
                    <FontAwesomeIcon icon={faBarsStaggered} style={{ fontSize: '20px' }} />
                </button>


                <Sidebar className={`mobile-sidebar ${MobileSidebarOpen ? 'open' : ''}`} backgroundColor='black'>
                    <Menu
                        menuItemStyles={{
                            button: ({ level, active, disabled }) => {
                                if (level === 0) {
                                    return {
                                        color: disabled ? "#455A64" : "#eeeeec",
                                        backgroundColor: active ? "black" : undefined,
                                        "&:hover": {
                                            backgroundColor: "#494844 !important",
                                            color: "white !important",
                                            //  borderRadius: "8px !important",
                                            fontWeight: "bold !important"
                                        },
                                    };
                                }
                            },
                        }} >
                            <div className='menulist'>
                        <MenuItem component={<Link to="/" className='Link' />} className={`menu ${location.pathname === '/' ? 'active' : ''}`} icon={<FontAwesomeIcon icon={faHouse} className='MenuIcons' />}>
                            Home
                        </MenuItem>

                        <MenuItem component={<Link to="/about" className='Link' />} className={`menu ${location.pathname === '/about' ? 'active' : ''}`} icon={<FontAwesomeIcon icon={faUser} className='MenuIcons' />}>
                            About
                        </MenuItem>

                        <MenuItem component={<Link to="/services" className='Link' />} className={`menu ${location.pathname === '/services' ? 'active' : ''}`} icon={<FontAwesomeIcon icon={faClipboardCheck} className='MenuIcons' />}>
                            Service
                        </MenuItem>

                        <MenuItem component={<Link to="/portfolio" className='Link' />} className={`menu ${location.pathname === '/portfolio' ? 'active' : ''}`} icon={<FontAwesomeIcon icon={faBriefcase} className='MenuIcons' />}>
                            Portfolio
                        </MenuItem>

                        <MenuItem component={<Link to="/contact" className='Link' />} className={`menu ${location.pathname === '/contact' ? 'active' : ''}`} icon={<FontAwesomeIcon icon={faEnvelope} className='MenuIcons' />}>
                            Contact
                        </MenuItem>
                        </div>
                    </Menu>
                </Sidebar>
            </div>
        </>
    )
}
