import React from 'react'
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>Next E-Store</title>
            </Head>
            <AppBar position='static' className={classes.navbar}>
                <Toolbar>
                    <Typography>e-store</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>
                    All rights reserved. E-Store. 2021
                </Typography>
            </footer>
        </div>
    )
}
