import React, { useState } from 'react'

import { Card, Grid } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { useDropzone } from 'react-dropzone'

import CardMainX from '../../components/card/CardMainX';
import CardHeaderX from '../../components/card/CardHeaderX';

import './UploadImages.css'

const UploadImages = () => {
    const [images, setImages] = useState([])
    const [current, setCurrent] = useState(0);
    const nextSlide = () =>  setCurrent(current === images.length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? images.length - 1 : current - 1);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setImages([...images,
            ...acceptedFiles.map((image) => Object.assign(image, {
                preview: URL.createObjectURL(image)
            }))
            ])
        }
    })

    const arrayImages = images.map((image, index) => (
         <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && <img src={image.preview} alt="preview" className="image" /> }
          </div>
    ))

    return (
        <Grid container spacing={2}>
            <CardMainX titleX="Drag and Drop" subtitleX="Drop here all the images you want" />
            <Grid item sm={12} md={6} lg={6} >
                <Card>
                    <CardHeaderX
                        titleX="Drag the images you want here"
                        subtitleX=""
                    />
                    <div {...getRootProps()} >
                        <input {...getInputProps} style={{ backgroundColor: '#4f67ef', height: '150px', width: '100%' }} />
                    </div>
                </Card>
            </Grid>
            <Grid item sm={12} md={6} lg={6} >
                <Card>
                    <CardHeaderX
                        titleX="Images"
                        subtitleX="Here you can see all your images"
                    />
                    <section className='slider'>
                        <ArrowBackIosIcon className='left-arrow' onClick={prevSlide} />
                        <ArrowForwardIosIcon className='right-arrow' onClick={nextSlide} />
                        {arrayImages}
                    </section>
                </Card>
            </Grid>
        </Grid>
    )
}

export default UploadImages

