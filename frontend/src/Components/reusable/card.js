import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <Card
      style={{ width: "15rem", backgroundColor: "rgba(221,221,231,255)" }}
      className="icon cardhover"
    >
      <Card.Body>
        <Card.Text>
          <h1>{props.icon}</h1>
        </Card.Text>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cards;
