import React from 'react';
import './MovieCard.css';

const MovieCard = ({title,poster,Language,Year,onViewClick,idMovie}) => {

    return(
        <div onClick={onViewClick.bind(this, idMovie)}>
            <div className="font color card d-inline-block border-dark text-white bg-color ml-2 mr-2 mb-3 mt-3 text-center" 
            style={{width: '16rem',boxShadow:'11px 14px 25px -5px rgba(0,0,0,0.75)'}}>
                <div className="font card-header d-flex justify-content-center mt-3">
                    <img className="font pb-3 rounded" src={poster} alt="Movie" style={{width: '90%', height: 'auto'}} />
                </div>
                <div className="font card-body">
                    <h6 className="card-title">{title}</h6>
                    <hr />
                    <p className="font card-text text-center pl-2">
                        <span className='font Main-color'>Language:</span>
                        {Language}<br/>
                        <span className='font Main-color'>Release Date:</span>
                        ({Year})
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;