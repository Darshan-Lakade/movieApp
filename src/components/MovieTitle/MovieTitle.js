import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './MovieTitle.css';

const MovieTitle = () => {
    return(
        <div className="bg-primary" style={{boxShadow:'11px 14px 25px -5px rgba(0,0,0,0.75)'}}>
            <Container className="container p-3">
                <Row>
                    <Col className="col-sm-12 container">
                        <h1 className="d-flex justify-content-center align-self-center">Movie Collection</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MovieTitle;