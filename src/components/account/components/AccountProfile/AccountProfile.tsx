import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardActions,
    CardContent,
    Avatar,
    Typography,
    Divider,
    Button,
    LinearProgress,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    details: {
        display: 'flex',
    },
    avatar: {
        marginLeft: 'auto',
        height: 110,
        width: 100,
        flexShrink: 0,
        flexGrow: 0,
    },
    progress: {
        marginTop: (theme as any).spacing(2),
    },
    uploadButton: {
        marginRight: (theme as any).spacing(2),
    },
}));

const AccountProfile = (props: any) => {
    const { className, ...rest } = props;

    const classes = useStyles();

    const user = {
        name: 'Ivan N.',
        city: 'Paris',
        country: 'France',
        timezone: '',
        avatar: '/images/avatars/avatar_11.png',
    };

    return (
        <Card {...rest} className={clsx(classes.root, className)}>
            <CardContent>
                <div className={classes.details}>
                    <div>
                        <Typography gutterBottom variant="h2">
                            Ivan Naluznyi
                        </Typography>
                        <Typography
                            className={(classes as any).locationText}
                            color="textSecondary"
                            variant="body1"
                        >
                            {user.city}, {user.country}
                        </Typography>
                        <Typography
                            className={(classes as any).dateText}
                            color="textSecondary"
                            variant="body1"
                        >
                            {moment().format('hh:mm A')} ({user.timezone})
                        </Typography>
                    </div>
                    <Avatar className={classes.avatar} src={user.avatar} />
                </div>
                <div className={classes.progress}>
                    <Typography variant="body1">
                        Complétude du profil: 70%
                    </Typography>
                    <LinearProgress value={70} variant="determinate" />
                </div>
            </CardContent>
            <Divider />
            <CardActions>
                <Button
                    className={classes.uploadButton}
                    color="primary"
                    variant="text"
                >
                    Upload image
                </Button>
                <Button variant="text">Supprimé picture</Button>
            </CardActions>
        </Card>
    );
};

AccountProfile.propTypes = {
    className: PropTypes.string,
};

export default AccountProfile;
