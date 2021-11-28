/* eslint-disable default-case */
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import { convertTime } from '../';


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return (
            <div className={styles.loading}>
                Memuat...
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Terinfeksi</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator='.' />
                        </Typography>
                        <Typography color='textSecondary'>{convertTime(new Date(lastUpdate))}</Typography>
                        <Typography variant='body2'>Jumlah kasus aktif COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Pulih</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={recovered.value} duration={2.5} separator='.' />
                        </Typography>
                        <Typography color='textSecondary'>{convertTime(new Date(lastUpdate))}</Typography>
                        <Typography variant='body2'>jumlah orang pulih dari COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Meninggal</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={deaths.value} duration={2.5} separator='.' />
                        </Typography>
                        <Typography color='textSecondary'>{convertTime(new Date(lastUpdate))}</Typography>
                        <Typography variant='body2'>Jumlah orang meninggal karena COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>

        </div>
    )
}

export default Cards;