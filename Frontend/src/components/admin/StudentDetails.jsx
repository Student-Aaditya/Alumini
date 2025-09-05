// // Read-only student details modal
// import React, { useState } from "react";

// export default function StudentDetails({ show, onClose, student }) {
//   const [revealed, setRevealed] = useState({email:false,phone:false});
//   if(!show||!student) return null;

//   function maskEmail(email){
//     if(!email) return "";
//     const [left,domain]=email.split("@");
//     if(!domain) return email;
//     if(left.length<=2) return left[0]+"*@" + domain;
//     return left[0]+"*".repeat(Math.max(3,left.length-2))+left.slice(-1)+"@"+domain;
//   }
//   function maskPhone(phone){
//     const s = String(phone||"");
//     if(s.length<=4) return "*".repeat(s.length);
//     const first = s.slice(0,2), last = s.slice(-2);
//     const mid = "*".repeat(Math.max(3,s.length-4));
//     return first+mid+last;
//   }

//   return (
//     <div style={overlayStyle}>
//       <div style={modalStyle}>
//         <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
//           <h5 style={{margin:0}}>Student Details</h5>
//           <button className="btn btn-sm btn-secondary" onClick={onClose}>Close</button>
//         </div>
//         <div style={{display:'flex',gap:16,marginBottom:12}}>
//           <div>
//             <div style={{width:100,height:100,background:'#eee',borderRadius:8,overflow:'hidden'}}>
//               {student.profileImage ? <img src={student.profileImage} alt="avatar" style={{width:100,height:100,objectFit:'cover'}}/> : null}
//             </div>
//           </div>
//           <div style={{flex:1}}>
//             <p><b>Name:</b> {student.name}</p>
//             <p><b>UserID:</b> @{student.userId}</p>
//             <p><b>Branch:</b> {student.branch}</p>
//             <p><b>Admission Year:</b> {student.admissionYear}</p>
//             <p><b>Email:</b> {revealed.email ? student.email : maskEmail(student.email)} <button className="btn btn-sm btn-link" onClick={()=>setRevealed(prev=>({...prev,email:!prev.email}))}>{revealed.email ? "Hide" : "Reveal"}</button></p>
//             <p><b>Phone:</b> {revealed.phone ? student.phone : maskPhone(student.phone)} <button className="btn btn-sm btn-link" onClick={()=>setRevealed(prev=>({...prev,phone:!prev.phone}))}>{revealed.phone ? "Hide" : "Reveal"}</button></p>
//             <p><b>Interests:</b> {(student.interests||[]).join(", ")}</p>
//             <p><b>Opted Out:</b> {student.isOptedOut ? "Yes" : "No"}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const overlayStyle={position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:2000};
// const modalStyle={width:600, maxWidth:"96%", maxHeight:"90vh", overflowY:"auto", background:"#fff", padding:18, borderRadius:10, boxShadow:"0 10px 30px rgba(0,0,0,0.25)"};

import React,{useState} from "react";

export default function StudentDetails({show,onClose,student}) {
  const [revealed,setRevealed] = useState({email:false,phone:false});
  const [previewCert,setPreviewCert] = useState(null);
  if(!show||!student) return null;

  function maskEmail(email){ if(!email) return ""; const [l,d]=email.split("@"); if(!d)return email; return l[0]+"*".repeat(Math.max(3,l.length-2))+l.slice(-1)+"@"+d; }
  function maskPhone(phone){ const s=String(phone||""); return s.length>=10 ? "******"+s.slice(-4):s; }

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
          <h5>Student Details</h5>
          <button className="btn btn-sm btn-secondary" onClick={onClose}>Close</button>
        </div>

        <div className="row g-3">
          <div className="col-md-4">{student.profileImage?<img src={student.profileImage} style={{width:120,height:120,borderRadius:6}} alt="avatar"/>:<div style={{width:120,height:120,background:"#ccc",borderRadius:6}}/>}</div>
          <div className="col-md-8">
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>UserID:</strong> {student.userId}</p>
            <p><strong>Branch:</strong> {student.branch}</p>
            <p><strong>Admission Year:</strong> {student.admissionYear}</p>
            <p><strong>Email:</strong> <span>{revealed.email?student.email:maskEmail(student.email)}</span> <button className="btn btn-sm btn-outline-secondary ms-2" onClick={()=>setRevealed(p=>({...p,email:!p.email}))}>{revealed.email?"Hide":"Show"}</button></p>
            <p><strong>Phone:</strong> <span>{revealed.phone?student.phone:maskPhone(student.phone)}</span> <button className="btn btn-sm btn-outline-secondary ms-2" onClick={()=>setRevealed(p=>({...p,phone:!p.phone}))}>{revealed.phone?"Hide":"Show"}</button></p>
            <p><strong>Interests:</strong> {(student.interests||[]).join(", ")}</p>
          </div>

          <div className="col-12">
            <strong>Certificates</strong>
            {(!student.certificates||student.certificates.length===0)?<div>No certificates</div>:(
              <ul>
                {student.certificates.map(c=>(
                  <li key={c.id} style={{marginBottom:6}}>
                    {c.title} — {c.issueDate} — <code>{c.hash.slice(0,12)}...</code>
                    <button className="btn btn-sm btn-outline-primary ms-2" onClick={()=>setPreviewCert(c)}>Preview</button>
                    <a href={c.dataUrl} download={c.fileName} className="btn btn-sm btn-outline-success ms-1">Download</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {previewCert && <div style={overlayStyle} onClick={()=>setPreviewCert(null)}>
        <div style={{background:"#fff",padding:12,borderRadius:6,maxWidth:"90%",maxHeight:"90%",overflow:"auto"}} onClick={e=>e.stopPropagation()}>
          <h6>{previewCert.title} — {previewCert.issueDate}</h6>
          {previewCert.type.startsWith("image") ? <img src={previewCert.dataUrl} style={{maxWidth:"100%",maxHeight:"80vh"}} alt="cert"/> :
            <iframe src={previewCert.dataUrl} style={{width:"100%",height:"80vh"}} title="cert pdf"></iframe>}
          <div className="mt-2"><button className="btn btn-sm btn-secondary" onClick={()=>setPreviewCert(null)}>Close</button></div>
        </div>
      </div>}
    </div>
  );
}

const overlayStyle={position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2000};
const modalStyle={width:800,maxWidth:"96%",maxHeight:"90vh",overflowY:"auto",background:"#fff",padding:18,borderRadius:10,boxShadow:"0 10px 30px rgba(0,0,0,0.25)"};
