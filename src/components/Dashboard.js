import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Nav, Container, Popover, PopoverTitle, PopoverContent, Tooltip, OverlayTrigger } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import firebase from "firebase"
import logo from './logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Patient from "./Patient"

export default function Dashboard() {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [modalShow, setModalShow] = React.useState(false)

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Trial Matched! Click to view Details.
        </Tooltip>
      );
    
    return (
        <Container className = 'd-flex justify-content-center'>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <img src = {logo} style = {{height : '30px', margin : '15px'}}></img>
            <a className="navbar-brand" href="#">CliniConnect</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Doctor Portal</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Clinical Trial Portal</a>
                </li>
                </ul>
            </div>
            </nav>
            <div >
                <ul className="list-group d-flex justify-content-center" style = {{width : '100vh', height : '100vh'}}>
                    <h1 className = "d-flex justify-content-center">Patients</h1>
                    <OverlayTrigger placement = 'right' delay={{ show: 100, hide: 1000 }} overlay = {renderTooltip}><Button className="w-100 btn btn-lg btn-danger" type="button" style = {{'height' : '75px'}} onClick = {() => setModalShow(true)}>Cintrifuse</Button></OverlayTrigger>
                    <OverlayTrigger placement = 'right' delay={{ show: 100, hide: 1000 }} overlay = {renderTooltip}><Button className="w-100 btn btn-lg btn-danger" type="button" style = {{'height' : '75px'}} onClick = {() => setModalShow(true)}>Moshin Masud</Button></OverlayTrigger>
                    <OverlayTrigger placement = 'right' delay={{ show: 100, hide: 1000 }} overlay = {renderTooltip}><Button className="w-100 btn btn-lg btn-danger" type="button" style = {{'height' : '75px'}} onClick = {() => setModalShow(true)}>Will Agathis</Button></OverlayTrigger>
                    <OverlayTrigger placement = 'right' delay={{ show: 100, hide: 1000 }} overlay = {renderTooltip}><Button className="w-100 btn btn-lg btn-danger" type="button" style = {{'height' : '75px'}} onClick = {() => setModalShow(true)}>John Grim</Button></OverlayTrigger>
                    <OverlayTrigger placement = 'right' delay={{ show: 100, hide: 1000 }} overlay = {renderTooltip}><Button className="w-100 btn btn-lg btn-danger" type="button" style = {{'height' : '75px'}} onClick = {() => setModalShow(true)}>Theresa Sedlack</Button></OverlayTrigger>
                    <OverlayTrigger placement = 'right' delay={{ show: 100, hide: 1000 }} overlay = {renderTooltip}><Button className="w-100 btn btn-lg btn-danger" type="button" style = {{'height' : '75px'}} onClick = {() => setModalShow(true)}>Pete Blackshaw</Button></OverlayTrigger>
                </ul>
            </div>

            <Patient show = {modalShow} onHide = {() => setModalShow(false)}/>
            </Container>
    )
}

