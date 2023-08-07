import React, { useState } from "react";
import './Css/Login.css'
import { TextField, Card, Button, Typography, CardContent } from "@mui/material";


const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Name is ',name)
        setEmail('');
        setPassword('')
        setName('');
    };
    return (
        <div>
            <div className="login" >
                <Card
                    className="card">
                    <CardContent  className="cardContent">
                        <Typography variant="h5" component="h6" className='heading'>
                            Create Your Account
                        </Typography>
                        <form onSubmit={handleSubmit}>
                        <div className="form-group">
                                <TextField
                                    label="Name"
                                    variant="standard"
                                    value={name}
                                    placeholder="Enter Your Name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
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
                            <Button type="submit"  className="button"  variant="contained" sx={{color:'white',backgroundColor:'black'}} >
                               Signup
                            </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Signup;
