import React from "react";
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
    const events: Event[] = [
        {
            name: "Sala evenimente",
            description: "Sala de evenimente medie ca dimensiune(100-250 de persoane), situata in centrul orasului Iasi, cu vedere catre parc. Pret locatie: 500 RON / noapte. ",
            imageUrl: "https://hotel.lacastel.ro/wp-content/uploads/2017/10/Castel-Ballroom-small.jpg"
        },
        {
            name: "Sala evenimente",
            description: "Sala de evenimente mare(300-450 de persoane), situata in hotelul Pleiada in apropierea Buciumului. Pret locatie: 400 RON / noapte. ",
            imageUrl: "https://valov.ro/wp-content/uploads/2021/12/Hotel-Pleiada-Restaurant-Nunta-Iasi-1024x656.webp"
        },
        {
            name: "Sala evenimente",
            description: "Sala de evenimente mare(250-380 de persoane), situata in Dobrovat. Pret locatie: 350 RON / noapte. ",
            imageUrl: "http://liria-events.ro/wp-content/uploads/2020/03/youngcreative-fotografie-nunta-iulia-lucian-liria-151-1000x667.jpg"
        },
        {
            name: "Sala evenimente",
            description: "Sala de evenimente mica(50-120 de persoane), situata la Hotel Pleiada. Pret locatie: 300 RON / noapte. ",
            imageUrl: "https://www.hotelpleiada.ro/wp-content/uploads/2021/03/evenimente-la-pleiada-boutique-hotel-sala-nunta-botez-majorat-evenimente-speciale-iasi-12.jpg"
        },
        {
            name: "Sala evenimente",
            description: "Sala de evenimente mare(300-350 de persoane), situata in Copou, cu vedere catre parc. Pret locatie: 300 RON / noapte. ",
            imageUrl: "http://www.locatii-evenimente.ro/img//restaurants/2015030334820-2381-Sala_nunti_Iasi_La_Castel_06.jpg"
        },
        {
            name: "Sala evenimente",
            description: "Sala de evenimente medie(150-300 de persoane), situata la periferia Iasului in Hotelul Capitol. Pret locatie: 400 RON / noapte. ",
            imageUrl: "https://www.capitol-hotel.ro/images/event-6.jpg"
        },
        {
            name: "Sala evenimente",
            description: "Sala de evenimente mica(30-90 de persoane), situata in Capatul Copoului la Castel. Pret locatie: 250 RON / noapte. ",
            imageUrl: "https://hotel.lacastel.ro/wp-content/uploads/2017/10/sala-regala-thumbnail.jpg"
        },
        {
            name: "Sala evenimente",
            description: "Sala de evenimente mare(400-580 de persoane), situata in la Aroneanu, cu vedere spre lac. Pret locatie: 550 RON / noapte. ",
            imageUrl: "https://www.eventist.ro/imagini/prestatori-servicii/galerie/mare/galerie_magnum-ballroom1422-20-22.jpg"
        },
        {
            name: "Sala evenimente",
            description: "Sala de evenimente mare(300-400 de persoane), situata in centrul orasului Iasi la Hotel Unirea, cu vedere catre bulevard. Pret locatie: 450 RON / noapte. ",
            imageUrl: "https://www.hotelunirea.ro/public/meeting_images/thumbs/version_1362x931x1/23f993450ed3fa9331c2d0f993a8d625.jpg"
        },
    ]

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
                        <LocationsList events={events} />
                    </div>
                </div>
            </div>
        </div>
    )
}
// am folosit isMultiSelection la linia 92 pentru a putea selecta mai multe date din calendar
// start="Decade" ne da posibilitatea sa alegem anul, luna si zilele pe care le dormim
export default EventsPage;