import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

import Axios from 'axios';


const RegisterComponent = () => {
    const [usernameReg, setuserNameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");



    const register = () => {
        Axios.post("http://localhost:3001/register", {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response)
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
            <h1>Register</h1>
            <Form style={{ width: "30rem" }}>
                <FormGroup floating>
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
                <FormGroup floating>
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
                <FormGroup floating>
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
                        onClick={register}
                    >
                        Click Me
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default RegisterComponent