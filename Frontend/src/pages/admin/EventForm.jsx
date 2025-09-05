// // // import React, { useState } from "react";

// // // export default function EventForm({ onClose, onSave, alumniList }) {
// // //   const [title, setTitle] = useState("");
// // //   const [date, setDate] = useState("");
// // //   const [time, setTime] = useState("");
// // //   const [notify, setNotify] = useState(true);
// // //   const [selectedAlumni, setSelectedAlumni] = useState([]);

// // //   const handleToggleAlumnus = (userId) => {
// // //     setSelectedAlumni(prev => prev.includes(userId) ? prev.filter(x=>x!==userId) : [...prev,userId]);
// // //   };

// // //   const handleSubmit = () => {
// // //     if(!title || !date || !time) { alert("Please fill title, date, time"); return; }
// // //     const newEvent = {
// // //       id: Date.now().toString(36),
// // //       title, date, time, notify,
// // //       targetAlumni: selectedAlumni,
// // //       registered: []
// // //     };
// // //     onSave(newEvent);
// // //   };

// // //   return (
// // //     <div style={overlayStyle}>
// // //       <div style={modalStyle}>
// // //         <h5>Create New Event</h5>
// // //         <div className="mb-2">
// // //           <label>Title</label>
// // //           <input className="form-control" value={title} onChange={e=>setTitle(e.target.value)} />
// // //         </div>
// // //         <div className="mb-2 d-flex gap-2">
// // //           <div>
// // //             <label>Date</label>
// // //             <input type="date" className="form-control" value={date} onChange={e=>setDate(e.target.value)} />
// // //           </div>
// // //           <div>
// // //             <label>Time</label>
// // //             <input type="time" className="form-control" value={time} onChange={e=>setTime(e.target.value)} />
// // //           </div>
// // //         </div>
// // //         <div className="mb-2">
// // //           <label>
// // //             <input type="checkbox" checked={notify} onChange={e=>setNotify(e.target.checked)} /> Notify Students
// // //           </label>
// // //         </div>
// // //         <div className="mb-2" style={{maxHeight:200,overflowY:'auto',border:'1px solid #ccc',padding:6}}>
// // //           <strong>Select Target Alumni:</strong>
// // //           {alumniList.map(alum=>(
// // //             <div key={alum.userId}>
// // //               <label>
// // //                 <input type="checkbox" checked={selectedAlumni.includes(alum.userId)} onChange={()=>handleToggleAlumnus(alum.userId)} /> {alum.name} ({alum.branch}, {alum.graduationYear})
// // //               </label>
// // //             </div>
// // //           ))}
// // //         </div>
// // //         <div className="mt-3">
// // //           <button className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
// // //           <button className="btn btn-primary" onClick={handleSubmit}>Create Event</button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // const overlayStyle = {
// // //   position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2000
// // // };
// // // const modalStyle = {
// // //   width: 600, maxWidth: "95%", maxHeight: "80vh", overflowY: "auto", background: "white", padding: 18, borderRadius: 10, boxShadow: "0 8px 30px rgba(0,0,0,0.25)"
// // // };
// // import React, { useState, useMemo } from "react";

// // export default function EventForm({ onClose, onSave, alumniList }) {
// //   const [title, setTitle] = useState("");
// //   const [date, setDate] = useState("");
// //   const [time, setTime] = useState("");
// //   const [notify, setNotify] = useState(true);
// //   const [selectedAlumni, setSelectedAlumni] = useState([]);
// //   const [search, setSearch] = useState("");
// //   const [sortKey, setSortKey] = useState("name"); // sort by name/company/branch

