import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {CustomButton} from "../button/button";

function Counter() {

    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState('0');

    const incrementHandler = () => setCount( c => c+parseInt(amount, 10) );
    const decrementHandler = () => setCount( c => c-parseInt(amount, 10) );
    const submitHandler = () => console.log(amount);
    const amountHandler = (event) => setAmount(event.target.value);

    return (
        <div className="App">
            <header className="App-header">
                <h1>{count}</h1>
                <CustomButton text={'Inc'} clickFun={incrementHandler}/>
                <CustomButton text={'Dec'} clickFun={decrementHandler}/>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" placeholder="Enter amount" value={amount} onChange={amountHandler} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <CustomButton variant="primary" text={'Submit'} clickFun={submitHandler}/>
                </Form>
            </header>
        </div>
    );
}

export default Counter;
