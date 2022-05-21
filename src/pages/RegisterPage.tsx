import React, {useCallback, useState} from "react";
import {Box, Button, Card, Input, Stack, Typography} from "@mui/material";

function RegisterPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const onLoginButtonPressed = useCallback(async () => {
        try {
        } catch (e) {
            alert("Login failed");
        }
    }, [email, password])

    const onLoginPress = () => window.location.href = "/login"

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
                minHeight: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
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
                        sx={{bgcolor: 'background.default'}}
                    >
                        <Typography fontWeight={700} fontSize={22}>Register now!</Typography>
                        <Input sx={{width: 300}} placeholder={"Email"} value={email} onChange={(ev) => setEmail(ev.target.value)}/>
                        <Input sx={{width: 300}} placeholder={"Password"} type={"password"} value={password} onChange={(ev) => setPassword(ev.target.value)}/>
                        <Input sx={{width: 300}} placeholder={"Phone number"} type={"text"} value={phone} onChange={(ev) => setPhone(ev.target.value)}/>
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
                                Register
                            </Button>
                            <Button
                                variant="text"
                                onClick={onLoginPress}
                            >
                                Back to login
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Card>
        </div>
    );
}

export default RegisterPage;