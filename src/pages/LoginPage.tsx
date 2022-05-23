import React, {useCallback, useState} from "react";
import {Box, Button, Card, Input, Stack, Typography} from "@mui/material";

function LoginPage() {
      //am facut doua state-uri
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginButtonPressed = useCallback(async () => {
        try {
            // cerere la backend
            const url = 'blablabla'
            const res = await fetch(`${url}`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({'email': email, 'password': password})
            })

            const data = await res.json()
            
            if (data.type == 'o') {
                // daca e success si contul este cel al directorilor salilor de inchiriat, sa ne redirectioneze catre /events
                window.location.href = "/events"
            }

            if (data.type == 'u') {
                // daca e cont normal, sa ne redirectioneze spre /eventsNormalUser
                window.location.href = "/eventsNormalUser"
            }

            if (data.status == 404) {
                throw new Error('user not found');
            }    
        } catch (e) {
            alert("Login failed");
            // alert(e);
        }
    }, [email, password]) //functia onLoginButtonPressed depinde de email si parola. Se schimba mereu cand se schimba si ele

    const onRegisterPress = () => window.location.href = "/register" //nu mai asteapta nimic cand apasam pe butonul de register, ne duce direct la acea pagina

    return (
        <div style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
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
                        <Typography fontWeight={700} fontSize={22}>Log into your account</Typography>
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