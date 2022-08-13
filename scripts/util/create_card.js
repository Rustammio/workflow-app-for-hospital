import VisitCardiologist from "../classes/visits/visit_cardiologist.js";
import VisitTherapist from "../classes/visits/visit_therapis.js";
import VisitDentist from "../classes/visits/visit_dentist.js";

export default function createCard(el){
    if(el.doctor === 'Cardiologist')
    {  const {id, title, description, doctor, nameClient, urgency,pressure, bodyMassIndex, cardioIllness, age,} = el;
        new VisitCardiologist(id, title, description, doctor, nameClient, urgency, pressure, bodyMassIndex, cardioIllness, age,).buildingCard()
    }
    if(el.doctor === 'Therapist')
    {  const {id, title, description, doctor, nameClient, urgency, age,} = el;
        new VisitTherapist(id, title, description, doctor, nameClient, urgency, age,).buildingCard()
    }
    if(el.doctor === 'Dentist')
    {   const {id, title, description, doctor, nameClient, urgency, dateLastVisit,} = el;
        new VisitDentist(id, title, description, doctor, nameClient, urgency, dateLastVisit ).buildingCard()
    }}



// array.forEach((el)=> createCard(el))