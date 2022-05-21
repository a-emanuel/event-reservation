import React, {useState} from "react";
import {Stack, Card, Typography, Button, Input} from "@mui/material";
import ReactQuill, {Quill} from 'react-quill'; // ES6
import "./quill.css"
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function AddLocationForm() {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');

    const addLocation = () => {
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
                <textarea
                    value={text}
                    placeholder={"Description . . ."}
                    onChange={(e) => setText(e.target.value)}
                    style={{
                       resize: "none",
                       width: "100%",
                       height: "100%",
                    }}
                />
                <Button
                    disabled={text === "" || title === ""}
                    variant="contained"
                    onClick={addLocation}
                >Add event location!</Button>
            </Stack>
        </Card>
    )
}

export default AddLocationForm;