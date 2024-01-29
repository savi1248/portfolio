import React from 'react'
import Styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
 
import styled from 'styled-components';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';


const Container =Styled.div`
dispaly: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 1;
padding:50px 0px;
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
margin-top: 10%;
color: ${({ theme }) => theme.text_primary};
@media (max-width: 768px) {
  margin-top: 10%;
  font-size: 32px;
}
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;
const TimeLineSection = styled.div`
  width:100%;
  max-width:100px;
  marfin-top:10px;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  gap:12px;

`;

const Experience = () => {
  return (
    <Container id='experience'>
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
        My work experience as a Frontend Developer and <br />
         worked on companies as an Intern.
        </Desc>
        <TimeLineSection>
            <Timeline>
                {experiences.map((experience, index) =>(
                  <TimelineItem>
                  <TimelineSeparator>
                  <TimelineDot variant='outlined' color='secondary'/>
                 {index !== experience.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py : "12px" , px: 2}}>
                   <ExperienceCard  experience={experience}/>
                   
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>

        </TimeLineSection>
        </Wrapper>

        </Container>
  )
}

export default Experience