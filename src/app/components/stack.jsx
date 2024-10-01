"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';
import Image from 'next/image'
import Me from '../components/img/me.png'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  ...theme.applyStyles('dark', {
    backgroundColor: 'transparent',
  }),
}));

export default function BasicStack() {
  return (
    <Box sx={{ width: '100%', my: '5%' }}>
      <Stack spacing={0}>
        <Item>
          <Image src={Me} alt="me" width={40} height={40} style={{borderRadius:'50%'}} />
         
          <Link href='https://www.instagram.com/saba_asgarian_web?igsh=M2Z2dTU3cHFmeW1o&utm_source=qr'>
            <InstagramIcon sx={{ color: 'white', ml: '2%' }} /> {/* Set color here */}
          </Link>
          <Link href='https://www.linkedin.com/in/saba-asgarian-69161088?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
            <LinkedInIcon sx={{ color: 'white', ml: '2%' }} /> {/* Set color here */}
          </Link>
          <Link href='https://github.com/SabaAsgarian'>
            <GitHubIcon sx={{ color: 'white', ml: '2%' }} /> {/* Set color here */}
          </Link>
          <Link href='mailto:computer.sabaa@gmail.com'>
            <MailIcon sx={{ color: 'white', ml: '2%' }} /> {/* Set color here */}
          </Link>
        </Item>
      </Stack>
    </Box>
  );
}