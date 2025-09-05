// // src/pages/admin/Students.jsx
// import React from "react";
// import { Button, Form, InputGroup } from "react-bootstrap";
// import bgImage from "../../assets/Bg-Image.jpg"; // adjust path if needed
// import { FaSearch, FaEdit, FaBan, FaPlus } from "react-icons/fa";

// const Students = () => {
//   const students = [
//     { name: "Owen Mitchell", branch: "Computer Science", interests: "AI, Machine Learning" },
//     { name: "Chloe Sullivan", branch: "Electrical Engineering", interests: "Robotics, Control Systems" },
//     { name: "Caleb Parker", branch: "Mechanical Engineering", interests: "Thermodynamics, Fluid Mechanics" },
//     { name: "Emily Reed", branch: "Civil Engineering", interests: "Structural Analysis, Geotechnical Engineering" },
//     { name: "Logan Brooks", branch: "Chemical Engineering", interests: "Process Design, Reaction Engineering" },
//     { name: "Grace Coleman", branch: "Aerospace Engineering", interests: "Aerodynamics, Propulsion" },
//     { name: "Henry Foster", branch: "Biomedical Engineering", interests: "Biomaterials, Biomechanics" },
//     { name: "Lily Hughes", branch: "Industrial Engineering", interests: "Operations Research, Supply Chain Management" },
//     { name: "Samuel Jenkins", branch: "Environmental Engineering", interests: "Water Resources, Air Quality" },
//     { name: "Ella Knight", branch: "Materials Science and Engineering", interests: "Nanomaterials, Ceramics" },
//   ];

//   return (
//     <div
//       style={{
//         position: "relative",
//         minHeight: "100vh",
//         width: "100%",
//         overflow: "hidden",
//       }}
//     >
//       {/* Fullscreen Background */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundImage: `url(${bgImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           filter: "blur(8px) brightness(0.7)",
//           zIndex: -1,
//         }}
//       ></div>

//       {/* Foreground Content */}
//       <div className="d-flex justify-content-center align-items-start pt-5">
//         <div
//           className="container rounded shadow-lg p-4"
//           style={{
//             background: "rgba(255, 255, 255, 0.7)",
//             backdropFilter: "blur(10px)",
//             WebkitBackdropFilter: "blur(10px)",
//             border: "1px solid rgba(255, 255, 255, 0.3)",
//           }}
//         >
//           {/* Page Title + Add Button */}
//           <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-2">
//             <h2 className="fw-bold text-dark mb-0">👩‍🎓 Students</h2>
//             <Button className="btn btn-primary d-flex align-items-center gap-2 rounded-pill px-4 shadow-sm">
//               <FaPlus /> Add Student
//             </Button>
//           </div>

//           {/* Search Bar */}
//           <InputGroup className="mb-4 shadow-sm rounded">
//             <InputGroup.Text id="search-icon" className="bg-light border-0">
//               <FaSearch className="text-secondary" />
//             </InputGroup.Text>
//             <Form.Control
//               placeholder="Search students"
//               aria-label="Search students"
//               aria-describedby="search-icon"
//               className="border-0 bg-light"
//             />
//           </InputGroup>

//           {/* Students Table */}
//           <div
//             className="card border-0 shadow-sm rounded-3 overflow-hidden"
//             style={{
//               background: "rgba(255, 255, 255, 0.8)",
//               backdropFilter: "blur(6px)",
//               WebkitBackdropFilter: "blur(6px)",
//               border: "1px solid rgba(255, 255, 255, 0.2)",
//             }}
//           >
//             <div className="card-body table-responsive">
//               <table className="table table-hover align-middle mb-0">
//                 <thead className="table-dark text-white">
//                   <tr>
//                     <th>Name</th>
//                     <th>Branch</th>
//                     <th>Interests</th>
//                     <th className="text-center">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {students.map((s, idx) => (
//                     <tr key={idx}>
//                       <td>{s.name}</td>
//                       <td className="text-secondary">{s.branch}</td>
//                       <td className="text-secondary">{s.interests}</td>
//                       <td className="text-center">
//                         <div className="d-flex justify-content-center gap-2 flex-wrap">
//                           <Button variant="info" size="sm" className="rounded-pill px-3 shadow-sm d-flex align-items-center gap-1">
//                             <FaEdit /> Update
//                           </Button>
//                           <Button variant="danger" size="sm" className="rounded-pill px-3 shadow-sm d-flex align-items-center gap-1">
//                             <FaBan /> Deactivate
//                           </Button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Students;


// Main page: table, search, filter, sort, seed on first load, uses StudentForm and StudentDetails
import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaEye, FaTrash, FaSortAlphaDown, FaSortNumericDown } from "react-icons/fa";

import StudentForm from "../../components/admin/StudentForm";
import StudentDetails from "../../components/admin/StudentDetails";

import { seedInitialIfEmpty, getAllStudents, addStudent, updateStudent, deleteStudent } from "../../utils/studentStorage";

