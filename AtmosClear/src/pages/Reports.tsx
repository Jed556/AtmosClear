import { server } from '../config'
import { getAPI } from '../components/Server'

import DataTable from '../components/DataTable'

export default function Reports() {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
            <title>Dashboard</title>

            <div className="container">

                {/* <!-- Main Content --> */}
                <main>
                    <h1>Login</h1>

                    {/* <!-- Recent Data Table --> */}
                    <DataTable url={getAPI(server, "api/get/history.php")} className='recent-data' title='Recent Data' />
                    {/* <!-- End of Recent Orders --> */}

                </main>
                {/* <!-- End of Main Content --> */}

            </div>
        </>
    )
}