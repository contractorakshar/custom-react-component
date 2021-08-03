import React from 'react'
import styled from 'styled-components';

const CustomButton=(props)=>{
    const {value}=props;
    const Button = styled.button`
        background-color: hsl(240, 56%, 60%);
        border: none;
        padding: 0.5rem 3rem;
        cursor: pointer;
        font-size: 1.5rem;
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        border-radius: 8px;
    
    &:hover{
    color: hsl(240, 56%, 60%);
    background-color: black;
    }
    `;

    const formToggleHandler=()=>{
        
    }
    
return(
    <>
    <Button onClick={formToggleHandler} > {value}
    </Button>
    </>
)
}
export default CustomButton