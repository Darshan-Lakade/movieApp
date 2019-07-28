import React from 'react';
import './Pagination.css';
import PageBtn from '../PageBtn/PageBtn';
import { Button, Pagination } from 'react-bootstrap';

const PaginationBtn = ({totalMovieResults,onFirstPageClick,onNextPageClick,onPreviousPageClick,totalPages,numBtnHandle,pagesStart,pagesEnd}) => {

    return(
        <div>
            <Pagination className="font container d-flex justify-content-end pt-2"
                style={{cursor:'pointer'}}>
                <Button className="font btns" onClick={onFirstPageClick} >&laquo;</Button>
                <Button 
                    className="font btns"
                    onClick={onPreviousPageClick.bind(this,pagesStart,pagesEnd)}
                >
                    Previous
                </Button>
                {
                    totalMovieResults.map((movie,i) => {
                        if(i < totalPages){
                            i++
                            return (
                                <PageBtn key={i}
                                onFirstPageClick={onFirstPageClick}
                                id={i}
                                numBtnHandle={numBtnHandle}
                                pagesStart={pagesStart}
                                pagesEnd={pagesEnd}
                                />
                            )
                        }   
                    }) 
                }
                <Button 
                    className="font btns"
                    onClick={onNextPageClick.bind(this,pagesStart,pagesEnd)}
                >
                    next
                </Button>
            </Pagination>
        </div>
    );
}

export default PaginationBtn;