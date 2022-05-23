import React, {useState} from "react";
import {Stack, Card, Typography, Button, Input} from "@mui/material";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function AddLocationForm() {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const addLocation = () => {
        const url = 'https://us-central1-meetplace-pragmatic.cloudfunctions.net/location/add'
        fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({'name': title, 'description': text, 'imageUrl': imgUrl})
        })
        const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
        toast.promise(
            resolveAfter3Sec,
            {
                pending: 'Adding location',
                success: 'Location added 👌',
                error: 'Failed to add location 🤯'
            }
        );
    }

    return(
        <Card
            sx={{
                width: 550,
                height: 500,
                display: 'flex',
                padding: 4,
            }}
        >
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <Stack
                spacing={3}
                direction="column"
                alignItems="center"
                sx={{
                    width: "100%",
                }}
            >
                <Typography fontWeight={700} fontSize={18}>{"Add your event location"}</Typography>
                <Input
                    sx={{
                        width: "100%"
                    }}
                    placeholder={"Title"}
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}/>
                <textarea //un imput pe mai multe randuri la description...
                    value={text}
                    placeholder={"Description . . ."}
                    onChange={(e) => setText(e.target.value)}
                    style={{
                       resize: "none", //sa nu ii putem schimba marimea textului
                       width: "100%",  //width: "100%" si height: "100%" ca sa ia cat spatiu a ramas
                       height: "100%",
                    }}
                />
                <Input
                    sx={{
                        width: "100%"
                    }}
                    placeholder={"Image URL"}
                    value={imgUrl}
                    onChange={(ev) => setImgUrl(ev.target.value)}/>
                <Button
                    disabled={text === "" || title === "" || imgUrl === ""}
                    variant="contained"
                    onClick={addLocation}
                >Add event location</Button>
            </Stack>
        </Card>
    )
}

export default AddLocationForm;