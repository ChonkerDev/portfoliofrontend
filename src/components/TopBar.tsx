import {NavLink} from 'react-router-dom';
import classes from './TopBar.module.css';
import {Stack} from "@mui/material";

const links = [
    {link: '/home', label: 'Home'},
    {link: '/projects', label: 'Projects'},
    {link: '/resume', label: 'Resume'},
    {link: '/workhistory', label: 'Work History'},
    {link: '/contact', label: 'Contact'},

];

export default function TopBar() {
    const items = links.map(({link, label}) => (
        <NavLink
            key={label}
            to={link}
            className={({isActive}) =>
                isActive ? classes.link + ' ' + classes.active : classes.link
            }
        >
            {label}
        </NavLink>
    ));

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <div className={classes.center}>
                    <img src="/logo.png" alt="Logo" className={classes.logo}/>
                    <Stack direction="row" spacing={2}>
                        {items}
                    </Stack>
                </div>
            </div>
        </header>
    );
}

