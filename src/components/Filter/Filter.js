import React from 'react';
import {Button} from 'react-bootstrap';
import './Filter.css';
import SlideToggle from 'react-slide-toggle';

const Filter = ({onGenreClick}) => {

    return(
        <SlideToggle 
            duration={500}
            collapsed={true}
            render={({onToggle, setCollapsibleElement}) => (
                <div className="container bg-filter my-collapsible">
                    <Button 
                        className="font text-center color mt-2 btnstrend colorVal my-collapsible__toggle"
                        variant="info pl-3 pr-3"
                        onClick={onToggle}
                    >
                        Filter
                    </Button>
                    <div
                        className="my-collapsible__content" ref={setCollapsibleElement}
                    >
                        <div className="row text-center p-1 my-collapsible__content-inner">
                            <div onClick={onToggle} className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-2 mt-2">
                                <Button className="font outline-secondary color w-100" 
                                        onClick={() => onGenreClick('action')}>Action</Button>
                            </div>
                            <div onClick={onToggle} className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-2 mt-2">
                                <Button className="font outline-secondary color w-100"
                                onClick={() => onGenreClick('adventure')}>Adventure</Button>
                            </div>
                            <div onClick={onToggle} className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-2 mt-2">
                                <Button className="font outline-secondary color w-100"
                                onClick={() => onGenreClick('animation')}>Animation</Button>
                            </div>
                            <div onClick={onToggle} className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-2 mt-2">
                                <Button className="font outline-secondary color w-100"
                                onClick={() => onGenreClick('comedy')}>Comedy</Button>
                            </div>
                        </div>
                            <div className="row text-center p-1">
                            <div onClick={onToggle} className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-2 mt-2">
                                <Button className="font outline-secondary color w-100"
                                onClick={() => onGenreClick('crime')}>Crime</Button>
                            </div>
                            <div onClick={onToggle} className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-2 mt-2">
                                <Button className="font outline-secondary color w-100"
                                onClick={() => onGenreClick('drama')}>Drama</Button>
                            </div>
                            <div onClick={onToggle} className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-2 mt-2">
                                <Button className="font outline-secondary color w-100"
                                onClick={() => onGenreClick('fantasy')}>Fantasy</Button>
                            </div>
                            <div onClick={onToggle} className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-2 mt-2">
                                <Button className="font outline-secondary color w-100"
                                onClick={() => onGenreClick('horror')}>Horror</Button>
                            </div>
                        </div>
                            <div className="row text-center p-1">
                            <div onClick={onToggle} className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-2 mt-2">
                                <Button className="font outline-secondary color w-100"
                                onClick={() => onGenreClick('mystery')}>Mystery</Button>
                            </div>
                            <div onClick={onToggle} className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-2 mt-2">
                                <Button className="font outline-secondary color w-100"
                                onClick={() => onGenreClick('romance')}>Romance</Button>
                            </div>
                            <div onClick={onToggle} className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-2 mt-2">
                                <Button className="font outline-secondary color w-100"
                                onClick={() => onGenreClick('sci-fi')}>Sci-Fi</Button>
                            </div>
                            <div onClick={onToggle} className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-2 mt-2">
                                <Button className="font outline-secondary color w-100"
                                onClick={() => onGenreClick('thriller')}>Thriller</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        />
    );
}

export default Filter;

