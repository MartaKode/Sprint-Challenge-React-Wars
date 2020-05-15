// Write your Character component here
import React, { useState, useEffect } from 'react';
import {Button, Flexus, Container, SmallContainer} from '../styles.js'
import rick from '../RIck.png'
import morty from '../Morty.png'


const Character = (props) => {
    // console.log(props)
    // console.log(props.info)
    return (
    <Container background='papayawhip' img={morty} shadow='2px 1px 1px skyblue'>
      <div className='character'>
        <div className='name'> Name:  {props.info.name} </div>
<Container weight='normal'>
        <div className='app-logo'> <img src={props.info.image} /></div>
        <SmallContainer >
        <p>Gender: {props.info.gender}</p>
        <p>Species: {props.info.species}</p>
        <p>Status: {props.info.status}</p>
        <p>Created: {props.info.created}</p>
        <p>location: {props.info.location.name}</p>
        </SmallContainer>
        </Container>
      </div>
      </Container>
    )
  }

  export default Character