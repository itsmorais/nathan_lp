import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from './style';


export default function BasicSelect({ question, answer = "" }) {
  let answers = []
  if (answer.includes("\n")) {
    answers = answer.split("\n")
  }
  return (
    <Container >

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"

        >
          <Typography>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={"#CDB97A"} >
            {answers.length > 1 ?
              answers.map((res) => (
                <>
                  <p key={res}><span>{res}</span></p>
                  <br />

                </>

              ))
              : <p><span>{answer}</span></p>
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
