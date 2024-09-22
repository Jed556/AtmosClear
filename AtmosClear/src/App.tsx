import './App.css'
import DataTable from './components/DataTable'
import './components/PercentageBlock'
import PercentageBlock from './components/PercentageBlock'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
      <title>Dashboard</title>

      <div className="container">
        {/* <!-- Sidebar Section --> */}
        <Sidebar items={[
          { icon: "dashboard", label: "Dashboard", href: "#", active: true },
          { icon: "insights", label: "Analytics", href: "#" },
          { icon: "receipt_long", label: "History", href: "#" },
          { icon: "report_gmailerrorred", label: "Reports", href: "#" },
          { icon: "settings", label: "Settings", href: "#" },
          { icon: "logout", label: "Logout", href: "#" }
        ]} />
        {/* <!-- End of Sidebar Section --> */}

        {/* <!-- Main Content --> */}
        <main>
          <h1>Analytics</h1>
          {/* <!-- Analyses --> */}
          <div className="analyse">
            <PercentageBlock list={[
              { label: "Cleanliness", color: "green", percentage: 75, value: 125 },
              { label: "Temperature", color: "blue", percentage: 75, value: 28 },
              { label: "Humidity", color: "green", percentage: 75, value: 122 },
              { label: "PM2.5", color: "blue", percentage: 75, value: 11 },
              { label: "DHT22", color: "red", percentage: 75, value: 15 },
            ]} />
          </div>
          {/* <!-- End of Analyses --> */}

          {/* <!-- New Users Section --> */}
          {/* <div className="new-users">
            <h2>New Users</h2>
            <div className="user-list">
              <div className="user">
                <img src="assets/images/profile-2.jpg" />
                <h2>Jack</h2>
                <p>54 Min Ago</p>
              </div>
              <div className="user">
                <img src="assets/images/profile-3.jpg" />
                <h2>Amir</h2>
                <p>3 Hours Ago</p>
              </div>
              <div className="user">
                <img src="assets/images/profile-4.jpg" />
                <h2>Ember</h2>
                <p>6 Hours Ago</p>
              </div>
              <div className="user">
                <img src="assets/images/plus.png" />
                <h2>More</h2>
                <p>New User</p>
              </div>
            </div>
          </div> */}
          {/* <!-- End of New Users Section --> */}

          {/* <!-- Recent Data Table --> */}
          <DataTable url={"http://localhost:80/atmosclear/getdata.php"} className='recent-data' title='Recent Data' />
          {/* <!-- End of Recent Orders --> */}

        </main>
        {/* <!-- End of Main Content --> */}

        {/* <!-- Right Section --> */}
        <div className="right-section">
          <div className="nav">
            <button id="menu-btn">
              <span className="material-icons-sharp">
                menu
              </span>
            </button>
            <div className="dark-mode">
              <span className="material-icons-sharp active">
                light_mode
              </span>
              <span className="material-icons-sharp">
                dark_mode
              </span>
            </div>

            <div className="profile">
              <div className="info">
                <p>Hey, <b>Jed</b></p>
                <small className="text-muted">Admin</small>
              </div>
              <div className="profile-photo">
                <img src="assets/images/profile-1.jpg" />
              </div>
            </div>

          </div>
          {/* <!-- End of Nav --> */}

          <div className="user-profile">
            <div className="logo">
              <img src="assets/images/logo.png" />
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

export default App
