import { server } from '../config'
import { getAPI } from '../components/Server'

import DataTable from '../components/DataTable'
import Sidebar from '../components/Sidebar'
import Popup from '../components/Popup'

import profileImage from '../assets/images/profile-1.jpg';
import logo from '../assets/images/logo.png';
import Darkmode from '../components/Darkmode'

export default function History() {
    Popup(getAPI(server, "AtmosClear/atmosclear_data.php"), 3000);

    const handleToggleSidebar = () => {
        if (localStorage.getItem('sidebarOpen') === 'true') {
            localStorage.setItem('sidebarOpen', 'false');
        } else {
            localStorage.setItem('sidebarOpen', 'true');
        }
    };

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />

            <title>History</title>

            <div className={localStorage.getItem('isDarkMode') ? 'container dark-mode' : 'container'}>
                {/* <!-- Sidebar Section --> */}
                <Sidebar items={[
                    { icon: "dashboard", label: "Dashboard", href: "dashboard" },
                    { icon: "receipt_long", label: "History", href: "history", active: true },
                    { icon: "report_gmailerrorred", label: "Health Risk", href: "risks" },
                    { icon: "settings", label: "Settings", href: "settings" },
                    { icon: "logout", label: "Logout", href: "login" }
                ]} />
                {/* <!-- End of Sidebar Section --> */}

                {/* <!-- Main Content --> */}
                <main>
                    <h1>History</h1>

                    {/* <!-- Recent Data Table --> */}
                    <DataTable url={getAPI(server, "AtmosClear/atmosclear_data.php")} className='recent-data' title='Data Log' maxRows={200} />
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
                                <p>Hey, <b>Jed</b></p>
                                <small className="text-muted">Admin</small>
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
                                <h3>Add Reminder</h3>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}