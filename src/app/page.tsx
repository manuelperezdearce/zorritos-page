'use client'
import { MouseEventHandler } from "react"

import { useState } from "react"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import RandomFox from "../components/RandomFox";

const random = () => {
  return Math.floor(Math.random() * 123) + 1
}

//generate simple and unique id
const generateId = (): string => {
  return Math.random().toString().substring(2, 9)
}

type ImageItem = { id: string, url: string }

export default function HomePage() {

  const [images, setImages] = useState<Array<ImageItem>>([])

  const handleAgregar: MouseEventHandler<HTMLButtonElement> = () => {

    const newImageItem: ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`
    }
    setImages([...images, newImageItem])
  }



  return (
    <>
      <Container component="section" sx={
        {
          display: "flex",
          gap: "1rem"
        }
      }>
        <h1>Te gustaría agregar un zorrito?</h1>
        <Button variant="contained" onClick={handleAgregar} sx={{
          marginBlock: "auto"
        }}>Agregar</Button>
      </Container>

      <Container component="section" sx={
        {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(15rem, 100%), 1fr))",
          gap: "2rem"
        }
      }>
        {images.map(({ id, url }) => {
          return (
            <RandomFox key={id} url={url} />
          )
        })}
      </Container >
    </>
  )
}
