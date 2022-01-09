import React from 'react';
import { Button } from 'react-bootstrap';

export function CustomButton( {text, clickFun, ...props} ) {

    return (
        <Button variant="primary" onClick={clickFun} {...props}>{text}</Button>
    );
}
