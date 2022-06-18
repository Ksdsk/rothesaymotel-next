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
      src: 'https://i.imgur.com/tLT8sxt.jpg',
      source: 'https://i.imgur.com/tLT8sxt.jpg',
      rows: 2,
      cols: 1,
    },
    {
      src: 'https://i.imgur.com/2kGM4al.jpg',
      source: 'https://i.imgur.com/2kGM4al.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://i.imgur.com/YaeR3uW.jpg',
      source: 'https://i.imgur.com/YaeR3uW.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://i.imgur.com/B1cgIVV.jpg',
      source: 'https://i.imgur.com/B1cgIVV.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://i.imgur.com/vwLiUMw.jpg',
      source: 'https://i.imgur.com/vwLiUMw.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://i.imgur.com/meWHwQ2.jpg',
      source: 'https://i.imgur.com/meWHwQ2.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://i.imgur.com/iFR6IMT.jpg',
      source: 'https://i.imgur.com/iFR6IMT.jpg',
      rows: 2,
      cols: 1,
    },
    {
      src: 'https://i.imgur.com/saWmuwJ.jpg',
      source: 'https://i.imgur.com/saWmuwJ.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://i.imgur.com/Ub5gtSo.jpg',
      source: 'https://i.imgur.com/Ub5gtSo.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://i.imgur.com/HpZQY17.jpg',
      source: 'https://i.imgur.com/HpZQY17.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://i.imgur.com/05mAo4h.jpg',
      source: 'https://i.imgur.com/05mAo4h.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://i.imgur.com/HaOyUYg.jpg',
      source: 'https://i.imgur.com/HaOyUYg.jpg',
      rows: 2,
      cols: 2,
    },
    {
      src: 'https://i.imgur.com/Y9lJkeK.jpg',
      source: 'https://i.imgur.com/Y9lJkeK.jpg',
      rows: 2,
      cols: 2,
    },
    {
      src: 'https://i.imgur.com/SvAcIaS.jpg',
      source: 'https://i.imgur.com/SvAcIaS.jpg',
      rows: 1,
      cols: 4,
    },
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length - 1);

  return (
    <Box>
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
