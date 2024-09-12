import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function Modals(props) {
  const {cancle,saveChanges} = props;
  console.log(cancle,saveChanges)
  return (
    <div
      className="modal show z-n5 position-absolute p-5"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>nukbu ykg</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" >Cencle</Button>
          <Button className="button" >Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
