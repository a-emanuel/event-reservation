import React, { useEffect, useState } from "react";
import Event from "../model/Event";
import AddLocationForm from "../components/AddLocationForm";
import LocationsList from "../components/LocationsList";
import AppNavbar from "../components/Navbar";


const styles = {
    page: {
    },
    content: {
        paddingTop: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    listContainer: {
        marginLeft: 180,
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
                    <AddLocationForm/>
                    <div style={styles.listContainer} className={"noScrollbar"}>
                        <LocationsList events={locations} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsPage;