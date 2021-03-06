import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import { 
    Button, 
    Card, 
    Grid, 
    Link, 
    List, 
    ListItem, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Typography 
} from '@mui/material';
import NextLink from 'next/link';
import Image from 'next/image';
import { Store } from '../utils/store'
import { useRouter } from 'next/router';
import useStyles from '../utils/styles';
import CheckoutWizard from '../components/CheckoutWizard';

function PlaceOrder() {
    // const classes = useStyles();
    // const router = useRouter();
    // const { state, dispatch } = useContext(Store);
    // const { cart: { cartItems, shippingAddress, paymentMethod } } = state;

    // const round2 = num => Math.round(num * 100 + Number.EPSILON) / 100;
    // const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
    // const shippingPrice = itemsPrice > 200 ? 0 : 15;
    // const taxPrice = round2(itemsPrice * 0.2);
    // const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

    // useEffect(() => {
    //     if(!paymentMethod) {
    //         router.push('/payment');
    //     } else {
    //        console.log(shippingAddress) 
    //     }
    // }, []);

    return (
        <Layout title='Shopping Cart'>
            <CheckoutWizard activeStep={4}></CheckoutWizard>
            <Typography component='h1' variant='h1'>Place Order</Typography>
            <Grid container spacing={1}>
                <Grid item md={9} xs={12}>
                    <Card className={classes.section}>
                        <List>
                            <ListItem>
                                <Typography component='h2' variant='h2'>
                                    Shipping Address
                                </Typography>
                            </ListItem>
                        </List>
                        <ListItem>
                            {shippingAddress.fullName}, {shippingAddress.address}, {' '}
                            {shippingAddress.city}, {shippingAddress.postalCode}, {' '},
                            {shippingAddress.country}
                        </ListItem>
                    </Card>
                    <Card className={classes.section}>
                        <List>
                            <ListItem>
                                <Typography component='h2' variant='h2'>
                                    Payment Method
                                </Typography>
                            </ListItem>
                        </List>
                        <ListItem>
                            {paymentMethod}
                        </ListItem>
                    </Card>
                    <Card className={classes.section}>
                        <List>
                            <ListItem>
                                <Typography component='h2' variant='h2'>
                                    Order Items
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Image</TableCell>
                                                <TableCell>Name</TableCell>
                                                <TableCell align='right'>Quantity</TableCell>
                                                <TableCell align='right'>Price</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {cartItems.map(item => (
                                                <TableRow key={item._id}>
                                                    <TableCell>
                                                        <NextLink href={`/product/${item.slug}`} passHref>
                                                            <Link>
                                                                <Image src={item.image} alt={item.name} width={50} height={50}></Image>
                                                            </Link>
                                                        </NextLink>
                                                    </TableCell>
                                                    <TableCell>
                                                        <NextLink href={`/product/${item.slug}`} passHref>
                                                            <Link>
                                                                <Typography>{item.name}</Typography>
                                                            </Link>
                                                        </NextLink>
                                                    </TableCell>
                                                    <TableCell align='right'>
                                                        <Typography>
                                                            {item.quantity}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell align='right'>
                                                        <Typography>${item.price}</Typography>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
                <Grid md={3} xs={12}>
                    <Card  className={classes.section}>
                        <List>
                            <ListItem>
                                <Typography variant='h2'>
                                    Order Summary
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>
                                            Items: 
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography align='right'>
                                            ${itemsPrice}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>
                                            Tax: 
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography align='right'>
                                            ${taxPrice}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>
                                            Shipping: 
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography align='right'>
                                            ${shippingPrice}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>
                                            <strong>Total:</strong> 
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography align='right'>
                                            <strong>${totalPrice}</strong>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button variant='contained' color='primary' fullWidth>Place Order</Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });
