'use client'
import { useState } from "react"
import RandomFox from "../components/RandomFox";

const random = () => {
  console.log(Math.floor(Math.random() * 123) + 1)
  return Math.floor(Math.random() * 123) + 1
}

//generate simple and unique id
const generateId = (): string => {
  return Math.random().toString().substring(2, 9)
}

type ImageItem = { id: string, url: string }

export default function HomePage() {

  const [images, setImages] = useState<Array<ImageItem>>([
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` }
  ])



  return (
    <>
      <h1>Esta sería la primera app Next TS con MUI</h1>
      <section className="zorritos-section">
        {images.map(({ id, url }) => {
          return (
            <RandomFox key={id} url={url} />
          )
        })}
      </section>
    </>
  )
}
