import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Form, Button, Card, CardHeader, CardBody, CardFooter, Row, Col, FormGroup } from "react-bootstrap";
import "../css/style.css";

const About = () => {
    const [formData, setFormdata] = useState({
        name: '',
        email: '',
        age: '',
        phone: '',
        address: '',
        role: '',
        role_description: '',
        primary_education: '',
        primary_institue: '',
        secondary_education: '',
        secondary_institute: '',
        more_education1: '',
        more_institute_name1: '',
        more_education2: '',
        more_institute_name2: '',
    });

    const [showColumn, setShowColumn] = useState(false); // Moved this state directly into About

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
        }

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
            role: '',
            role_description: '',
            primary_education: '',
            primary_institue: '',
            secondary_education: '',
            secondary_institute: '',
            more_education1: '',
            more_institute_name1: '',
            more_education2: '',
            more_institute_name2: '',
        });
    };

    // Toggle the additional education field visibility
    const toggleColumn = () => {
        setShowColumn(!showColumn);
    };

    return (
        <div>
            <div className="create_page">
                <h1>Create your own Portfolio</h1>
            </div>

            <div>
                <Form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>Personal Info</CardHeader>
                        <CardBody>
                            <Row className="form-row">
                                <Col md={5}>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Upload File</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicRole">
                                        <Form.Label>Add Role</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Role"
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>

                                <Col md={5}>
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
                                    <FormGroup className="mb-3" controlId="formBasicAddress">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Add Full Address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>

                                    <FormGroup className="mb-3" controlId="formBasicRoleDescription">
                                        <Form.Label mt-2>Role Description</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Add Role Description"
                                            name="role_description"
                                            value={formData.role_description}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>




                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    {/* <Card style={{ marginTop: '20px' }}>
                        <CardHeader>Educational Info</CardHeader>
                        <CardBody>
                            <Row className="form-row">
                                <Col md={5}>
                                    <Form.Group className="mb-3" controlId="formBasicPrimaryEducation">
                                        <Form.Label>Primary Education</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Primary Education"
                                            name="primary_education"
                                            value={formData.primary_education}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPrimaryInstitute">
                                        <Form.Label>Primary Institute</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Primary Institute"
                                            name="primary_institue"
                                            value={formData.primary_institue}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>

                                <Col md={5}>
                                    <Form.Group className="mb-3" controlId="formBasicSecondaryEducation">
                                        <Form.Label>Secondary Education</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Secondary Education"
                                            name="secondary_education"
                                            value={formData.secondary_education}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicSecondaryInstitute">
                                        <Form.Label>Secondary Institute</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Secondary Institute"
                                            name="secondary_institute"
                                            value={formData.secondary_institute}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>

                                {showColumn && (
                                    <Row className="form-row p-0 m-0">
                                        <Col md={5}>
                                            <Form.Group className="mb-3" controlId="formBasicMoreEducation1">
                                                <Form.Label>Degree/Course</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Degree"
                                                    name="more_education1"
                                                    value={formData.more_education1}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={5}>
                                            <Form.Group className="mb-3" controlId="formBasicMoreEducation1Institute1">
                                                <Form.Label>Institute Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Institute Name"
                                                    name="more_institute_name1"
                                                    value={formData.more_institute_name1}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col md={5}>
                                            <Form.Group className="mb-3" controlId="formBasicMoreEducation2">
                                                <Form.Label>Degree/Course</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Degree"
                                                    name="more_education2"
                                                    value={formData.more_education2}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={5}>
                                            <Form.Group className="mb-3" controlId="formBasicMoreEducation1Institute2">
                                                <Form.Label>Institute Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Institute Name"
                                                    name="more_institute_name2"
                                                    value={formData.more_institute_name2}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                )}
                            </Row>
                        </CardBody>
                        <CardFooter className="card_footer">
                            <Button className="add_more" variant="primary" onClick={toggleColumn}> {showColumn ? "Delete" : "Add More"} </Button>
                        </CardFooter>
                    </Card> */}

                    <div className="d-flex justify-content-end mt-3">
                        <Button variant="primary" type="submit" className="submit_btn">Submit</Button>
                    </div>                </Form>
            </div>
        </div>
    );
};

export default About;
