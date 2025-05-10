import React from "react";
import Navbar from "../components/Navbar";
import { Box, Container, Divider, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Navbar />
      <Container  sx={{ mt: 10,ml:5,maxWidth:"90%"}}>
        <Typography variant="h4" gutterBottom >About This App</Typography>
        <p>
          This Loan calculator App is a mordern, single-page web application
          built using <strong> React Js </strong>and <strong>Material UI</strong> . It allows users to calculate
          loan EMIs(Equated Monthly Installments), view a detailed amortization
          schedule, and see real-time currency conversions of their EMI using
          live exchange rates.
        </p>
        <Divider sx={{mt:3,mb:3}}/>  
        <Typography variant="h4" gutterBottom>Features</Typography>

        <ul>
          <li>Loan EMI calculation using standard financial formulas</li>
          <li>Dynamic amortization schedule table with monthly breakdown</li>
          <li>
            Real-time currency conversion of EMI using a live exchange rate API
          </li>
          <li>Paginated exchange rate table for 160+ currencies</li>
          <li>Dark/Light mode toggle for a customizable experience</li>
          <li>Collapsible header navigation on mobile screens</li>
          <li>Fully responsive Ul built with Material Ul</li>
        </ul>
        <Divider sx={{mt:3,mb:3}}/>  

        <Typography variant="h4" gutterBottom>Technologies Used</Typography>
        <ul>
          <li> <strong>React</strong>  (Hooks, Routing, Context API)</li>
          <li> <strong>Material UI</strong>  for styling and responsive components</li>
          <li> <strong>Exchange Rate API</strong>  for real-time currency conversion</li>
        </ul>
        <Divider sx={{mt:3,mb:3}}/>  


        <Typography variant="h4" gutterBottom>EMI Formula Used</Typography>
        <p>
          The EMI (Equated Monthly Installment) is calculated using the standard
          formula:
        </p>

        <p className="formula">
          EMI = [P × R × (1+R)<sup>N</sup>] / [(1+R)<sup>N</sup> - 1]
        </p>
        <p>Where:</p>
        <ul style={{marginLeft:"5%",marginBottom:"20px"}}>
          <li> <strong>P = </strong> Principal loan amount</li>
          <li> <strong>R = </strong> Monthly interest rate (annual rate /12/100)</li>
          <li> <strong>N =</strong>  Loan duration in months</li>
        </ul>
        
      </Container>
    </>
  );
};

export default About;
