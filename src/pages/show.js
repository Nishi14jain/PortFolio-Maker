import React, { useEffect, useState } from "react";
import { Form, Button, Card, CardHeader, CardBody, CardFooter, Row, Col, Container, Image, Table } from "react-bootstrap";
import "../css/style.css";
import user_image from "../images/user_image.jpg";
import top_image from "../images/me2.avif";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Show = () => {
    const [user, setUser] = useState({ data: null, isLoading: true });

    useEffect(() => {
        const data = localStorage.getItem('formData'); // Fetch 'formData' from localStorage
        if (data) {
            setUser({ data: JSON.parse(data), isLoading: false }); // Parse and set the state if data exists
        } else {
            setUser({ data: null, isLoading: false });
        }
    }, []);

    if (user.isLoading) {
        return <div>Loading User</div>;
    }

    return (
        <Container fluid>
            {/* Top Intre */}
            <Row>
                <Col xs={12} md={4} style={{ textAlign: 'center' }} className="top-left-col">
                    <div>
                        <Image src={user_image} fluid alt="user image" roundedCircle style={{ width: '25%', marginTop: '50px' }} />
                    </div>
                    <div>
                        <p className="" style={{ fontSize: '50px', marginLeft: '30px', color: '#fff' }} >
                            {/* Nishi Jain */}
                            {user.data.name}
                        </p>
                        <p style={{ fontSize: '20px' }}>
                            {user.role} <br />
                            {user.companyName ? user.companyName : user.institutename2}
                        </p>


                        <div className='iconDiv' >
                            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="link_style">
                                <FaLinkedin className='socialIcons' /></a>
                            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="link_style">
                                <FaGithub className='socialIcons' />
                            </a>
                        </div>

                        <div>
                            <p style={{ fontSize: '20px', marginTop: '20px' }}>
                                <a href={`tel:+91${user.phone}`} style={{ textDecoration: 'none', color: '#fff' }}>
                                    +91{user.data.phone}
                                </a>
                            </p>
                            <p style={{ fontSize: '20px' }}>
                                <a href={`mailto:${user.email}`} style={{ textDecoration: 'none', color: '#fff' }}>
                                    {user.data.email}
                                </a>
                            </p>

                        </div>
                    </div>
                </Col>
                <Col xs={12} md={8} className="top-right-col">
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <div className='main-sub-con'>
                            <p style={{ color: '#333', marginTop: '50px', fontWeight: '600', fontSize: '50px', marginLeft: '50px', color: '#333' }}>
                                {/* A Passionate Web Developer with Innovative <span className='ideas'> <br></br>Ideas</span> */} {user.data.role}
                                <span style={{ fontSize: '20px', fontWeight: '100', display: 'block', lineHeight: '1.2', color: '#000', fontWeight: '400', marginTop: '20px' }}>
                                    {/* This simple website just resembles a personal portfolio website giving information about myself. */}
                                    {user.data.role_description}
                                </span>
                            </p>
                            <div style={{ marginLeft: '10%', marginBottom: '20%' }}>
                                <a href='mailto:{user.email}' style={{ textDecoration: 'none', color: '#fff' }}> <button className='callme'>
                                    mail me
                                </button></a>
                                <a href='tel:{user.phone}' style={{ textDecoration: 'none', color: '#fff' }}>  <button className='callme'>
                                    call me
                                </button></a>
                            </div>
                        </div>
                        <Image src={top_image} style={{ width: '50%', opacity: 'initial' }} className='main-image'></Image>

                    </div>
                </Col>
            </Row>

            {/* About me */}
            <Row className='row2'>
                <Col xs={12} md={4} style={{ textAlign: 'center', fontWeight: '800', marginTop: '10px', fontSize: '25px' }} >
                    <p style={{ marginTop: '150px' }}>About me</p>

                </Col>
                <Col xs={12} md={8} style={{ textAlign: 'center', marginBottom: '50px' }} >
                    <p style={{ fontWeight: '800', marginTop: '80px', fontSize: '25px', }}>
                        Hye there, <br></br>
                        <span style={{ fontSize: '20px' }}>
                            Some of my Details
                        </span>
                    </p>

                    <Table>

                        <tbody className='table-body-details'>
                            <tr >
                                <td > <span className='info_head'>Name:</span> {user.data.name}</td>
                                <td style={{ textAlign: 'left' }}><span className='info_head'>Age:</span> {user.data.age}</td>

                            </tr>
                            <tr>
                                <td > <span className='info_head'>Residence:</span> {user.data.address}</td>
                                <td style={{ textAlign: 'left' }}><span className='info_head'>Role:</span>  {user.data.role}</td>

                                {/* <td style={{ textAlign: 'left' }}><span className='info_head'>College:</span>{user.data.institutename1} </td> */}
                            </tr>

                            <tr>
                                {/* <td > <span className='info_head'>Company:</span> {user.companyName}</td> */}
                            </tr>
                            <tr>
                                <td>
                                    <span className='info_head'>Email:</span>
                                    <a href={`mailto:${user.data.email}`} style={{ textDecoration: 'none', color: '#000' }}>
                                        {user.data.email}
                                    </a>
                                </td>
                                <td style={{ textAlign: 'left' }}>
                                    <span className='info_head'>Mobile:</span>
                                    <a href={`tel:+91${user.data.phone}`} style={{ textDecoration: 'none', color: '#000' }}>
                                        +91{user.data.phone}
                                    </a>
                                </td>
                            </tr>

                        </tbody>
                    </Table>



                </Col>
            </Row>

            {/* Education */}
            {/* <Row style={{ color: '#000' }}>

                <Col xs={12} md={4} style={{ textAlign: 'center', fontWeight: '800', marginTop: '10px', fontSize: '25px' }} >
                    <div>
                        <p style={{ marginTop: '200px' }}>
                            Education
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={8} style={{ textAlign: 'center', marginBottom: '10px', marginTop: '30px' }} >
                    <div style={{ marginTop: '50px', }}>
                        <h5 className='education_head'>Primary Education</h5>
                        <p className='edu_content'>
                            I got my primary education {user.primary_education} from an {user.institutename1} <br></br>
                            <br></br>
                        </p>


                        <h5 className='education_head'>Secondary Education</h5>
                        <p className='edu_content'>
                            "I pursued my {user.secondary_education} from {user.institutename2}
                            <br></br>

                        </p>

                     
                    </div>
                </Col>
            </Row> */}
        </Container>


    );
};

export default Show;
// <div className="showpage">
//     <div>
//         <h1>This is my Information</h1>
//     </div>
//     <div style={{ width: '50%' }}>
//         {user.data ? (
//             <>
//                 <Card className="show-card">
//                     <p>Name: {user.data.name}</p>
//                     <p>Age: {user.data.age}</p>
//                     <p>Email: {user.data.email}</p>
//                     <p>Phone: {user.data.phone}</p>
//                     <p>Address: {user.data.address}</p>
//                 </Card>
//             </>
//         ) : (
//             <p>No user information found.</p>
//         )}
//     </div>
// </div>