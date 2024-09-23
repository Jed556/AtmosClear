import React, { useState } from 'react';
import { getAPI } from '../components/Server';
import { server } from '../config';
import fetchData from '../components/GetData';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Access the input values here
        // console.log('Username:', username);
        // console.log('Password:', password);

        const data = await fetchData(getAPI(server, "api/get/users.php"));

        const user = data.find((user: any) => user.Username === username && user.Password === password);
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = '/dashboard';
        } else {
            alert('Invalid username or password');
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
            <title>Login</title>
            <main>
                <form className="intro-form" onSubmit={handleSubmit}>
                    <h1 className="intro-form-title">AtmosClear</h1>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className='btn' type="submit">Login</button>
                    <p className="intro-bot-text">No account? <a href="/register" className='register-btn'>Register now</a></p>
                </form>
            </main>
        </>
    );
}