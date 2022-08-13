import VisitCardiologist from "../classes/visits/visit_cardiologist.js";
import VisitTherapist from "../classes/visits/visit_therapis.js";
import VisitDentist from "../classes/visits/visit_dentist.js";

export default function createCard(el){
    
    if(el.doctor.toLowerCase() === 'Cardiologist'.toLowerCase())
    {  const {id, title, description, doctor, name, urgency,pressure, bodyMassIndex, cardioIllness, age,} = el;
        new VisitCardiologist(id, title, description, doctor, name, urgency, pressure, bodyMassIndex, cardioIllness, age,).buildingCard()
    }
    if(el.doctor.toLowerCase() === 'Therapist'.toLowerCase())
    {  const {id, title, description, doctor, name, urgency, age,} = el;
        new VisitTherapist(id, title, description, doctor, name, urgency, age,).buildingCard()
    }
    if(el.doctor.toLowerCase() === 'Dentist'.toLowerCase())
    {   const {id, title, description, doctor, name, urgency, dateLastVisit,} = el;
        new VisitDentist(id, title, description, doctor, name, urgency, dateLastVisit ).buildingCard()
    }}



// array.forEach((el)=> createCard(el))