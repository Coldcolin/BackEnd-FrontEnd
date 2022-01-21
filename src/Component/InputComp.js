import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import styled, { createGlobalStyle } from "styled-components"
import { myName, myEmail} from "./Global/InputReducer"
import axios from "axios"
import {addData} from "./Global/BackendREducer"

const InputComp = () => {
    const dispatch = useDispatch()
    const getData = useSelector(state => state.BackendREducer.dataFile)
    // const [getData, setGetData]= useState([])
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const fetchData = async () =>{
        const result = await axios.get("http://localhost:4000/api/user")
        if (result){
            // setGetData(result.data.data)
            dispatch(addData(result.data.data))
        }
    }
    const pusToBE = async () =>{
        const dataFile= {name, email}
        await axios.post("http://localhost:4000/api/user", dataFile)
    }

    useEffect(()=>{
        fetchData()
    }, [])
    return (
        <Container>
            <Wrapper>
                <Card>
                    <Input placeholder="Name" value={name} onChange={(e) =>{
                        setName(e.target.value)
                    }}/>
                    <Input placeholder="Email" value={email} onChange={(e) =>{
                        setEmail(e.target.value)
                    }}/>
                    <Submit onClick={()=>{
                        console.log("Button Clicked:", name, email)
                        pusToBE()
                        window.location.reload()
                    }}>Submit</Submit>
                    {
                        getData?.map(({_id, email, name})=>(
                            <Display key={_id}>
                                <Name>{name}</Name>
                                <Email>{email}</Email>
                            </Display>
                        ))
                    }
                </Card>
            </Wrapper>
        </Container>
    )
}

export default InputComp

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 50px;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Submit = styled.div`
    width: 150px;
    height: 30px;
    color: white;
    background-color: lightBlue;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        cursor: pointer;
    }
`
const Card = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
`
const Input = styled.input``
const Display = styled.div`
    width: 200px;
    height: 150px;
    background-color: grey;
    margin: 10px;
`
const Name = styled.div``
const Email = styled.div``
