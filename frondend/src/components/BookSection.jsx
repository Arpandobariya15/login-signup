import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BookSection = ({ data }) => {
    return (
        <div className='d-flex justify-content-around align-items-center flex-wrap '>
            {data && data.map((item, inedx) => (
                <div className='mb-5 mt-3' >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title style={{fontSize:"17px"}}>{item.bookname}</Card.Title>
                            <Card.Text><b>Author -</b> {item.author}</Card.Text>
                            <Card.Text><b>Price - </b>Rs.{item.price}/-</Card.Text>
                            <Button variant="primary" >Update</Button>
                            <Button variant="danger" onClick={deletebook} className='mx-3'>Delete</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default BookSection;
