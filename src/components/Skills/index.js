import React from 'react'
import Styled from 'styled-components'
import { skills } from '../../data/constants';

const Container =Styled.div`
dispaly: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 1;
`;

const Wrapper=Styled.div`
max-width: 1100px;
position: relative;

display: flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
width: 100%;
gap: 12px;
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
const SkillsContainer =Styled.div`
 width: 100%;
 display:flex;
 flex-wrap:wrap;
 margin-top: 30px;
 justify-content: center;

 gap: 30px; 
`;
const Skill =Styled.div`
width:100%;
max-width:420px;
background-color:${({theme}) => theme.card};
border:0.1px solid #854ced;
border-radius:16px;
padding:18px 36px;
 margin: 0px 25px 0 25px;

@media (max-width: 768px) {
  max-width:400px;
  padding:10px 36px;
  }
  @media (max-width: 768px) {
    max-width:330px;
    padding:10px 36px;
    }
`;
const SkillTitle =Styled.div`
font-size:28px;
font-weight:600;
color: ${({theme}) => theme.text_secondary};
margin-bottom:20px;
text-align: center;
`;

const SkillList=Styled.div`
display: flex;
justify-content: center; 
flex-wrap: wrap;
gap: 12px;
margin-bottom: 20px;
`;
const SkillItem=Styled.div`
font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
const SkillImage=Styled.img`
  weight:24px;
  height:24px;
`;



const Skills = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working.</Desc>
        <SkillsContainer>
          {skills.map((item) =>(
            <Skill>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {item.skills.map((skill) => (
                  <SkillItem>
                  <SkillImage src={skill.image} />
                 {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
 </Container>
  )
}

export default Skills