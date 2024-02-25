import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Router from 'next/router';
import { Container } from './style';
const options = [
    'Inicio',
    'Falha na dieta',
    'Serviços',
    'Sobre mim',
    'Método Nathan',
    'Exames',
    'Perguntas Frequentes',
    'Depoimentos',
];

const ITEM_HEIGHT = 200;

export default function LongMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [element, setElement] = React.useState("")
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };
    const handleClose = (value) => {
        setAnchorEl(null);
        if (typeof (value) == 'string') {
            setElement(value)
            let anchor = value.split(" ")[0]
            Router.push(`/#${anchor}`)

        }
    };

    return (
        <div>
            <Container>            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}

            >
                <MoreVertIcon
                />
            </IconButton>

                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '25ch',
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={() => handleClose(option)}>
                            {option == element ?
                                <p style={{ textDecoration: 'underline', color: ' #CDB97A' }}>{option}</p>
                                : <p>{option}</p>}
                        </MenuItem>
                    ))}
                </Menu>
            </Container>
        </div>
    );
}