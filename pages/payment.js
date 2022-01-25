import React, { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { Store } from '../utils/store';
import Layout from '../components/Layout';
import CheckoutWizard from '../components/CheckoutWizard';
import useStyles from '../utils/styles';
import { FormControl, FormControlLabel, List, ListItem, RadioGroup, Radio, Typography, Button } from '@mui/material';
import { useSnackbar } from 'notistack';

export default function Payment() {
    const classes = useStyles();
    const router = useRouter();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [paymentMethod, setPaymentMethod] = useState('');
    const { state, dispatch } = useContext(Store);
    const { cart: { shippingAddress } } = state;

    useEffect(() => {
        if(!shippingAddress.address) {
            router.push('/shipping')
        } else {
            setPaymentMethod(Cookies.get('paymentMethod') || '');
        }
    }, []);

    const submitHandler = e => {
        closeSnackbar();
        e.preventDefault();
        if(!paymentMethod) {
            enqueueSnackbar('Payment method is required', { variant: 'error' })
        } else {
            dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod });
            router.push('/placeorder');
        }
    }

    return (
        <Layout title='Payment Method'>
            <CheckoutWizard activeStep={2} />
            <form className={classes.form} onSubmit={submitHandler}>
                <Typography component='h1' variant='h1'>Payment Method</Typography>
                <List>
                    <ListItem>
                        <FormControl component='fieldset'>
                            <RadioGroup 
                                aria-label='Payment Method' 
                                name='paymentMethod' 
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            >
                                <FormControlLabel 
                                    label='PayPal'
                                    value='PayPal'
                                    control={<Radio />}
                                />
                                <FormControlLabel 
                                    label='Stripe'
                                    value='Stripe'
                                    control={<Radio />}
                                />
                                <FormControlLabel 
                                    label='Cash'
                                    value='Cash'
                                    control={<Radio />}
                                />
                            </RadioGroup>
                        </FormControl>
                    </ListItem>
                    <ListItem>
                        <Button fullWidth type='submit' variant='contained' color='primary'>Continue</Button>
                    </ListItem>
                    <ListItem>
                        <Button fullWidth type='button' variant='contained' onClick={() => router.push('/shipping')}>Back</Button>
                    </ListItem>
                </List>
            </form>
        </Layout>
    )
}