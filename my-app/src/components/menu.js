// import React, { useState } from 'react';
import burgerImage from './burger.jpeg';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Card, Button } from 'react-bootstrap';
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// function Menu() {
//     const [totalPrice, setTotalPrice] = useState(0);
//     const [quantity, setQuantity] = useState(0);
//     const items = [
//         {
//             title: "Burger",
//             description: "Enjoy our delicious burger made with fresh ingredients and served with your choice of toppings.",
//             price: 400
//         },
//         {
//             title: "Pizza",
//             description: "Savor the classic flavors of our signature pizza, crafted with a crispy crust, rich tomato sauce, and a generous topping of gooey cheese.",
//             price: 450
//         },
//         {
//             title: "Sandwich",
//             description: "Delight in our hearty sandwich made with premium meats, fresh vegetables, and artisanal bread.",
//             price: 350
//         }
//     ];
//     function increment() {
//         const newValue = quantity + 1;
//         setQuantity(newValue);
//         updateTotalPrice(newValue);
//     }

//     function decrement() {
//         if (quantity > 0) {
//             const newValue = quantity - 1;
//             setQuantity(newValue);
//             updateTotalPrice(newValue);
//         }
//     }

//     function updateTotalPrice(newQuantity) {
//         const price = 400; // Price per item
//         const total = price * newQuantity;
//         setTotalPrice(total);
//     }

//     function handleSubmit() {
//         if (quantity === 0) {
//             alert("No items added");
//         } else {
//             alert("Order placed. Total price is: ₹" + totalPrice);
//             // Handle form submission here
//         }
//     }

//     return (
//         <div className="container">
//             <div className="row">
//                 {items.map((item, index) => (
//                     <div key={index} className="col-md-4">
//                         <Card style={{ width: '18rem' }}>
//                             <Card.Img variant="top" src={burgerImage} />
//                             <Card.Body>
//                                 <Card.Title>{item.title}</Card.Title>
//                                 <Card.Text>
//                                     {item.description}
//                                 </Card.Text>
//                                 <Card.Text>Price: ₹{item.price}</Card.Text>
//                                 <Button variant="primary">Add to Cart</Button>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Menu() {
  return (
    <div>
        <h1>Hi</h1>
    </div>
  );
}

export { Menu };
