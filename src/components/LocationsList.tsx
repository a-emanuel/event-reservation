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

function PopupEntry({ onSelect }: PopupEntryProps) { //PopupEntry primeste o functie ca parametrude onSelect ce se apeleaza cand dam click pe buton(e data din exteriorul PopupEntry-ului jos la linia 124)
    const [date, setDate] = useState<string | undefined>(undefined); //avem o data si o functie care seteaza data. Acea functie este undefined prima data

    return (
        <Stack  
            spacing={1}
            direction="column"  //avem elementele in coloana
            justifyContent="space-between"  
            sx={{
                padding: 2,
            }}
        >
            <Stack
                spacing={1}
                direction="row"   //stack-ul asta pune elementele in rand
                justifyContent="space-between"
                sx={{bgcolor: 'background.default'}}
            >
                <Typography>Selecteaza data:</Typography>
                <input
                    type={"date"}
                    value={date} //date se apeleaza cand se schimba aceasta variabila din imput(din calendar)
                    onChange={(e) => setDate(e.target.value)}/> 
            </Stack>
            <Button
                disabled={date === undefined} //butonul este disable cand data nu este selectata
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
            direction="column"   //punem locatiile de pa pagina in coloana
            alignItems="center"  //spatiu intre ele
            justifyContent="space-between"
            sx={{
                paddingBottom: "100px"
            }}
        >
            <ToastContainer    //e fix la fel ca celalalt Toast-er dar e facut pentru pop_up-il cu data
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
                events.map((ev, index) => {    //am facut un array de evenimente
                    return (
                        <Popup    //am imbracat tot continutul in Popup(detecteaza cand dau click pe eveniment)
                            contentStyle={{
                                width: 300
                            }}
                            trigger={   //declar care este continutul ce declanseaza Popup-ul
                                <Card
                                    sx={{   //aici e o carte individuala(titlu, descriere, imagine)
                                        width: 550,
                                        display: 'flex',  //le aranjeaza frumos
                                        cursor: "pointer" //sa se transforme cursorul in pointer
                                    }}>
                                    <Stack    //sa le punem una sub alta
                                        spacing={1}
                                        direction="column"
                                        justifyContent="space-between"
                                        sx={{bgcolor: 'background.default'}}
                                    >
                                        <img    //img ce ia din obiectul de Event.tsx imaginea
                                            src={ev.imageUrl}
                                            alt={"img"}
                                            style={{
                                                maxWidth: "100%"
                                            }}
                                        />

                                        <Stack   //stack-ul asta este pentru datele de sub imagine(titlu, descriere)
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
                               //continutul din elementul de Popup este componeta de PopupEntry de mai sus(cea in care putem selecta data)
                               //componenta asta se gaseste mai sus linia 16
                               //id-ul evenimentelor e 1 acum(el va veni din backend). L-am pus asa momentan
                               //createReservation ne deschide toast-ul cu The owner will be contacted soon(linia 50)
                    )
                })
            }

        </Stack>
    )
}

export default LocationsList;