import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import rick from './RIck.png'
import morty from './Morty.png'
import {Button, Flexus, Container, SmallContainer, Title} from './styles.js'
import Character from './components/Character.js' 


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [movieData, setMovieData] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)

      .then(response => {
        //  debugger

        setMovieData(response.data.results)
        // debugger
        console.log(`${movieData} is our data`)
        // debugger
      })
      .catch(error => {
        console.log('I caught an eror')
      })

  }, [pageNumber])

  const nextPage = () => {
    if( pageNumber === 31){
      setPageNumber(30)
    }else{
      setPageNumber(pageNumber + 1)
    }
  }
  const previousPage = () => {
    if (pageNumber === 0) {
      setPageNumber(1)
    } else {
      setPageNumber(pageNumber - 1)
    }

  }


//   const Character = (props) => {
//     // console.log(props)
//     // console.log(props.info)
//     return (
//     <Container background='papayawhip' img={morty} shadow='2px 1px 1px skyblue'>
//       <div className='character'>
//         <div className='name'> Name:  {props.info.name} </div>
// <Container weight='normal'>
//         <div className='app-logo'> <img src={props.info.image} /></div>
//         <SmallContainer >
//         <p>Gender: {props.info.gender}</p>
//         <p>Species: {props.info.species}</p>
//         <p>Status: {props.info.status}</p>
//         <p>Created: {props.info.created}</p>
//         <p>location: {props.info.location.name}</p>
//         </SmallContainer>
//         </Container>
//       </div>
//       </Container>
//     )
//   }


  return (
    <div className="App">

      <Title shadow='silver'>Characters</Title>
   
   
      <Flexus>
      {movieData.map(character => {
        return <Character key={character.id} info={character} />
      })}
      </Flexus>

      <Flexus justify='space-around'>
      <Button onClick={previousPage}>Previous Page</Button>
      <img src= {rick} className='App-logo' style={{width:'50px'}}/>
      <Button onClick={nextPage}>Next Page</Button>
      </Flexus>
    </div>
  );
}

export default App;
