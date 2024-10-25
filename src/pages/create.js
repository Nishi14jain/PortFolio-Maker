import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Form, Button, Card, CardHeader, CardBody, CardFooter, Row, Col } from "react-bootstrap";
import "../css/style.css"; 

const About = () => {
    const [formData, setFormdata] = useState({
        name: '', 
        email: '', 
        age: '',
        phone: '', 
        address: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formData, 
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        console.log("Form Data Submitted: ", formData);  // Debugging log
        if (!formData.email) {
            alert("Please enter a valid email address");
            return;
        }else{
            console.log("Email entered: ", formData.email);  // Check the email

        }

    
        // Check if user already exists
       
            // Store form data in localStorage
            localStorage.setItem('formData', JSON.stringify(formData)); 
            alert("Information added successfully!"); 
            
            // Reset the form
            setFormdata({
                name: '', 
                email: '',
                age: '',
                phone: '',
                address: '',
            });
        
    };
    

    return (
        <div>
            <div className="create_page">
                <h1>Create your own Portfolio</h1>
            </div>

            <div>
                <Card>
                    <Form onSubmit={handleSubmit}>  {/* Make sure this is onSubmit */}
                        <CardHeader>Personal Info</CardHeader>
                        <CardBody>
                            <Row>
                                <Col md={5}>
                                    {/* File input */}
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Upload File</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>

                                    {/* Name input */}
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}  // Ensure handleChange is called
                                        />
                                    </Form.Group>

                                    {/* Email input */}
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>

                                <Col md={5}>
                                    {/* Phone input */}
                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    {/* Age input */}
                                    <Form.Group className="mb-3" controlId="formBasicAge">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Age"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    {/* Address input */}
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Add Full Address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Button variant="primary" type="submit">Submit</Button>
                        </CardFooter>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default About;
