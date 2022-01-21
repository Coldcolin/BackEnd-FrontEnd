import React, {useState} from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import Body from "./Body"
import InputComp from "./InputComp"
import { addCounter, minusCounter } from "./Global/MainGlobal"

const Buttons = () => {
    const dispatch = useDispatch()
    const [counter, setCounter] = useState(0);

    const myValue = useSelector((state) => state.myReducer.value);

    const add = () => {
        setCounter(counter + 1);
    };
    const minus = () => {
        setCounter(counter - 1);
    };
    return (
        <Container >
        <InputComp />
        {/* <Body counter={counter}/> */}
            <Button>
                {/* <Plus onClick={() => {dispatch(addCounter())}}>+</Plus>
                <Minus onClick={() => {dispatch(minusCounter())}}>-</Minus> */}
            </Button>
        </Container>
    )
}

export default Buttons

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`
const Button = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Plus = styled.div`
    width: 100px;
    height: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    margin: 10px;
    :hover{
        cursor: pointer;
    }
`
const Minus = styled.div`
    width: 100px;
    height: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    background-color: blue;
    :hover{
        cursor: pointer;
    }
`
