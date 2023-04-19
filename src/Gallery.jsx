import React from 'react'
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
import { Avatar, Button,  IconButton,  ImageList, ImageListItem, ImageListItemBar, ListSubheader } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

export default function Gallery() {
    return (
      <ImageList gap={5} cols={4} sx={{  height: 450, p:10 }}>
        {/* <ImageListItem key="Subheader" cols={4}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem> */}
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            {/* <img
              src={`${item.img}?w=144&fit=crop&auto=format`}
              srcSet={`${item.img}?w=auto&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            /> */}
            <Avatar sx={{width: 140, height: 140}}
                src={`${item.img}?w=144&fit=crop&auto=format`}
            />
            <ImageListItemBar
              title={item.title}
            //   subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }

const itemData = [
  {
    img: 'https://people.com/thmb/-z8a-06FXODEt_ty4df_q-RMHKc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(842x209:844x211):format(webp)/courtney-tillia-1-a133657a871c4756ad1d861136b3a71d.jpg',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://i2-prod.dailystar.co.uk/incoming/article29059596.ece/ALTERNATES/s1200d/0_TAKEN-WITHOUT-PERMISSION-FROM-INSTAGRAM-EDITORIAL-CALL-TO-USE-OnlyFans-star-is-using-her-earnings.jpg',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];