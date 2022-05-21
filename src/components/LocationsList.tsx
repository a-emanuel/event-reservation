import React, {useState} from "react";
import Event from "../model/Event";
import {Button, Card, Stack, Typography} from "@mui/material";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {toast, ToastContainer} from "react-toastify";

interface Props {
    events: Event[]
}

interface PopupEntryProps {
    onSelect: (arg: string) => void
}

function PopupEntry({ onSelect }: PopupEntryProps) {
    const [date, setDate] = useState<string | undefined>(undefined);

    return (
        <Stack
            spacing={1}
            direction="column"
            justifyContent="space-between"
            sx={{
                padding: 2,
            }}
        >
            <Stack
                spacing={1}
                direction="row"
                justifyContent="space-between"
                sx={{bgcolor: 'background.default'}}
            >
                <Typography>Selecteaza data:</Typography>
                <input
                    type={"date"}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}/>
            </Stack>
            <Button
                disabled={date === undefined}
                onClick={() => date !== undefined && onSelect(date)}
            >Rezerva</Button>
        </Stack>
    );
}

function LocationsList({ events }: Props) {

    const createReservation =  (date: String, eventId: string) => {
        const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
        toast.promise(
            resolveAfter3Sec,
            {
                pending: 'Making your reservation...',
                success: 'The owner will be contacted soon',
                error: 'Failed to make a reservation'
            }
        );
    }

    return (
        <Stack
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            sx={{
                paddingBottom: "100px"
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
            {
                events.map((ev, index) => {
                    return (
                        <Popup
                            contentStyle={{
                                width: 300
                            }}
                            trigger={
                                <Card
                                    sx={{
                                        width: 550,
                                        display: 'flex',
                                        cursor: "pointer"
                                    }}>
                                    <Stack
                                        spacing={1}
                                        direction="column"
                                        justifyContent="space-between"
                                        sx={{bgcolor: 'background.default'}}
                                    >
                                        <img
                                            src={ev.imageUrl}
                                            alt={"img"}
                                            style={{
                                                maxWidth: "100%"
                                            }}
                                        />

                                        <Stack
                                            direction="column"
                                            justifyContent="space-between"
                                            sx={{
                                                padding: 2
                                            }}
                                        >
                                            <Typography fontWeight={700} fontSize={16}>{ev.name}</Typography>
                                            <Typography fontWeight={500} fontSize={14}>{ev.description}</Typography>
                                        </Stack>
                                    </Stack>
                                </Card>
                        }>
                            <PopupEntry onSelect={(date) => createReservation(date, "1")} />
                        </Popup>

                    )
                })
            }

        </Stack>
    )
}

export default LocationsList;