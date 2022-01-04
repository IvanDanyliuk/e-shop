import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import useStyles from '../utils/styles';

export default function CheckoutWizard({ activeStep = 0 }) {
    const classes = useStyles();
    const steps = ['Login', 'Shipping Address', 'Payment Method', 'Place Order'];
    return (
       <Stepper className={classes.transparentBackground} activeStep={activeStep} alternativeLabel>
           {
               steps.map(step => (
                   <Step key={step}>
                       <StepLabel>
                           {step}
                       </StepLabel>
                   </Step>
               ))
           }
       </Stepper>
    );
}
