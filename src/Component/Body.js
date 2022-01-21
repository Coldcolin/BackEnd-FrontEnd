import React from 'react'
import styled from "styled-components"
import {  useSelector } from "react-redux"

const Body = ({counter}) => {
    
    const myValue = useSelector((state) => state.myReducer.value);
    return (
        <Container>
            <Wrapper>
            <View>{myValue}</View>
            </Wrapper>
        </Container>
    )
}

export default Body

const Container = styled.div`
    width: 100%;
    height: 50vh;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const View = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    font-size: 50px;
`

