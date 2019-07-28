import React from 'react';
import './MoviePage.css';
import {Button} from 'react-bootstrap';

const MoviePage = ({movieData,onBackClick,genres,omdbData,onRefreshClick}) => {

    const url = 'https://image.tmdb.org/t/p/w500'

    return(
        <div className="container col-12 body">
             <div className="row justify-content-md-center p-3">
                <div className="imgSize col-lg-4 col-md-8 m-3">
                    <img 
                        className="imgSize p-3 shadow-lg p-3 mb-5 bg-white rounded"
                        src={url + movieData.poster_path} 
                        alt="hero" 
                    />
                </div>
                <div className="col-lg-7 col-md-8 m-3">
                    <div
                        className="d-flex flex-column font p-5 shadow-lg p-3 mb-5 bg-white rounded"
                        style={{minHeight:'650px'}}
                    >
                        <Button 
                            className="align-self-end text-center color mb-2 mt-2"
                            variant="outline-secondary pl-3 pr-3"
                            onClick={() => onBackClick('home')}
                        >
                            Back
                        </Button>
                        <h6>
                            <span style={{fontSize:'25px !important',fontWeight:'bold'}}>Title: </span>
                            "{movieData.title}"
                        </h6>
                        <h6>
                            <span style={{fontSize:'25px !important',fontWeight:'bold'}}>Runtime: </span>
                            {movieData.runtime} min
                        </h6>
                        <h6>
                            <span style={{fontSize:'25px !important',fontWeight:'bold'}}>Released on: </span>
                            ({movieData.release_date})
                        </h6>
                        <h6>
                            <span style={{fontSize:'25px !important',fontWeight:'bold'}}>Genre: </span>
                            {omdbData.Genre}
                        </h6>
                        <h6>
                            <span style={{fontSize:'25px !important',fontWeight:'bold'}}>Status: </span>
                            {movieData.status}
                        </h6>
                        <h6 className="border-bottom border-secondary pb-3">
                            <span style={{fontSize:'25px !important',fontWeight:'bold'}}>Director: </span>
                            {omdbData.Director}
                        </h6>
                        <h6>
                            <span style={{fontSize:'25px !important',fontWeight:'bold'}}>imdb Rating: </span>
                            "{omdbData.imdbRating}"
                        </h6>
                        <h6>
                            <span style={{fontSize:'25px !important',fontWeight:'bold'}}>Box Office: </span>
                            "{omdbData.BoxOffice}"
                        </h6>
                        <h6> 
                            <span style={{fontSize:'25px !important',fontWeight:'bold'}}>Language: </span>
                            "{omdbData.Language}"
                        </h6>
                        <h6>
                            <span style={{fontSize:'25px !important',fontWeight:'bold'}}>Country: </span>
                            "{omdbData.Country}"
                        </h6>
                        <h6 className="border-bottom border-secondary pb-3">
                            <span style={{fontSize:'25px !important',fontWeight:'bold'}}>Production: </span>
                            "{omdbData.Production}"
                        <br />
                        </h6>
                        <h6>
                            <span style={{fontSize:'25px !important',fontWeight:'bold'}}>Actors: </span>
                            {omdbData.Actors}
                        </h6>
                        <h6 className="border-bottom border-secondary pb-3">
                            <span style={{fontSize:'25px !important',fontWeight:'bold'}}>Writer: </span>
                            {omdbData.Writer}
                        <br />
                        </h6>
                        <h6>
                            <span style={{fontSize:'25px !important',fontWeight:'bold'}}>Plot: </span>
                            {movieData.overview}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviePage;