import React, { useState } from "react";
import './Css/Login.css'
import { TextField, Card, Button, Typography, CardContent } from "@mui/material";
import image from '../Images/pic2.jpg'
import { AccountCircle, Lock } from "@mui/icons-material";

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
            <div className="login" >
                <Card
                    className="card">
                    <CardContent  className="cardContent">
                        <Typography variant="h4" component="h2" className='heading'>
                            Login
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <TextField
                                    label="Email"
                                    variant="standard"
                                    value={email}
                                    placeholder="Enter Your Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group ">
                                <TextField
                                    type="password"
                                    label="Password"
                                    variant="standard"
                                    placeholder="Enter Your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="button">
                            <Button type="submit"  className="button"  variant="contained" sx={{color:'black',backgroundColor:'pink'}} >
                                Login
                            </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Login;