export default function Student_Management() {
  const [students, setStudents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchQ, setSearchQ] = useState("");
  const [filterBranch, setFilterBranch] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formInitial, setFormInitial] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [detailItem, setDetailItem] = useState(null);

  // Seed initial data on mount
  useEffect(() => {
    (async () => {
      await seedInitialIfEmpty();
      const data = getAllStudents();
      setStudents(data);
      setFiltered(data);
    })();
  }, []);

  // Apply search, filter, sort
  useEffect(() => {
    let list = [...students];
    if (searchQ) {
      const q = searchQ.toLowerCase();
      list = list.filter(s => (s.name||"").toLowerCase().includes(q) || (s.email||"").toLowerCase().includes(q) || (s.userId||"").toLowerCase().includes(q));
    }
    if (filterBranch) list = list.filter(s => s.branch === filterBranch);
    if (filterYear) list = list.filter(s => String(s.admissionYear) === String(filterYear));
    if (sortBy) {
      list.sort((x,y) => {
        if (sortBy === "name") return String(x.name||"").localeCompare(y.name||"");
        if (sortBy === "year") return Number(x.admissionYear||0) - Number(y.admissionYear||0);
        return 0;
      });
    }
    setFiltered(list);
  }, [searchQ, filterBranch, filterYear, sortBy, students]);

  function refreshFromStorage() {
    const data = getAllStudents();
    setStudents(data);
  }

  function openAdd() {
    setFormInitial(null);
    setShowForm(true);
  }

  function openEdit(item) {
    setFormInitial(item);
    setShowForm(true);
  }

  function onSaveHandler(obj) {
    if (getAllStudents().some(s => s.id === obj.id)) {
      updateStudent(obj);
    } else {
      addStudent(obj);
    }
    refreshFromStorage();
  }

  function handleDelete(id) {
    if (!window.confirm("Delete this student? This action cannot be undone.")) return;
    deleteStudent(id);
    refreshFromStorage();
  }

  function openDetails(item) {
    setDetailItem(item);
    setShowDetails(true);
  }

  // filter options
  const branchOptions = Array.from(new Set(students.map(s => s.branch).filter(Boolean)));
  const yearOptions = Array.from(new Set(students.map(s => s.admissionYear).filter(Boolean))).sort((a,b)=>b-a);

  // Mask helpers
  function maskEmail(email) {
    if (!email) return "";
    const [left, domain] = email.split("@");
    if (!domain) return email;
    if (left.length <= 2) return left[0] + "*@" + domain;
    return left[0] + "*".repeat(Math.max(3, left.length - 2)) + left.slice(-1) + "@" + domain;
  }
  function maskPhone(phone) {
    const s = String(phone || "");
    if (s.length <= 4) return "*".repeat(s.length);
    const first = s.slice(0, 2);
    const last = s.slice(-2);
    const mid = "*".repeat(Math.max(3, s.length - 4));
    return first + mid + last;
  }

  return (
    <div style={{ padding: 18 }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">🎓 Student Management</h2>
        <div>
          <button className="btn btn-outline-secondary me-2" onClick={() => setSortBy("name")}><FaSortAlphaDown /> Sort Name</button>
          <button className="btn btn-outline-secondary me-2" onClick={() => setSortBy("year")}><FaSortNumericDown /> Sort Admission Year</button>
          <button className="btn btn-primary" onClick={openAdd}><FaPlus /> Add Student</button>
        </div>
      </div>

      <div className="row g-2 mb-3">
        <div className="col-md-5">
          <input className="form-control" placeholder="Search by name, email or userId" value={searchQ} onChange={e=>setSearchQ(e.target.value)} />
        </div>
        <div className="col-md-3">
          <select className="form-select" value={filterBranch} onChange={e=>setFilterBranch(e.target.value)}>
            <option value="">All Branches</option>
            {branchOptions.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select" value={filterYear} onChange={e=>setFilterYear(e.target.value)}>
            <option value="">All Years</option>
            {yearOptions.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
        <div className="col-md-2 text-end">
          <button className="btn btn-sm btn-outline-secondary" onClick={()=>{ setSearchQ(""); setFilterBranch(""); setFilterYear(""); setSortBy(""); }}>Reset</button>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th style={{minWidth:200}}>Name / UserID</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Branch</th>
                <th>Admission Year</th>
                <th>Interests</th>
                <th className="text-center" style={{minWidth:180}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={7} className="text-center py-4">No students found</td></tr>
              ) : filtered.map(s => (
                <tr key={s.id}>
                  <td>
                    <div style={{display:'flex', alignItems:'center', gap:12}}>
                      <div style={{
                        width:48, height:48, borderRadius:8, background:'#f0f0f0',
                        display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700
                      }}>
                        {s.profileImage ? <img src={s.profileImage} alt="avatar" style={{width:48,height:48,objectFit:'cover',borderRadius:8}} /> : (s.name||'').split(' ').map(n=>n[0]).slice(0,2).join('')}
                      </div>
                      <div>
                        <div className="fw-semibold">{s.name}</div>
                        <div style={{fontSize:12,color:'#666'}}>@{s.userId}</div>
                      </div>
                    </div>
                  </td>

                  <td><div style={{fontFamily:'monospace'}}>{maskEmail(s.email)}</div></td>
                  <td><div style={{fontFamily:'monospace'}}>{maskPhone(s.phone)}</div></td>
                  <td>{s.branch}</td>
                  <td>{s.admissionYear}</td>
                  <td>{(s.interests||[]).join(", ")}</td>

                  <td className="text-center">
                    <div className="d-flex justify-content-center gap-2">
                      <button className="btn btn-sm btn-info" onClick={()=>openDetails(s)}><FaEye /> View</button>
                      <button className="btn btn-sm btn-warning" onClick={()=>openEdit(s)}><FaEdit /> Edit</button>
                      <button className="btn btn-sm btn-danger" onClick={()=>handleDelete(s.id)}><FaTrash /> Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Form Modal */}
      {showForm && (
        <StudentForm
          show={showForm}
          initialData={formInitial}
          onClose={()=>{ setShowForm(false); setFormInitial(null); refreshFromStorage(); }}
          onSave={(obj)=>{ onSaveHandler(obj); }}
        />
      )}

      {/* Details Modal */}
      {showDetails && (
        <StudentDetails
          show={showDetails}
          student={detailItem}
          onClose={()=>{ setShowDetails(false); setDetailItem(null); refreshFromStorage(); }}
        />
      )}
    </div>
  );
}
