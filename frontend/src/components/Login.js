import React, { useState } from "react";
import './Login.css'
import { Box, TextField } from "@mui/material";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        setEmail('');
        setPassword('')
    };
    return (
        <div>
            <p>hello testing</p>
            <Box
                sx={{
                    width: 300,
                    height: 200,
                    border: '1px solid black',
                    padding: 2,
                }}
            >
                <form onSubmit={handleSubmit}>
                    <div>

                        <TextField
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} label="Email" variant="filled" />
                        <TextField
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} label="Password" variant="filled"
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>

            </Box>

        </div>
    );
};

export default Login;
