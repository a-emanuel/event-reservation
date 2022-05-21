import React, {useCallback, useState} from "react";
import {Box, Button, Card, Input, Stack, Typography} from "@mui/material";

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginButtonPressed = useCallback(async () => {
        try {
            window.location.href = "/events"
        } catch (e) {
            alert("Login failed");
        }
    }, [email, password])

    const onRegisterPress = () => window.location.href = "/register"

    return (
        <div style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Card sx={{
                minWidth: 650,
                minHeight: 350,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Box
                    component="span"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Stack
                        spacing={3}
                        direction="column"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Typography fontWeight={700} fontSize={22}>Log in you account</Typography>
                        <Input sx={{width: 300}} placeholder={"Email"} value={email} onChange={(ev) => setEmail(ev.target.value)}/>
                        <Input sx={{width: 300}} placeholder={"Password"} type={"password"} value={password} onChange={(ev) => setPassword(ev.target.value)}/>
                        <Stack
                            spacing={1}
                            direction="column"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Button
                                variant="contained"
                                onClick={onLoginButtonPressed}
                            >
                                Sign in
                            </Button>
                            <Button
                                variant="text"
                                onClick={onRegisterPress}
                            >
                                Register
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Card>
        </div>
    );
}

export default LoginPage;