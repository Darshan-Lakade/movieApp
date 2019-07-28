import React from 'react';
import './ListHeader.css';

const ListHeader = ({searchPath,searchHeader}) => {

    return(
        <div className="col-12 text-center">
        {
            (searchPath === 'trending') ?
                <h3 className="pl-5 pt-1 pb-1 text text-left design ml-5 mr-5 text-dark" style={{fontSize:'35px'}}>Trending List</h3>
                :
                <div>
                    <h3 className="pl-5 pt-1 pb-1 text text-left design ml-5 mr-5 text-dark" style={{fontSize:'35px'}}>Search List</h3>
                    <h4 className="ml-5 text text-left"><span style={{color:'white'}}>Genre:- </span>{searchHeader}</h4>
                </div>
        }
        </div>
    );
}

export default ListHeader;