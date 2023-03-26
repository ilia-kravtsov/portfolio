import React from 'react';
import s from './Contacts.module.css'
import {IconButton, TextField} from "@mui/material";

export const Contacts = () => {

    let inputStyle = {width: '80%', height: "30px"}

    return (
        <div className={s.container} >
            <div className={s.titleContainer}>
                <h1 className={s.title}>Сontact me</h1>
            </div>
            <form action="" className={s.form}>
                <TextField variant='outlined' label='Enter your name' sx={inputStyle}></TextField>
                <TextField variant='outlined' label='Enter your phone' sx={inputStyle} type='tel'></TextField>
                <TextField variant='outlined' label='Enter your email' sx={inputStyle}></TextField>
                <textarea placeholder='Enter your comment'></textarea>
                <IconButton color={'primary'} sx={{boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.2)', height: '70px', width: '170px', borderRadius: '10px'}} className={s.button}>Send</IconButton>
            </form>
        </div>
    );
};

