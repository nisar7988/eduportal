import React from "react";
import Button from 'react-bootstrap/Button';


const PrintPage = () => {
  // Function to handle print
  const handlePrint = () => {
    window.print();
  };

  return (
   
         <Button className="button" onClick={handlePrint}>Print Page</Button>
   
 
  );
};

export default PrintPage;
