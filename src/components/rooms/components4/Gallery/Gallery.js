import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';

const Gallery = () => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: 'https://i.imgur.com/L4GU6qd.jpg',
      source: 'https://i.imgur.com/L4GU6qd.jpg',
      rows: 2,
      cols: 1,
    },
    {
      src: 'https://i.imgur.com/dd5Ulxk.jpg',
      source: 'https://i.imgur.com/dd5Ulxk.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://i.imgur.com/nshrMbe.jpg',
      source: 'https://i.imgur.com/nshrMbe.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://i.imgur.com/8KQOQQl.jpg',
      source: 'https://i.imgur.com/8KQOQQl.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://i.imgur.com/ekDuK85.jpg',
      source: 'https://i.imgur.com/ekDuK85.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://i.imgur.com/u7pCBhU.jpg',
      source: 'https://i.imgur.com/u7pCBhU.jpg',
      rows: 0,
      cols: 0,
    },
    {
      src: 'https://i.imgur.com/3UQwwFL.jpg',
      source: 'https://i.imgur.com/3UQwwFL.jpg',
      rows: 0,
      cols: 0,
    },
    {
      src: 'https://i.imgur.com/Sz8k4c2.jpg',
      source: 'https://i.imgur.com/Sz8k4c2.jpg',
      rows: 0,
      cols: 0,
    },
    {
      src: 'https://i.imgur.com/zxVZYaQ.jpg',
      source: 'https://i.imgur.com/zxVZYaQ.jpg',
      rows: 0,
      cols: 0,
    },
    {
      src: 'https://i.imgur.com/KrpLbPt.jpg',
      source: 'https://i.imgur.com/KrpLbPt.jpg',
      rows: 0,
      cols: 0,
    },
    {
      src: 'https://i.imgur.com/TMQGxVE.jpg',
      source: 'https://i.imgur.com/TMQGxVE.jpg',
      rows: 0,
      cols: 0,
    },
    {
      src: 'https://i.imgur.com/vwLiUMw.jpg',
      source: 'https://i.imgur.com/vwLiUMw.jpg',
      rows: 0,
      cols: 0,
    },
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length - 1);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
          gutterBottom
          color={'text.secondary'}
          align={'center'}
        >
          Gallery
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          See more of our Deluxe Family House
        </Typography>

      </Box>
      <Box display={'flex'} justifyContent={'flex-end'} marginBottom={2}>
        <Button
          color="primary"
          size="large"
          endIcon={
            <svg
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          }
          onClick={() => openLightbox(0)}
        >
          See more pictures of this room
        </Button>
      </Box>
      <Box>
        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={isMd ? 300 : 220}
          gap={isMd ? 16 : 8}
        >
          {photosToShow.map((item, i) => (
            item.rows != 0 ?
            <ImageListItem
              key={i}
              cols={isMd ? item.cols || 1 : 2}
              rows={isMd ? item.rows || 1 : 1}
            >

              <LazyLoadImage
                  height={'100%'}
                  width={'100%'}
                  src={item.src}
                  alt="..."
                  effect="blur"
                  onClick={() => openLightbox(i)}
                  style={{
                    objectFit: 'cover',
                    filter:
                      theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                    cursor: 'pointer',
                    borderRadius: 8,
                  }}
                /> 

              
              
            </ImageListItem>
            : null
          ))}
        </ImageList>
      </Box>
      {viewerIsOpen && (
        <Lightbox
          mainSrc={photos[currentImage].src}
          nextSrc={photos[(currentImage + 1) % photos.length].src}
          prevSrc={
            photos[(currentImage + photos.length - 1) % photos.length].src
          }
          onCloseRequest={() => closeLightbox()}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % photos.length)
          }
          reactModalStyle={{ overlay: { zIndex: 1500 } }}
        />
      )}
    </Box>
  );
};

export default Gallery;
