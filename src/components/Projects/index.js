
import React, { useState } from 'react'
import Styled from 'styled-components'
import Projectcard from '../Cards/Projectcard';

import { projects } from '../../data/constants'


const Container =Styled.div`
dispaly: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 1;
`;

const Wrapper=Styled.div`
max-width: 1350px;
position: relative;

display: flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
width: 100%;
gap: 12px;
padding:10px 0px 100px 0;
`;

const Title=Styled.div`
font-size: 42px;
font-weight: 600;
text-align: center;
margin-top: 20px;
color: ${({ theme }) => theme.text_primary};


@media (max-width: 768px) {
  margin-top: 12px;
  font-size: 32px;
}
`;
const Desc = Styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;
const ToggleButtonGroup=Styled.div`
display: flex;
border:1.5px solid ${({theme}) =>theme.primary };
color: ${({ theme }) => theme.primary};
font-size:16px;
border-radius: 12px;
font-weight: 500;
margin:22px  0px;

@media (max-width: 768px) {
    font-size: 12px;
}
`;

const ToggleButton =Styled.div`
Padding:12px;
cursor:pointer;
border-radius:8px 18px;

@media (max-width: 768px) {
    border-radius:4px;
    padding: 6px 8px;
}
`;
const Cardcontainer=Styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 28px;
flex-wrap: wrap;
`;
const Divider = Styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
    `;
//     const ButtonGroup = Styled.div`
//     display: flex;
//     justify-content: flex-end;
//     margin: 12px 0px;
//     gap: 12px;
// `;


const Projects = ({openModal,setOpenModal}) => {
    const [toggle, setToggle] = useState('all');
  return (
   
    <Container id='projects'>
   <Wrapper>
                   
    <Title>Projects</Title>
    <Desc>
    I have worked on a wide range of projects. AS a Frontend Developer using ReactJS , HTML , CSS , JavaScript. Here are some of my projects.
    </Desc>
  <ToggleButtonGroup>
  <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
    
  </ToggleButtonGroup>
   
    
                   
    <Cardcontainer>
    {projects.map((project) => 
  <Projectcard  project={project} openModal={openModal} setOpenModal={setOpenModal}/>
 )}
    </Cardcontainer>
    </Wrapper>
   </Container> 
   
   
   
  )
}

export default Projects