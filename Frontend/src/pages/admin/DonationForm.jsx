// import React, { useState } from "react";
// import { fileToHash } from "../../utils/hash";

// export default function DonationForm({ alumniList, onClose, onSave }) {
//   const [form, setForm] = useState({
//     userId: "",
//     name: "",
//     branch: "",
//     graduationYear: "",
//     email: "",
//     phone: "",
//     amount: "",
//     date: new Date().toISOString().slice(0,10),
//     transactionId: ""
//   });

//   async function handleSubmit() {
//     if (!form.userId || !form.amount) {
//       alert("Please fill UserID and Amount.");
//       return;
//     }

//     const selectedAlumni = alumniList.find(a=>a.userId===form.userId);
//     if (!selectedAlumni) {
//       alert("UserID not found in alumni list");
//       return;
//     }

//     const hashedTx = await fileToHash(form.transactionId || (Date.now().toString()));

//     const newDonation = {
//       id: Date.now().toString(36),
//       userId: selectedAlumni.userId,
//       name: selectedAlumni.name,
//       branch: selectedAlumni.branch,
//       graduationYear: selectedAlumni.graduationYear,
//       email: selectedAlumni.email,
//       phone: selectedAlumni.phone,
//       amount: Number(form.amount),
//       date: form.date,
//       transactionIdHash: hashedTx
//     };

//     onSave(newDonation);
//     onClose();
//   }

//   function handleChange(k,v) {
//     setForm(prev => ({...prev,[k]:v}));
//   }

//   return (
//     <div style={overlayStyle}>
//       <div style={modalStyle}>
//         <h5>Add Offline Donation</h5>
//         <div className="mb-2">
//           <label className="form-label">Select Alumni (UserID)</label>
//           <select className="form-select" value={form.userId} onChange={e=>handleChange("userId",e.target.value)}>
//             <option value="">-- Select --</option>
//             {alumniList.map(a=>(
//               <option key={a.userId} value={a.userId}>{a.name} ({a.userId})</option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-2">
//           <label className="form-label">Amount</label>
//           <input type="number" className="form-control" value={form.amount} onChange={e=>handleChange("amount",e.target.value)} />
//         </div>

//         <div className="mb-2">
//           <label className="form-label">Date of Donation</label>
//           <input type="date" className="form-control" value={form.date} onChange={e=>handleChange("date",e.target.value)} />
//         </div>

//         <div className="mb-2">
//           <label className="form-label">Transaction ID (optional)</label>
//           <input className="form-control" value={form.transactionId} onChange={e=>handleChange("transactionId",e.target.value)} placeholder="Leave empty to auto-generate" />
//         </div>

//         <div className="d-flex justify-content-end mt-3">
//           <button className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
//           <button className="btn btn-primary" onClick={handleSubmit}>Add Donation</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// const overlayStyle = {position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2000};
// const modalStyle = {width:500,maxWidth:"96%",background:"#fff",padding:20,borderRadius:10,boxShadow:"0 8px 30px rgba(0,0,0,0.25)"};

import React, { useState } from "react";
import { fileToHash } from "../../utils/hash";

export default function DonationForm({ alumniList, onClose, onSave }) {
  const [selectedUserId, setSelectedUserId] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0,10));

  async function handleSubmit() {
    if (!selectedUserId || !amount) {
      alert("Select alumni and enter amount");
      return;
    }

    const transactionId = await fileToHash(selectedUserId + Date.now());
    onSave({
      id: Date.now().toString(36),
      userId: selectedUserId,
      amount: Number(amount),
      date,
      transactionIdHash: transactionId
    });
    onClose();
  }

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h5>Add Offline Donation</h5>
        <div className="mb-3">
          <label>Alumni</label>
          <select className="form-select" value={selectedUserId} onChange={e=>setSelectedUserId(e.target.value)}>
            <option value="">-- Select Alumni --</option>
            {alumniList.map(a => (
              <option key={a.userId} value={a.userId}>{a.name} ({a.userId})</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>Amount</label>
          <input type="number" className="form-control" value={amount} onChange={e=>setAmount(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Date</label>
          <input type="date" className="form-control" value={date} onChange={e=>setDate(e.target.value)} />
        </div>
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSubmit}>Add</button>
        </div>
      </div>
    </div>
  );
}

const overlayStyle = { position: "fixed", inset: 0, background:"rgba(0,0,0,0.45)", display:"flex", justifyContent:"center", alignItems:"center", zIndex:2000 };
const modalStyle = { width:400, background:"white", padding:20, borderRadius:8 };
