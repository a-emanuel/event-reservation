import React, { useEffect, useState } from "react";
import Event from "../model/Event";
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import AddLocationForm from "../components/AddLocationForm";
import LocationsList from "../components/LocationsList";
import AppNavbar from "../components/Navbar";

const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 20); //pentru a arata data curenta
const startDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 6);  //minim
const endDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 28);   //si maxim pentru a putea selecta data doar din range-ul dat de mine

const styles = {
    page: {
    },
    content: {
        paddingTop: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    listContainer: {
        marginLeft: 80,
        height: "90vh",
        overflow: "scroll"
    },
    navbar: {

    }
}



function EventsPage() {
    const url = 'https://us-central1-meetplace-pragmatic.cloudfunctions.net/location/get';
    const [locations, setLocations] = useState([]);
    
    useEffect(() => {
        const fetchLocations = () => {
          fetch(url, {
            mode: 'cors'
          })
            .then(r => r.json())
            .then(r => {
              setLocations(r);
            }).catch((err) => {
              console.log(err);
            });
        };
        fetchLocations();
      }, []);

    return (
        <div style={styles.page}>
            <div style={{ position: "fixed", width: "100vw" }}>
                <AppNavbar />
            </div>
            <div style={{}}>
                <div style={styles.content}>
                    <CalendarComponent value={dateValue}
                        min={startDate}
                        max={endDate}
                        isMultiSelection={true}
                        start="Decade"></CalendarComponent> 
                    <div style={styles.listContainer} className={"noScrollbar"}>
                        <LocationsList events={locations} />
                    </div>
                </div>
            </div>
        </div>
    )
}
// am folosit isMultiSelection la linia 92 pentru a putea selecta mai multe date din calendar
// start="Decade" ne da posibilitatea sa alegem anul, luna si zilele pe care le dormim
export default EventsPage;