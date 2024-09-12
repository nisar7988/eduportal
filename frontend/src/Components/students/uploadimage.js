import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
// import "./FileUpload.css"; // Optional CSS for styling
import { useSelector } from "react-redux";
// import { Button } from "bootstrap";
export const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [filePath, setFilePath] = useState("");




  
   const userId = useSelector(
     (state) => state.StudentInfo.studentinfo.user_name
   );
  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle file upload submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("userid",userId);
    try {
      const res = await axios.post("/upload/files", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("File uploaded successfully");
      setFilePath(res.data.filePath); // Get file path from the server response
    } catch (err) {
      setMessage("Failed to upload file");
    }
  };

  return (
    <div className="file-upload">
      <h2>Upload a File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <Button type="submit" className="button">Upload</Button>
      </form>
      {message && <p>{message}</p>}

      {/* Show uploaded image */}
      {filePath && (
        <div>
          <p className="icon">File is available at:</p>
          <a
            href={`${filePath}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {filePath}
          </a>
          <div>
            <img
              src={`${filePath}`}
              alt="Uploaded file"
              style={{ width: "300px", marginTop: "10px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// export default FileUpload;

// import React, { useState } from "react";
// import axios from "axios";
// // import "./FileUpload.css"; // Optional CSS for styling

// export const UploadImage = () => {
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState("");
//   const [filePath, setFilePath] = useState("");

//   // Handle file change
//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   // Handle file upload submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       setMessage("Please select a file to upload");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await axios.post("/upload/files", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setMessage("File uploaded successfully");
//       setFilePath(res.data.filePath); // Get file path from the server response
//     } catch (err) {
//       setMessage("Failed to upload file");
//     }
//   };

//   return (
//     <div className="file-upload">
//       <h2>Upload a File</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Upload</button>
//       </form>
//       {message && <p>{message}</p>}
//       {filePath && (
//         <div>
//           <p>File is available at:</p>
//           <a
//             href={`http://localhost:5000${filePath}`}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {filePath}
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileUpload;

// // import { upload } from "@testing-library/user-event/dist/upload";
// import axios from "axios";

// import React, { useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { useSelector } from "react-redux";

// export const UploadImage = () => {
//  async function UpLoad(){
//   try{
//     console.log(Data)
//     const response = await axios.post("/upload/images", Data
//     , {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     }
//   );
//     console.log(response.data);
//   }
//   catch(err){
//     console.log(err);
//   }
//  }

// //  const [studentinfo,setstudentinfo] = useState([]);
//  const studentdata = useSelector((state) => state.StudentInfo.studentinfo);
//  const [selectedImage, setSelectedImage] = useState(null);
//  const [txt ,settxt] = useState("")

//  const [Data, setData] = useState([])
//  const data = {
//    user_id: studentdata.user_name,
//    file : selectedImage,
//    Class :studentdata.class
//  };

//  function upload() {
//   if (selectedImage) {
//     setData(data);
//     console.log("DAta is",Data)
//     UpLoad();

//     settxt("");
//   } else {
//     console.log("please upload image");
//     settxt("please select image!");
//   }
// }

//   return (
//     <>
//       <Container className="icon">
//         <Row className="p-1">
//           {/* <div style={{ cursor: "pointer" }}> */}
//           <h1>Upload Profile Image here </h1>
//         </Row>
//         {/* {
//           console.log(Data)
//         } */}
//         <Row className="my-2">
//           <Col>
//             <input
//               //   style={{
//               //     borderRadius: "3rem",
//               //     backgroundColor: "rgba(0,187,167,255)",
//               //     border: "none",
//               //   }}
//               type="file"
//               name="myImage"
//               onChange={(event) => {
//                 // console.log(event.target.files[0]); // Log the selected file
//                 setSelectedImage(event.target.files[0]); // Update the state with the selected file
//               }}
//             />
//           </Col>
//           <Col>
//             {selectedImage && (
//               <div style={{ borderRadius: "60%" }}>
//                 <img
//                   alt="not found"
//                   width={"250px"}
//                   src={URL.createObjectURL(selectedImage)}
//                 />

//                 <br />
//                 <br />
//                 <button
//                   onClick={() => setSelectedImage(null)}
//                   style={{
//                     // borderRadius: "3rem",
//                     backgroundColor: "rgba(0,187,167,255)",
//                     border: "none",
//                   }}
//                   className="w-50 p-2"
//                 >
//                   Remove
//                 </button>
//               </div>
//             )}
//           </Col>
//         </Row>

//         <button
//           style={{
//             // borderRadius: "3rem",
//             backgroundColor: "rgba(0,187,167,255)",
//             border: "none",
//           }}
//           className="w-25 p-2"
//           onClick={upload}
//         >
//           upload
//         </button><br />
//         <span className="text-danger">{txt?txt:""}</span>
//       </Container>
//     </>
//   );
// };
