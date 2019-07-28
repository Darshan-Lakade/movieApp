import React from 'react';
import { Button } from 'react-bootstrap';
import './PageBtn.css';

const PageBtn = ({id,numBtnHandle,pagesStart,pagesEnd}) => {

    return(
        <div>
            {
                ( id >= pagesStart && id < pagesEnd) ? 
                <Button className="font btns" onClick={numBtnHandle.bind(this, id)}>{id}</Button>
                :
                <div>
                    <Button 
                        className="font btns" style={{display:'none'}} 
                        onClick={numBtnHandle.bind(this, id)}>
                        {id}
                    </Button>
                </div>
                
            }
        </div>
    );
}


export default PageBtn;