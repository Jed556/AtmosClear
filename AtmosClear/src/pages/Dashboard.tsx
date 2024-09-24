import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { server } from '../config'
import { getAPI } from '../components/Server'
import '../App.css'

import DataTable from '../components/DataTable'
import Sidebar from '../components/Sidebar'
import Popup from '../components/Popup';
import PercentageBlocks from '../components/PercentageBlocks'


import profileImage from '../assets/images/user.png';
import logo from '../assets/images/logo.png';
import Darkmode from '../components/Darkmode';


export default function Dashboard() {

    Popup(getAPI(server, "AtmosClear/atmosclear_data.php"), 3000);

    const handleToggleSidebar = () => {
        if (localStorage.getItem('sidebarOpen') === 'true') {
            localStorage.setItem('sidebarOpen', 'false');
        } else {
            localStorage.setItem('sidebarOpen', 'true');
        }
    };

    const navigate = useNavigate();
    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        // if (!loggedInUser) {
        //     navigate('/login');
        // }
    }, []);

    return (
        <>
            <title>Dashboard</title>

            <div className={localStorage.getItem('isDarkMode') ? 'container dark-mode' : 'container'}>
                {/* <!-- Sidebar Section --> */}
                <Sidebar items={[
                    { icon: "dashboard", label: "Dashboard", href: "dashboard", active: true },
                    { icon: "receipt_long", label: "History", href: "history" },
                    { icon: "report_gmailerrorred", label: "Health Risk", href: "risks" },
                    { icon: "settings", label: "Settings", href: "settings" },
                    { icon: "logout", label: "Logout", href: "login" }
                ]} />
                {/* <!-- End of Sidebar Section --> */}

                {/* <!-- Main Content --> */}
                <main>
                    <h1>Dashboard</h1>
                    {/* <!-- Analyses --> */}
                    <div className="analyse">
                        <PercentageBlocks />
                    </div>
                    {/* <!-- End of Analyses --> */}

                    {/* <!-- Recent Data Table --> */}
                    <DataTable url={getAPI(server, "AtmosClear/atmosclear_data.php")} className='recent-data' title='Data Log' maxRows={8} customNames={["Date & Time", "PM1", "PM10", "PM2.5", "Humidity", "Temperature", "MQ2"]} />
                    {/* <!-- End of Recent Orders --> */}
                </main>
                {/* <!-- End of Main Content --> */}

                {/* <!-- Right Section --> */}
                <div className="right-section">
                    <div className="nav">
                        <button id="menu-btn" onClick={handleToggleSidebar}>
                            <span className="material-icons-sharp">
                                menu
                            </span>
                        </button>
                        <Darkmode />

                        <div className="profile">
                            <div className="info">
                                <p>{['Hey', 'Hi', 'Hello'][Math.floor(Math.random() * 3)]} <b>{localStorage.getItem('loggedInUser') ? (localStorage.getItem('loggedInUser') && JSON.parse(localStorage.getItem('loggedInUser') as string).Username) : ""}             </b></p>
                                <small className="text-muted">{localStorage.getItem('loggedInUser') ? "Admin" : "Guest"}</small>
                            </div>
                            <div className="profile-photo">
                                <img src={profileImage} />
                            </div>
                        </div>

                    </div>
                    {/* <!-- End of Nav --> */}

                    <div className="user-profile">
                        <div className="logo">
                            <img src={logo} />
                            <h2>AtmosClear</h2>
                            <p>Purifying the Air, One Breath at a Time</p>
                            <p className="credits">A DOST hack4aprogress 2024 project</p>
                        </div>
                    </div>

                    <div className="reminders">
                        <div className="header">
                            <h2>Reports</h2>
                            <span className="material-icons-sharp">
                                notifications_none
                            </span>
                        </div>

                        <div className="notification">
                            <div className="icon">
                                <span className="material-icons-sharp">
                                    info
                                </span>
                            </div>
                            <div className="content">
                                <div className="info">
                                    <h3>Good AQI</h3>
                                    <small className="text_muted">
                                        11:00 AM
                                    </small>
                                </div>
                                <span className="material-icons-sharp">
                                    more_vert
                                </span>
                            </div>
                        </div>

                        <div className="notification deactive">
                            <div className="icon">
                                <span className="material-icons-sharp">
                                    dangerous
                                </span>
                            </div>
                            <div className="content">
                                <div className="info">
                                    <h3>High AQI</h3>
                                    <small className="text_muted">
                                        10:00 AM
                                    </small>
                                </div>
                                <span className="material-icons-sharp">
                                    more_vert
                                </span>
                            </div>
                        </div>

                        <div className="notification add-reminder">
                            <div>
                                <span className="material-icons-sharp">
                                    add
                                </span>
                                <h3>New Ticket</h3>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}