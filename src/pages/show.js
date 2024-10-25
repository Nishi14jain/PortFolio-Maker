import React, { useEffect, useState } from "react";
import { Form, Button, Card, CardHeader, CardBody, CardFooter, Row, Col } from "react-bootstrap";
import "../css/style.css";

const Show = () => {
    const [formData, setFormdata] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('formData'); // Fetch 'formData' from localStorage
        if (data) {
            setFormdata(JSON.parse(data)); // Parse and set the state if data exists
        }
    }, []);

    return (
        <div className="showpage">
            <div >
                <h1>This is my Information</h1>
            </div>
            <div style={{width:'50%'}}>
                {formData ? (
                    <>
                        <Card className="show-card">
                            <p>Name: {formData.name}</p>
                            <p>Age: {formData.age}</p>
                            <p>Email: {formData.email}</p>
                            <p>Phone: {formData.phone}</p>
                            <p>Address: {formData.address}</p>
                        </Card>

                    </>
                ) : (
                    <p>No user information found.</p>
                )}
            </div>
        </div>
    );
};

export default Show;
