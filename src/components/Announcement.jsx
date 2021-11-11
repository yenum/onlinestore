import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
`

const Announcement = () => {
    return (
        <Container>
            Free Shipping On Orders Over $100!!
        </Container>
    )
}

export default Announcement
