import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import Axios from 'axios';


const Login = () => {
    const [userName, setuserNameReg] = useState("");
    const [password, setPasswordReg] = useState("");
    const [loginStatus, setLoginStatus] = useState("");


    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: userName,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data.username)
            }
        })
    }
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "3rem"
            }}
        >
            <h1>Login</h1>
            <Form style={{ width: "30rem" }}>
                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="your email address"
                        type="email"
                        onChange={(e) => {
                            setuserNameReg(e.target.value)
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                        onChange={(e) => {
                            setPasswordReg(e.target.value)
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                        onChange={(e) => {
                            setPasswordReg(e.target.value)
                        }}
                    />
                </FormGroup>

                <div>
                    <Button
                        color="primary"
                        onClick={login}
                    >
                        Click Me
                    </Button>
                </div>
            </Form>
            <h1>{loginStatus}</h1>
        </div>
    )
}

export default Login