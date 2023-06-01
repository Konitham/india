import React from 'react'
import styled from "styled-components"

const Container = styled.div`
height: 70%;
width: 60%;
padding:50px;
display: flex;
align-items: center;
justify-content: center;


`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 250px;
`
const Image = styled.img`
height: 80%;
width: 80%;
`
const Hyd = styled.h1`

`


const Map = () => {
  return (
    <Container>
        <Wrapper>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8d/India_and_Neighbouring_Countries_Map_%28official_borders%29.png"/>
            
        </Wrapper>
    </Container>
  )
}

export default Map