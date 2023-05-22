import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from './AppBar';

function Header() {

  return (
    <div>
      <AppBar position="fixed" sx={{backgroundColor:"#111111"}}>
          <Box sx={{ flex: 1 , justifyContent:'space-between'}} />
   
            <Link
              variant="h6"
              underline="none"
              color="#E9AB17"
              href="/"
              sx={{ fontSize: 24, alignContent:'center', alignSelf:'center' }}
            >
              {'Notícias J8'}
            </Link>
           
            <Box sx={{ flex: 1, display: 'flex' , justifyContent:'space-between'}}>
         

            <Link
              variant="h6"
              underline="none"
              color="#fff"
              href="https://prisma.r7.com/todos-os-blogs"
              sx={{ fontSize: 12, alignContent:'center', alignSelf:'center', margin:'10px' }}
            >
              {'BLOGS'}
            </Link>

            <Link
              variant="h6"
              underline="none"
              color="#fff"
              href="https://entretenimento.r7.com/"
              sx={{ fontSize: 12, alignContent:'center', alignSelf:'center', margin:'10px' }}
            >
              {'ENTRETENIMENTO'}
            </Link>

            <Link
              variant="h6"
              underline="none"
              color="#fff"
              href="https://esportes.r7.com/"
              sx={{ fontSize: 12, alignContent:'center', alignSelf:'center', margin:'10px' }}
            >
              {'ESPORTES'}
            </Link>

            
            <Link
              variant="h6"
              underline="none"
              color="#fff"
              href="https://noticias.r7.com/"
              sx={{ fontSize: 12, alignContent:'center', alignSelf:'center', margin:'10px' }}
            >
              {'JR 24h'}
            </Link>

            <Link
              variant="h6"
              underline="none"
              color="#fff"
              href="https://lifestyle.r7.com/"
              sx={{ fontSize: 12, alignContent:'center', alignSelf:'center', margin:'10px' }}
            >
              {'LIFESTYLE'}
            </Link>

            <Link
              variant="h6"
              underline="none"
              color="#fff"
              href="https://monitor7.r7.com/"
              sx={{ fontSize: 12, alignContent:'center', alignSelf:'center', margin:'10px' }}
            >
              {'MONITOR7'}
            </Link>

            <Link
              variant="h6"
              underline="none"
              color="#fff"
              href="https://recordtv.r7.com/"
              sx={{ fontSize: 12, alignContent:'center', alignSelf:'center', margin:'10px' }}
            >
              {'RECORD TV'}
            </Link>

            <Link
              variant="h6"
              underline="none"
              color="#fff"
              href="https://rpet.r7.com/"
              sx={{ fontSize: 12, alignContent:'center', alignSelf:'center', margin:'10px' }}
            >
              {'RPET'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              color="#fff"
              href="https://receitas.r7.com/"
              sx={{ fontSize: 12, alignContent:'center', alignSelf:'center', margin:'10px' }}
            >
              {'R7 RECEITAS'}
            </Link>


           
           
             
         
            </Box>
            
      </AppBar>
     
    </div>
  );
}

export default Header;