import Card from "react-bootstrap/Card";
// import teacherimage from "../../Assets/tacher.jpg"

function Profile(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.sub} Teacher
        </Card.Text>
        <Card.Text>
          {props.contact} 
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default Profile;
