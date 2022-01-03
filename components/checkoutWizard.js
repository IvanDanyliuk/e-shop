import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

export default function CheckoutWizard({ activeStep = 0 }) {
    const steps = ['Login', 'Shipping Address', 'Payment Method', 'Place Order'];
    return (
       <Stepper activeStep={activeStep} alternativeLabel>
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
