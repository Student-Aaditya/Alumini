// import React, { useState, useEffect } from "react";
// import EventForm from "./EventForm";
// import EventDetailsModal from "./EventDetailsModal";
// import { getAllAlumni } from "../../utils/storage";

// export default function Event_Management() {
//   const [events, setEvents] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [showDetails, setShowDetails] = useState(null); // event selected for details
//   const [alumniList, setAlumniList] = useState([]);

//   useEffect(() => {
//     // Seed alumni
//     setAlumniList(getAllAlumni());

//     // Seed some dummy events
//     setEvents([
//       {
//         id: "evt1",
//         title: "AI & ML Workshop",
//         date: "2025-09-15",
//         time: "15:00",
//         notify: true,
//         targetAlumni: ["aaditya001","harshita022"],
//         registered: ["aaditya001"],
//       },
//       {
//         id: "evt2",
//         title: "Tech Meetup 2025",
//         date: "2025-08-10",
//         time: "18:00",
//         notify: false,
//         targetAlumni: ["namrata0109","vikas017"],
//         registered: ["vikas017", "namrata0109"],
//       }
//     ]);
//   }, []);

//   const addEvent = (newEvent) => {
//     setEvents(prev => [newEvent, ...prev]);
//   };

//   return (
//     <div style={{padding:20}}>
//       <h3>Event Management</h3>
//       <button className="btn btn-primary mb-3" onClick={()=>setShowForm(true)}>Create New Event</button>

//       <div>
//         <h5>Live / Upcoming Events</h5>
//         {events.length === 0 ? <p>No events found.</p> : (
//           <div className="list-group">
//             {events.map(evt => (
//               <div key={evt.id} className="list-group-item d-flex justify-content-between align-items-center">
//                 <div>
//                   <strong>{evt.title}</strong> | {evt.date} {evt.time} | Registered: {evt.registered.length}
//                 </div>
//                 <div>
//                   <button className="btn btn-sm btn-info me-2" onClick={()=>setShowDetails(evt)}>View Details</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {showForm && <EventForm 
//         alumniList={alumniList} 
//         onClose={()=>setShowForm(false)} 
//         onSave={(evt)=>{ addEvent(evt); setShowForm(false); }}
//       />}

//       {showDetails && <EventDetailsModal 
//         event={showDetails} 
//         alumniList={alumniList} 
//         onClose={()=>setShowDetails(null)} 
//       />}
//     </div>
//   );
// }






import React, { useState, useEffect } from "react";
import EventForm from "./EventForm";
import EventDetailsModal from "./EventDetailsModal";
import { getAllAlumni } from "../../utils/storage";

export default function Event_Management() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(null);
  const [alumniList, setAlumniList] = useState([]);

  useEffect(() => {
    setAlumniList(getAllAlumni());

    // Some dummy events
    setEvents([
      {
        id: "evt1",
        title: "AI & ML Workshop",
        date: "2025-09-15",
        time: "15:00",
        duration: 2,
        notify: true,
        targetAlumni: ["aaditya001","harshita022"],
        registered: ["aaditya001"],
      },
      {
        id: "evt2",
        title: "Tech Meetup 2025",
        date: "2025-08-10",
        time: "18:00",
        duration: 3,
        notify: false,
        targetAlumni: ["namrata0109","vikas017"],
        registered: ["vikas017", "namrata0109"],
      }
    ]);
  }, []);

  const addEvent = (newEvent) => {
    setEvents(prev => [newEvent, ...prev]);
  };

  return (
    <div style={{padding:20}}>
      <h2 className="fw-bold">Event Management</h2>
      <button className="btn btn-primary mb-3" onClick={()=>setShowForm(true)}>Create New Event</button>

      <div>
        <h5>Live / Upcoming Events</h5>
        {events.length === 0 ? <p>No events found.</p> : (
          <div className="list-group">
            {events.map(evt => {
              const targetNames = evt.targetAlumni.map(id=>{
                const alum = alumniList.find(a=>a.userId===id);
                return alum ? alum.name : id;
              });
              return (
                <div key={evt.id} className="list-group-item d-flex justify-content-between align-items-center flex-column flex-md-row">
                  <div>
                    <strong>{evt.title}</strong> | {evt.date} {evt.time} | Duration: {evt.duration}h | Registered: {evt.registered.length}
                    <br />
                    {/* Target Alumni: {targetNames.join(", ")} */}
                  </div>
                  <div className="mt-2 mt-md-0">
                    <button className="btn btn-sm btn-info me-2" onClick={()=>setShowDetails(evt)}>View Details</button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {showForm && <EventForm 
        alumniList={alumniList} 
        onClose={()=>setShowForm(false)} 
        onSave={(evt)=>{ addEvent(evt); setShowForm(false); }}
      />}

      {showDetails && <EventDetailsModal 
        event={showDetails} 
        alumniList={alumniList} 
        onClose={()=>setShowDetails(null)} 
      />}
    </div>
  );
}



// import React, { useState, useEffect } from "react";
// import { getAllAlumni } from "../utils/storage";
// import AlumniDetailsModal from "./AlumniDetailsModal";

// export default function EventManagement() {
//   const [events, setEvents] = useState([]);
//   const [allAlumni, setAllAlumni] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [selectedAlumni, setSelectedAlumni] = useState(null);

//   useEffect(() => {
//     const alumni = getAllAlumni();
//     setAllAlumni(alumni);
//   }, []);

//   function handleAddEvent(newEvent) {
//     setEvents(prev => [...prev, {...newEvent, registered: [] }]);
//     setShowForm(false);
//   }

//   return (
//     <div className="container mt-4">
//       <h3>Event Management</h3>
//       <button className="btn btn-primary mb-3" onClick={()=>setShowForm(true)}>Add Event</button>

//       {showForm && (
//         <EventForm
//           onClose={()=>setShowForm(false)}
//           onSave={handleAddEvent}
//           alumniList={allAlumni}
//         />
//       )}

//       <h5>Previous Events</h5>
//       <div>
//         {events.length===0 && <div className="text-muted">No events yet.</div>}
//         {events.map(ev=>(
//           <div key={ev.id} className="card mb-2 p-2">
//             <div><strong>Title:</strong> {ev.title}</div>
//             <div><strong>Date:</strong> {ev.date}</div>
//             <div><strong>Registered Alumni:</strong> {ev.registered?.length || 0}</div>
//           </div>
//         ))}
//       </div>

//       {selectedAlumni && 
//         <AlumniDetailsModal 
//           alumni={selectedAlumni} 
//           onClose={()=>setSelectedAlumni(null)}
//         />
//       }
//     </div>
//   );
// }