// //   const filteredAlumni = useMemo(() => {
// //     return alumniList
// //       .filter(a =>
// //         a.name.toLowerCase().includes(search.toLowerCase()) ||
// //         a.company.toLowerCase().includes(search.toLowerCase()) ||
// //         a.branch.toLowerCase().includes(search.toLowerCase()) ||
// //         a.email.toLowerCase().includes(search.toLowerCase()) ||
// //         a.phone.includes(search)
// //       )
// //       .sort((a,b)=>{
// //         if(sortKey==="name") return a.name.localeCompare(b.name);
// //         if(sortKey==="company") return a.company.localeCompare(b.company);
// //         if(sortKey==="branch") return a.branch.localeCompare(b.branch);
// //         return 0;
// //       });
// //   }, [alumniList, search, sortKey]);

// //   const handleToggleAlumnus = (userId) => {
// //     setSelectedAlumni(prev =>
// //       prev.includes(userId) ? prev.filter(x => x !== userId) : [...prev, userId]
// //     );
// //   };

// //   const handleSubmit = () => {
// //     if(!title || !date || !time) { alert("Fill title, date, time"); return; }
// //     const newEvent = {
// //       id: Date.now().toString(36),
// //       title, date, time, notify,
// //       targetAlumni: selectedAlumni,
// //       registered: [] // initially empty
// //     };
// //     onSave(newEvent);
// //   };

// //   return (
// //     <div style={overlayStyle}>
// //       <div style={modalStyle}>
// //         <h5>Create New Event</h5>

// //         <div className="mb-2">
// //           <label>Title</label>
// //           <input className="form-control" value={title} onChange={e=>setTitle(e.target.value)} />
// //         </div>

// //         <div className="d-flex gap-2 mb-2">
// //           <div>
// //             <label>Date</label>
// //             <input type="date" className="form-control" value={date} onChange={e=>setDate(e.target.value)} />
// //           </div>
// //           <div>
// //             <label>Time</label>
// //             <input type="time" className="form-control" value={time} onChange={e=>setTime(e.target.value)} />
// //           </div>
// //         </div>

// //         <div className="mb-2">
// //           <label>
// //             <input type="checkbox" checked={notify} onChange={e=>setNotify(e.target.checked)} /> Notify Students / Alumni
// //           </label>
// //         </div>

// //         <div className="mb-2">
// //           <input className="form-control mb-1" placeholder="Search alumni..." value={search} onChange={e=>setSearch(e.target.value)} />
// //           <div className="d-flex gap-2 mb-1">
// //             <button className="btn btn-sm btn-outline-secondary" onClick={()=>setSortKey("name")}>Sort by Name</button>
// //             <button className="btn btn-sm btn-outline-secondary" onClick={()=>setSortKey("company")}>Sort by Company</button>
// //             <button className="btn btn-sm btn-outline-secondary" onClick={()=>setSortKey("branch")}>Sort by Branch</button>
// //           </div>
// //         </div>

// //         <div style={{maxHeight:300, overflowY:'auto', border:'1px solid #ccc', padding:6}}>
// //           {filteredAlumni.map(a => (
// //             <div key={a.userId} style={{display:'flex', alignItems:'center', gap:10, marginBottom:4, padding:4, borderBottom:'1px solid #eee'}}>
// //               <input type="checkbox" checked={selectedAlumni.includes(a.userId)} onChange={()=>handleToggleAlumnus(a.userId)} />
// //               <div style={{width:40,height:40}}>
// //                 {a.profileImage ? <img src={a.profileImage} alt="avatar" style={{width:'100%',height:'100%',borderRadius:6}} /> : <div style={{width:40,height:40,background:'#ccc'}} />}
// //               </div>
// //               <div style={{flex:1}}>
// //                 <div><strong>{a.name}</strong> ({a.company})</div>
// //                 <div style={{fontSize:12}}>
// //                   Phone: {mask(a.phone)}, Email: {maskEmail(a.email)}, Branch: {a.branch}, Year: {a.graduationYear}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="mt-3">
// //           <button className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
// //           <button className="btn btn-primary" onClick={handleSubmit}>Create Event</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // Mask functions for display
// // function mask(str){
// //   if(!str) return "";
// //   return str[0] + "*".repeat(str.length-2) + str.slice(-1);
// // }
// // function maskEmail(email){
// //   const [user, domain] = email.split("@");
// //   return user[0]+"*".repeat(user.length-2)+user.slice(-1)+"@"+domain;
// // }

