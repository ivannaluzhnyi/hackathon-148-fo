/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AuthService from '../../../../../../../services/auth-service';

const useStyles = makeStyles(theme => ({
    root: {},
    item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0,
    },
    button: {
        color: colors.blueGrey[800],
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        fontWeight: (theme as any).typography.fontWeightMedium,
    },
    icon: {
        color: (theme as any).palette.icon,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        marginRight: (theme as any).spacing(1),
    },
    active: {
        color: (theme as any).palette.primary.main,
        fontWeight: (theme as any).typography.fontWeightMedium,
        '& $icon': {
            color: (theme as any).palette.primary.main,
        },
    },
}));

const SidebarNav = (props: any) => {
    const { pages, className, ...rest } = props;

    const classes = useStyles();

    return (
        <List {...rest} className={clsx(classes.root, className)}>
            {pages.map((page: any) => (
                <ListItem
                    className={classes.item}
                    disableGutters
                    key={page.title}
                >
                    <Link to={page.href}>
                        <Button className={classes.button}>
                            <div className={classes.icon}>{page.icon}</div>
                            {page.title}
                        </Button>
                    </Link>
                </ListItem>
            ))}

            <ListItem className={classes.item} disableGutters>
                <Link onClick={() => AuthService.logout()} to="/">
                    Logount
                </Link>
            </ListItem>
        </List>
    );
};

SidebarNav.propTypes = {
    className: PropTypes.string,
    pages: PropTypes.array.isRequired,
};

export default SidebarNav;
