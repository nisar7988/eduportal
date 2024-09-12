import Alert from "react-bootstrap/Alert";

function Alerts(props) {
  return (
    <>
      <Alert variant={props.color}>{props.text}</Alert>
    </>
  );
}

export default Alerts;
