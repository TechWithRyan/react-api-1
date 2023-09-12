import React from 'react'
import "../Pages/Store.css";
import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../Components/ProductCard';

const Store = () => {
    return (
        <>
            <div className="container">

                <h1>Welcome to the store.</h1>
                <Row xs={1} md={3} className="g-4">
                    {productsArray.map((product, idx) => (

                        <Col align="center" key={idx}>
                            <ProductCard product={product} />
                        </Col>
                    ))}

                </Row>
            </div>
        </>
    )
}

export default Store;