// // const overlayStyle = {
// //   position: "fixed", inset:0, background:"rgba(0,0,0,0.45)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:2000
// // };
// // const modalStyle = {
// //   width:700, maxWidth:"95%", maxHeight:"80vh", overflowY:"auto", background:"white", padding:18, borderRadius:10, boxShadow:"0 8px 30px rgba(0,0,0,0.25)"
// // };


// import React, { useState } from "react";
// import AlumniDetailsModal from "./AlumniDetailsModal";

// export default function EventForm({ onClose, onSave, alumniList=[] }) {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [selectedAlumni, setSelectedAlumni] = useState([]);
//   const [viewAlumni, setViewAlumni] = useState(null);
//   const [notifyStudents, setNotifyStudents] = useState(false);

//   function handleSave() {
//     if(!title || !date) return alert("Fill title and date");
//     onSave({id:Date.now(), title, date, selectedAlumni, notifyStudents});
//   }

//   return (
//     <div style={{position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", display:"flex", justifyContent:"center", alignItems:"center", zIndex:2000}}>
//       <div style={{width:600, background:"white", padding:20, borderRadius:8, maxHeight:"90vh", overflowY:"auto"}}>
//         <h5>Add New Event</h5>
//         <div className="mb-2">
//           <label>Title</label>
//           <input className="form-control" value={title} onChange={e=>setTitle(e.target.value)} />
//         </div>
//         <div className="mb-2">
//           <label>Date & Time</label>
//           <input type="datetime-local" className="form-control" value={date} onChange={e=>setDate(e.target.value)} />
//         </div>

//         <div className="mb-2">
//           <label>Select Alumni</label>
//           <div style={{maxHeight:200, overflowY:"auto", border:"1px solid #ccc", padding:5}}>
//             {alumniList.map(a=>(
//               <div key={a.id} className="d-flex justify-content-between align-items-center mb-1">
//                 <div>
//                   <input type="checkbox" checked={selectedAlumni.includes(a.id)} 
//                     onChange={e=>{
//                       setSelectedAlumni(prev=>{
//                         if(e.target.checked) return [...prev,a.id];
//                         return prev.filter(x=>x!==a.id);
//                       });
//                     }} />{" "}
//                   {a.name} ({a.company})
//                 </div>
//                 <button className="btn btn-sm btn-link" onClick={()=>setViewAlumni(a)}>View Details</button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-2">
//           <label>
//             <input type="checkbox" checked={notifyStudents} onChange={e=>setNotifyStudents(e.target.checked)} /> Notify Students
//           </label>
//         </div>

//         <div className="d-flex justify-content-end mt-3">
//           <button className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
//           <button className="btn btn-primary" onClick={handleSave}>Save</button>
//         </div>

//         {viewAlumni && 
//           <AlumniDetailsModal 
//             alumni={viewAlumni} 
//             onClose={()=>setViewAlumni(null)}
//           />
//         }
//       </div>
//     </div>
//   );
// }











// import React, { useState, useMemo } from "react";
// import AlumniDetailsModal from "./AlumniDetailsModal";

// export default function EventForm({ onClose, onSave, alumniList=[] }) {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [duration, setDuration] = useState(1); // default 1 hour
//   const [selectedAlumni, setSelectedAlumni] = useState([]);
//   const [viewAlumni, setViewAlumni] = useState(null);
//   const [notifyStudents, setNotifyStudents] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortKey, setSortKey] = useState("name");

//   function handleSave() {
//     if(!title || !date) return alert("Fill title and date");
//     onSave({id:Date.now(), title, date, duration, selectedAlumni, notifyStudents});
//   }

