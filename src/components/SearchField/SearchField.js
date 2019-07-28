import React from 'react';
import './SearchField.css';
import {Button} from 'react-bootstrap';

const SearchField = ({onInputChange, onButtonClick, SearchField, onTrendBtnClick}) => {


    return(
        <div id='searchBar' className="container-fluid d-flex flex-wrap mt-4 mb-4 sticky-top">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center pb-1">
                <input 
                    className="col-4 font pl-2"
                    type="text" 
                    name="mname" 
                    value={SearchField}
                    placeholder="Search Movie..."
                    onChange={onInputChange} 
                    autoComplete="off"
                />
                <Button 
                    className="font btnstrends" 
                    variant="primary" 
                    onClick={() => onButtonClick('searched')}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </Button>
                <Button 
                    className="font ml-2 bg-danger btnstrend" 
                    variant="primary" 
                    onClick={() => onTrendBtnClick('trending')}>
                    Trending
                </Button>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-5 d-flex justify-content-end pt-1">
                <Button 
                    className="font ml-2 bg-success btnstrend" 
                    variant="primary" 
                >
                    LogIn
                </Button>
                <Button 
                    className="font ml-2 bg-success btnstrend" 
                    variant="primary" 
                >
                    SignUp
                </Button>
            </div>
        </div>
    );
}

export default SearchField;