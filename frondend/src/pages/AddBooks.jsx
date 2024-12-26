import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


const AddBooks = () => {
    const [Data, setData] = useState({
        bookname: "",
        desc:"",
        author:"",
        img:"",
        price:""
    })
    const change = (e)=>{
        const {name,value} = e.target;
        setData({...Data,[name]: value});
    }
    console.log(Data);
    const submit= async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:1000/api/add",Data).then((res)=>alert(res.data.message))
        setData({
            bookname: "",
            desc:"",
            author:"",
            img:"",
            price:""
        });
    }
    
    return (
        <div className='bg-dark d-flex justify-content-center align-items-center' style={{ minHeight: "92vh" }}>
            <Form className='container p-4'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-white'>Book Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Book Name" name='bookname' onChange={change} value={Data.bookname}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-white'>Discription</Form.Label>
                    <Form.Control type="text" placeholder="Enter Discription" name='desc' onChange={change} value={Data.desc}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-white'>Author Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author Name" name='author' onChange={change} value={Data.author}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-white'>Image</Form.Label>
                    <Form.Control type="text" placeholder="Enter Image URL" name='img' onChange={change} value={Data.img}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-white'>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter Price" name='price' onChange={change} value={Data.price}/>
                </Form.Group>
                <Button variant="success" onClick={submit}>Success</Button>
            </Form>
            
        </div>
    );
}

export default AddBooks;
