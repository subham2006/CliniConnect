import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../AuthContext"
import { Link, useHistory } from "react-router-dom"
import logo from './logo.png'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/dashboard")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <div className="w-100 " style={{ maxWidth: "400px", marginBottom : '100px'}}>
      <h1 className = 'd-flex justify-content-center' style = {{marginBottom : '100px'}}>
        CliniConnect
      </h1>
      <div className = 'd-flex justify-content-center' style = {{margin : '50px'}}>
        <img src = {logo} style = {{maxHeight : '100px'}}></img>
      </div>
      <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit" style = {{marginTop : '20px'}}>
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}