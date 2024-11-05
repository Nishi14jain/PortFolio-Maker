import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import css from "../css/style.css"; 
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  const createPage = ()=>{
    navigate('/create'); 
  }
  const showPage = () =>{
    navigate('/show'); 
  }
  return (
      <div className="index_btn"> 
        <Button className="create-btn" onClick={()=>createPage()}> 
          Create
        </Button>
        <Button className="create-btn" onClick={() =>showPage()}> 
          Show 
        </Button>
      </div>
  );
};

export default Home;