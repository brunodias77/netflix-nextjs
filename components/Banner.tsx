import Image from 'next/image'
import { Movie } from '../typings'
import { useState, useEffect } from 'react'
import { baseUrl } from '../constants/movie'

interface Props {
  netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])
  console.log(movie?.backdrop_path)
  return (
    <div>
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Banner
