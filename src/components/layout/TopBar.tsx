import {NavLink} from 'react-router-dom';
import classes from './TopBar.module.css';
import {Drawer, IconButton, List, ListItem, ListItemText, Stack} from "@mui/material";
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {useIsMobile} from "../../Utils";

const links = [
    {link: '/home', label: 'Home'},
    {link: '/projects', label: 'Projects'},
    {link: '/resume', label: 'Resume'},
    {link: '/skills', label: 'Skills'},
    {link: '/contact', label: 'Contact'},

];

export default function TopBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useIsMobile();

    const handleToggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const itemsLinks = links.map(({link, label}) => (
        <NavLink
            key={label}
            to={link}
            className={({isActive}) =>
                isActive ? `${classes.link} ${classes.active}` : classes.link
            }
            onClick={() => setDrawerOpen(false)} // close drawer on click
        >
            {label}
        </NavLink>
    ));

    const itemsHamburger = links.map(({ link, label }) => (
        <NavLink
            key={link}
            to={link}
            className={({ isActive }) => (isActive ? 'active' : '')}
            style={{ textDecoration: 'none' }}
        >
            <ListItem
                button
                sx={{
                    color: 'white',
                    backgroundColor: 'transparent',
                    '&.active': {
                        color: 'white',
                        backgroundColor: '#ff9a01',
                    },
                    '&:hover': {
                        backgroundColor: '#444',
                        color: '#ff9a01',
                    },
                }}
                className="your-listitem-class"
            >
                <ListItemText primary={label} />
            </ListItem>
        </NavLink>
    ));

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                {isMobile ? (
                    <>
                        <div className={classes.side}>
                            <img src="/logo.png" alt="Logo" className={classes.logo}/>
                        </div>
                        <div className={classes.center}>
                            <IconButton onClick={handleToggleDrawer} color="inherit">
                                <MenuIcon style={{color: 'white'}}/>
                            </IconButton>
                            <Drawer anchor="right" open={drawerOpen} onClose={handleToggleDrawer}>
                                <List>
                                    {itemsHamburger}
                                </List>
                            </Drawer>
                        </div>
                    </>
                ) : (
                    <div className={classes.center}>
                        <img src="/logo.png" alt="Logo" className={classes.logo}/>
                        <Stack direction="row" spacing={2}>
                            {itemsLinks}
                        </Stack>
                    </div>
                )}
            </div>
        </header>
    );
}