//   const filteredAlumni = useMemo(() => {
//     let list = alumniList.filter(a =>
//       a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (a.company && a.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
//       (a.branch && a.branch.toLowerCase().includes(searchTerm.toLowerCase()))
//     );

//     list.sort((a,b) => {
//       if(sortKey === "name") return a.name.localeCompare(b.name);
//       if(sortKey === "company") return (a.company||"").localeCompare(b.company||"");
//       if(sortKey === "branch") return (a.branch||"").localeCompare(b.branch||"");
//       return 0;
//     });

//     return list;
//   }, [alumniList, searchTerm, sortKey]);

//   return (
//     <div style={{position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", display:"flex", justifyContent:"center", alignItems:"center", zIndex:2000}}>
//       <div style={{width:600, background:"white", padding:20, borderRadius:8, maxHeight:"90vh", overflowY:"auto"}}>
//         <h5>Add New Event</h5>

//         <div className="mb-2">
//           <label>Title</label>
//           <input className="form-control" value={title} onChange={e=>setTitle(e.target.value)} />
//         </div>

//         <div className="mb-2">
//           <label>Date & Time</label>
//           <input type="datetime-local" className="form-control" value={date} onChange={e=>setDate(e.target.value)} />
//         </div>

//         <div className="mb-2">
//           <label>Duration (hours)</label>
//           <input type="number" className="form-control" min={1} value={duration} onChange={e=>setDuration(e.target.value)} />
//         </div>

//         <div className="mb-2">
//           <label>Search Alumni</label>
//           <input className="form-control" placeholder="Search by name, company, branch..." 
//             value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} />
//         </div>

//         <div className="mb-2">
//           <label>Sort By</label>
//           <select className="form-select" value={sortKey} onChange={e=>setSortKey(e.target.value)}>
//             <option value="name">Name</option>
//             <option value="company">Company</option>
//             <option value="branch">Branch</option>
//           </select>
//         </div>

//         <div className="mb-2">
//           <label>Select Alumni</label>
//           <div style={{maxHeight:200, overflowY:"auto", border:"1px solid #ccc", padding:5}}>
//             {filteredAlumni.map(a=>(
//               <div key={a.id} className="d-flex justify-content-between align-items-center mb-1">
//                 <div>
//                   <input type="checkbox" checked={selectedAlumni.includes(a.id)} 
//                     onChange={e=>{
//                       setSelectedAlumni(prev=>{
//                         if(e.target.checked) return [...prev,a.id];
//                         return prev.filter(x=>x!==a.id);
//                       });
//                     }} />{" "}
//                   {a.name} ({a.company})
//                 </div>
//                 <button className="btn btn-sm btn-link" onClick={()=>setViewAlumni(a)}>View Details</button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-2">
//           <label>
//             <input type="checkbox" checked={notifyStudents} onChange={e=>setNotifyStudents(e.target.checked)} /> Notify Students
//           </label>
//         </div>

//         <div className="d-flex justify-content-end mt-3">
//           <button className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
//           <button className="btn btn-primary" onClick={handleSave}>Save</button>
//         </div>

//         {viewAlumni && 
//           <AlumniDetailsModal 
//             alumni={viewAlumni} 
//             onClose={()=>setViewAlumni(null)}
//           />
//         }
//       </div>
//     </div>
//   );
// }



import React, { useState, useMemo, useEffect } from "react";
import AlumniDetailsModal from "./AlumniDetailsModal";

