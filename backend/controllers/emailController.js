
const { sendEmail } = require('../services/Emailservices')

const sendEmailToPerents = async (req,res)=>{
    try {
        const {
          teachername,
          meetingDetails,
          parentEmail,
          customPurpose,
          teacher_email,
        } = req.body; // or ye bhi
        console.log(req.body)
      //dakhte hai abhi  {
      //   "teacherId": 1,
      //   "meetingDetails": {
      //     "date": "2024-09-01",
      //     "time": "10:00 AM",
      //     "venue": "Room 101"
      //   }
      // }
      const subject = `${customPurpose}: ${meetingDetails.date}`;
      const html = `
      <h1>Dear Parents,</h1>
      <p>You are invited to  ${customPurpose} with ${customPurpose!=='School annual function'?teachername:""}.</p>
      <p><strong>Date:</strong> ${meetingDetails.date}</p>
      <p><strong>Time:</strong> ${meetingDetails.time}</p>
      <p><strong>Venue:</strong> ${meetingDetails.venue}</p>
      <p>Please confirm your attendance by replying to this email.</p>
      <p>Best regards,</p>
      <p>${teachername}</p>`;
      await sendEmails();
      function sendEmails(){
      parentEmail.map((item)=>{
          sendEmail(item, subject, html, teacher_email);
        }
        
    )
    
}   

res.status(200).json({ message: "Email sent successfully to the specified parent" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email" });
    }
    

    
}

module.exports = {sendEmailToPerents};