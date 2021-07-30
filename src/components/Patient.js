import React, {useRef} from 'react'
import {Form, Modal, Button} from 'react-bootstrap'
export default function Patient(props) {
    const inputRef = useRef()

    return (
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Patient Referral Form
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Doctor Name</Form.Label>
                    <Form.Control placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Would you like to refer this Patient?</Form.Label>
                    <Form.Control as="select">
                    <option>Yes</option>
                    <option>No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>If No, explain your reason</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Submit</Button>
            </Modal.Footer>
            </Modal>
    )
}