export default function EventForm({ onClose, onSave, alumniList=[] }) {
  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [duration, setDuration] = useState(1);
  const [selectedAlumni, setSelectedAlumni] = useState([]);
  const [viewAlumni, setViewAlumni] = useState(null);
  const [notifyStudents, setNotifyStudents] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("name");

  useEffect(()=>{
    // Reset selected alumni if alumniList changes
    setSelectedAlumni([]);
  }, [alumniList]);

  const filteredAlumni = useMemo(() => {
    let list = alumniList.filter(a =>
      a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (a.company||"").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (a.branch||"").toLowerCase().includes(searchTerm.toLowerCase())
    );

    list.sort((a,b) => {
      if(sortKey === "name") return a.name.localeCompare(b.name);
      if(sortKey === "company") return (a.company||"").localeCompare(b.company||"");
      if(sortKey === "branch") return (a.branch||"").localeCompare(b.branch||"");
      return 0;
    });

    return list;
  }, [alumniList, searchTerm, sortKey]);

  const allSelected = filteredAlumni.length > 0 && filteredAlumni.every(a=>selectedAlumni.includes(a.id));

  function toggleSelectAll() {
    if(allSelected) {
      setSelectedAlumni(prev => prev.filter(id => !filteredAlumni.map(a=>a.id).includes(id)));
    } else {
      setSelectedAlumni(prev => [...new Set([...prev, ...filteredAlumni.map(a=>a.id)])]);
    }
  }

  function handleSave() {
    if(!title || !dateTime) return alert("Fill title and date/time");
    const event = {
      id: Date.now().toString(),
      title,
      date: dateTime.split("T")[0],
      time: dateTime.split("T")[1] || "00:00",
      duration,
      notify: notifyStudents,
      targetAlumni: selectedAlumni,
      registered: [] // initially no one registered
    };
    onSave(event);
  }

  return (
    <div style={{position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", display:"flex", justifyContent:"center", alignItems:"center", zIndex:2000}}>
      <div style={{width:650, background:"white", padding:20, borderRadius:8, maxHeight:"90vh", overflowY:"auto"}}>
        <h5>Add New Event</h5>

        <div className="mb-2">
          <label>Title</label>
          <input className="form-control" value={title} onChange={e=>setTitle(e.target.value)} />
        </div>

        <div className="mb-2">
          <label>Date & Time</label>
          <input type="datetime-local" className="form-control" value={dateTime} onChange={e=>setDateTime(e.target.value)} />
        </div>

        <div className="mb-2">
          <label>Duration (hours)</label>
          <input type="number" min={1} className="form-control" value={duration} onChange={e=>setDuration(e.target.value)} />
        </div>

        <div className="mb-2">
          <label>Search Alumni</label>
          <input className="form-control" placeholder="Search name, company, branch..." value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} />
        </div>

        <div className="mb-2">
          <label>Sort By</label>
          <select className="form-select" value={sortKey} onChange={e=>setSortKey(e.target.value)}>
            <option value="name">Name</option>
            <option value="company">Company</option>
            <option value="branch">Branch</option>
          </select>
        </div>

        <div className="mb-2">
          <label>Select Alumni</label>
          <div className="mb-1">
            <input type="checkbox" checked={allSelected} onChange={toggleSelectAll} /> Select All
          </div>
          <div style={{maxHeight:200, overflowY:"auto", border:"1px solid #ccc", padding:5}}>
            {filteredAlumni.map(a=>(
              <div key={a.id} className="d-flex justify-content-between align-items-center mb-1">
                <div>
                  <input type="checkbox" checked={selectedAlumni.includes(a.id)}
                    onChange={e=>{
                      setSelectedAlumni(prev=>{
                        if(e.target.checked) return [...prev,a.id];
                        return prev.filter(x=>x!==a.id);
                      });
                    }} />{" "}
                  {a.name} ({a.company})
                </div>
                <button className="btn btn-sm btn-link" onClick={()=>setViewAlumni(a)}>View Details</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-2">
          <label>
            <input type="checkbox" checked={notifyStudents} onChange={e=>setNotifyStudents(e.target.checked)} /> Notify Students
          </label>
        </div>

        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
        </div>

        {viewAlumni && 
          <AlumniDetailsModal alumni={viewAlumni} onClose={()=>setViewAlumni(null)} />
        }
      </div>
    </div>
  );
}
