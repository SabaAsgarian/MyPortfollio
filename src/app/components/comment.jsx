"use client"
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorIcon from '@mui/icons-material/Error';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';
import { TextField, Button, Box } from '@mui/material';
import Link from 'next/link';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
// Styled components
const StyledForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
});

const WhiteTextField = styled(TextField)({
    backgroundColor: 'transparent',
    borderRadius: '4px',
    fontFamily: 'lor',
    '& .MuiInputBase-input': {
        color: 'white', // Text color
    },
    '& .MuiInputLabel-root': {
        color: 'white', // Label color
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white', // Border color
        },
        '&:hover fieldset': {
            borderColor: 'white', // Hover border color
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white', // Focused border color
        },
    },
});

const StyledButton = styled(Button)({
    backgroundColor: 'transparent',
    color: 'white',
    fontFamily: 'sr',
    border: '1px solid white',
    borderRadius: '50px',
    '&:hover': {
        backgroundColor: '#b2b3b3',
        color: 'black'
    },
});

export default function Signup() {
    const [showpass, setShowpass] = useState(true);
    const [showpass2, setShowpass2] = useState(true);
    const showic = useRef();
    const showic2 = useRef();

    const formik = useFormik({
        initialValues: {

            email: '',
            text: '',

        },
        validationSchema: Yup.object({

            email: Yup.string()
                .email('Please enter a valid email address.')
                .required(`What's your Email address?`),
            text: Yup.string()
                .min(3, 'Must be 3 characters or More')


        }),
        onSubmit: values => {
            fetch('https://66f6fe7ab5d85f31a341c0a5.mockapi.io/comments', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(values)
            }).then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(task => {
                alert('Thanks We Have Recieved Your Massage ,Get It Back To You As Soon As Possible');

            });
        },
    });





    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,fontFamily:'sr'}}>
                <h1 className='h'>Send Me Massage</h1>
            </Box>
           
            <Box display="flex" flexWrap="wrap" justifyContent="space-between" gap={2}>
                <Box flexBasis="100%">
                    <label className='w-full pt-[15px] font-pr font-extrabold' htmlFor="email">Email Address:</label><br/>
                    <WhiteTextField
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Enter Your Email'
                        autoComplete='off'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Box>
                <Box flexBasis="100%">
                    <label className='w-full pt-[15px] font-pr font-extrabold' htmlFor="text">Your Massage:</label><br />
                    <textarea
                        id="text"
                        name="text"
                        placeholder='Write Your Message'
                        autoComplete='off'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.text}
                        rows={4} // adjust the number of rows as needed
                        style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            fontFamily: 'lor', // optional, adjust font family as needed
                            border: '1px solid white', // add a white border
                            padding: '10px', // add some padding
                            borderRadius: '4px', // add a rounded corner
                        }}
                    />
                </Box>
            </Box>

            <StyledButton type="submit" variant="contained"  >
                Send Your Massage
            </StyledButton>


        </StyledForm>
    );
}