import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import  Slider  from 'react-slick';
import './MovieList.css';

const MovieList = ({movies,onViewClick}) => {

    const baseurl = 'https://image.tmdb.org/t/p/w500'

    const settings = {
        dots: false,
        cssEase:'ease',
        fade:false,
        infinite: false,
        mobileFirst:true,
        speed: 500,
        swiprToSlide:true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1190,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 590,
              settings: {
                arrows:false,
                vertical:false,
                verticalSwiping:false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <div className="slider-div col-12">
            <Slider {...settings}>
                    {
                        movies.map((movie,i) => {
                            return(
                                <div className="font col-12 text-center" 
                                    style={{background:'linear-gradient(to right, rgb(20, 67, 88), rgb(20, 67, 88))'}} key={i}>
                                    <MovieCard 
                                        title={movie.title} 
                                        poster={baseurl + movie.poster_path}
                                        Language={movie.original_language}
                                        Year={movie.release_date}
                                        idMovie={movie.id}
                                        onViewClick={onViewClick}
                                    />
                                </div>
                            )
                        })
                    }
            </Slider>
        </div>
    )
}

export default MovieList;