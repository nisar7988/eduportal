import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
// import "./FileUpload.css"; // Optional CSS for styling
import { useSelector } from "react-redux";
// import { Button } from "bootstrap";
export const UploadImageByAdmin = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [filePath, setFilePath] = useState("");

   const Data = useSelector((state) => state.AdminInfo.admininfo);
   const userId = Data?Data.username:"";
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
    formData.append("userid", userId);
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
        <Button type="submit" className="button">
          Upload
        </Button>
      </form>
      {message && <p>{message}</p>}

      {/* Show uploaded image */}
      {filePath && (
        <div>
          <p className="icon">File is available at:</p>
          <a href={`${filePath}`} target="_blank" rel="noopener noreferrer">
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

