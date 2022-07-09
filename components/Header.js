import React from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='header'>
        <h1>I am a Header</h1>
        <MenuSharpIcon />
        <Image src="/logo.avif" width={80} height={80} alt="islanders-logo" />
        <input type="text" />
        <SearchSharpIcon />
        <VideoCallSharpIcon />
        <AppsSharpIcon />
        <NotificationsActiveIcon />
    </header>
  )
}

export default Header