import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';

import { Profile, SidebarNav, UpgradePlan } from './components';
import { getPathnameByUser } from '../../../../../utils/helper';

const useStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
        [(theme as any).breakpoints.up('lg')]: {
            marginTop: 64,
            height: 'calc(100% - 64px)',
        },
    },
    root: {
        backgroundColor: (theme as any).palette.white,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: (theme as any).spacing(2),
    },
    divider: {
        margin: (theme as any).spacing(2, 0),
    },
    nav: {
        marginBottom: (theme as any).spacing(2),
    },
}));

const Sidebar = (props: any) => {
    const { open, variant, onClose, className, ...rest } = props;

    const classes = useStyles();

    const hr = getPathnameByUser();

    const pages = [
        {
            title: 'Dashboard',
            href: `/${hr}/dashboard`,
            icon: <DashboardIcon />,
        },

        {
            title: 'Account',
            href: `/${hr}/account`,
            icon: <AccountBoxIcon />,
        },
        {
            title: 'Settings',
            href: `/${hr}/settings`,
            icon: <SettingsIcon />,
        },
    ];

    return (
        <Drawer
            anchor="left"
            classes={{ paper: classes.drawer }}
            onClose={onClose}
            open={open}
            variant={variant}
        >
            <div {...rest} className={clsx(classes.root, className)}>
                <Profile />
                <Divider className={classes.divider} />
                <SidebarNav className={classes.nav} pages={pages} />
            </div>
        </Drawer>
    );
};

export default Sidebar;
