import React, { useState } from 'react';
import { getAPI } from '../components/Server';
import { server } from '../config';
import fetchData from '../components/GetData';
import postData from '../components/PostData';
import PercentageBlock from '../components/PercentageBlock';

export default function Register() {
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState(Date);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Access the input values here
        // console.log('Username:', username);
        // console.log('Password:', password);

        const data = await fetchData(getAPI(server, "api/get/users.php"));

        const user = data.find((user: any) => user.Username === username && user.Password === password);
        if (user) {
            alert('User already exist');
        } else {
            const newUser = {
                Username: username,
                Firstname: firstname,
                Lastname: lastname,
                Email: email,
                Birthday: birthday,
                Password: password,
            };
            await postData(getAPI(server, "api/new/user.php"), newUser);
        }
    }

    return (
        <>
            <title>Register</title>

            <div className="analyse">

            </div>

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
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="lastname"
                            id="lastname"
                            name="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthday">Birthday</label>
                        <input
                            type="date"
                            id="birthday"
                            name="birthday"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <button className='btn' type="submit">Register Now</button>
                    <p className="intro-bot-text">Have an account? <a href="/login" className='form-link-text'>Log in</a></p>
                </form>
            </main>
        </>
    );
}