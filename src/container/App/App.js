import React, { Component } from 'react';
import './App.css';
import SearchField from '../../components/SearchField/SearchField';
import MovieTitle from '../../components/MovieTitle/MovieTitle';
import MovieList from '../../components/MovieList/MovieList';
import RelatedMovieList from '../../components/RelatedMovieList/RelatedMovieList';
import Filter from '../../components/Filter/Filter';
import MoviePage from '../../components/MoviePage/MoviePage';
import PaginationBtn from '../../components/Pagination/Pagination';
import ListHeader from '../../components/ListHeader/ListHeader';
import { css } from '@emotion/core';
import { FadeLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

let genreID = 1;

class App extends Component {
  constructor(){
    super();
    this.state = {
      totalMovieResults:[],
      movies:[],
      relatedMovies:[],
      SearchField:'',
      filter:false,
      route: 'home',
      val:'',
      movieData:{},
      totalPages:1,
      pagesStart:1,
      pagesEnd:6,
      searchPath:'trending',
      genres:[],
      omdbData:{},
      imdbID:[],
      allCards:'hide',
      genreSearch:'all',
      searchHeader:'',
      loading:true,
    }
  }

  componentDidMount(){

    // -----Fetching The Trending Movies------
    fetch(`http://localhost:3001/trending`, {
      method:'post',
      headers:{'Content-Type':'application/json'}
    })
      .then(res => res.json())
      .then(data => 
                (
                  this.setState({movies:data.results}),
                  this.setState({totalPages:data.total_pages})
                )
          )
      .catch(err => console.log('error fetching data'))

    fetch(`http://localhost:3001/`, {
      method:'post',
      headers:{'Content-Type':'application/json'}
    })
      .then(res => res.json())
      .then(data => this.setState({relatedMovies:data.results})
      )
      .catch(err => console.log(err))

      for(let i = 1; i <= 1000; i++){
        this.state.totalMovieResults.push(i)
      }
  }

  /* -----Input Box , SearchField------ */
  onInputChange = (e) => {
    this.setState({SearchField:e.target.value});
  }



 //------------On Trending Button Click function--------  
  onTrendBtnClick = (searchPath) => {
    this.setState({searchPath:searchPath})

    this.setState({searchHeader:''})

    fetch(`http://localhost:3001/trending`, {
      method:'post',
      headers:{'Content-Type':'application/json'}
    })
      .then(res => res.json())
      .then(data => 
                (
                  this.setState({movies:data.results}),
                  this.setState({totalPages:data.total_pages})
                )
          )
      .catch(err => console.log(err))
  }


  // -------- On Search Button Click ----------

  onButtonClick = (searchPath) => {
    
    if(this.state.SearchField.length > 0){
      this.setState({movies:[]})

      this.setState({searchPath:searchPath})

      this.setState({searchHeader:'All'})

      fetch(`http://localhost:3001/onsearch`, {
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          SearchField:this.state.SearchField
        })
      })
        .then(res => res.json())
        .then(data => 
            this.setState({movies: data.results}))
        .catch(err => console.log('data not found'))
      
      this.setState({val:this.state.SearchField})
      this.setState({SearchField:''})

      this.setState({pagesEnd:6});
      this.setState({pagesStart:1});
    }

  }

  // ------ Clicking on Movie Card------
  onViewClick = (idMovie) => {
    this.state.movies.map(movie => {
      if(movie.id === idMovie){
        this.setState({route:'Movie-Page'})
        fetch(`http://localhost:3001/view`, {
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            idMovie:idMovie
          })
        })
          .then(res => res.json())
          .then(data => (
              this.setState({movieData:data}),
              this.setState({genres: data.genres}),
              this.setState({imdbID:data.imdb_id})
            )
          )
          .catch(err => console.log(err))
      }
    })
    this.state.relatedMovies.map(movie => {
      if(movie.id === idMovie){
        this.setState({route:'Movie-Page'})
        fetch(`http://localhost:3001/view`, {
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            idMovie:idMovie
          })
        })
          .then(res => res.json())
          .then(data => (
              this.setState({movieData:data}),
              this.setState({genres: data.genres}),
              this.setState({imdbID:data.imdb_id})
            )
          )
          .catch(err => console.log(err))
      }
    })
  }

  componentDidUpdate(prevProps,prevState) {
    if (prevState.imdbID !== this.state.imdbID) {
      this.setState({imdbID:this.state.imdbID});
      fetch(`http://localhost:3001/viewupdate`, {
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            imdbID:this.state.imdbID
          })
        })
      .then(res => res.json())
      .then(data => 
            this.setState({omdbData:data})
      )
      .catch(err => console.log('error'))
    }
  }

  // on Back Button Click-----

  onBackClick = (route) => {
    this.setState({route:route})
  }

  // ------- ON Clicking First PAge on Pagenation--------

  onFirstPageClick = () => {

    this.setState({movies:[]})

    if(this.state.searchPath === 'trending'){
        this.setState({pagesEnd:6});
        this.setState({pagesStart:1});
        return fetch(`http://localhost:3001/trending`, {
          method:'post',
          headers:{'Content-Type':'application/json'}
        })
      .then(res => res.json())
      .then(data => data.results.map(search => {
        return this.setState({movies:[...this.state.movies, search]})
      }))
      .catch(err => console.log('data not found'))
    }

    if(this.state.searchPath === 'searched'){
        this.setState({pagesEnd:6});
        this.setState({pagesStart:1});
        return fetch(`http://localhost:3001/onsearchpage`, {
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            val:this.state.val
          })
        })
      .then(res => res.json())
      .then(data => data.results.map(search => {
        return this.setState({movies:[...this.state.movies, search]})
      }))
      .catch(err => console.log('data not found'))
    }

    if(this.state.searchPath === 'Action'){
      this.setState({pagesEnd:6});
      this.setState({pagesStart:1});
      return fetch(`http://localhost:3001/genrepage`, {
        method:'post',
        headers:{'Content-Type':'application/json'},
      })
    .then(res => res.json())
    .then(data => data.results.map(search => {
      return this.setState({movies:[...this.state.movies, search]})
    }))
    .catch(err => console.log('data not found'))
  }
  }


  // To handle the Id of the Selected Move Card ------
  numBtnHandle = (id) => {

    this.setState({movies:[]})
    if(this.state.searchPath === 'trending'){
      return fetch(`http://localhost:3001/pagestrending`, {
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          id:id
        })
      })
    .then(res => res.json())
    .then(data => data.results.map(search => {
      return this.setState({movies:[...this.state.movies, search]})
    }))
    .catch(err => console.log('data not found'))
    }
    if(this.state.searchPath === 'searched'){
      return fetch(`http://localhost:3001/pagessearch`, {
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          id:id,
          val:this.state.val
        })
      })
    .then(res => res.json())
    .then(data => data.results.map(search => {
      return this.setState({movies:[...this.state.movies, search]})
    }))
    .catch(err => console.log('data not found'))
    }
    if(this.state.searchPath === 'Action'){
      return fetch(`http://localhost:3001/pagesgenre`, {
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          id:id,
          genreID:genreID
        })
      })
    .then(res => res.json())
    .then(data => data.results.map(search => {
      return this.setState({movies:[...this.state.movies, search]})
    }))
    .catch(err => console.log('data not found'))
    }
  }

  onNextPageClick = (pagesStart,pagesEnd) => {
      if(pagesEnd < this.state.totalPages){
        pagesStart = pagesStart + 5;
        pagesEnd = pagesEnd + 5;
      }
    this.setState({pagesStart:pagesStart});
    this.setState({pagesEnd:pagesEnd});
  }

  onPreviousPageClick = (pagesStart,pagesEnd) => {
    if(pagesStart > 5){
      pagesStart = pagesStart - 5;
      pagesEnd = pagesEnd - 5;
    }
    this.setState({pagesStart:pagesStart});
    this.setState({pagesEnd:pagesEnd});
  }

  onGenreClick = (genre) => {
    this.setState({genre:genre})
    if(genre === 'action'){
      genreID=28;
    } else if(genre === 'adventure'){
      genreID = 12;
    } else if(genre === 'animation'){
      genreID = 16;
    } else if(genre === 'comedy'){
      genreID = 35;
    } else if(genre === 'crime'){
      genreID = 80;
    } else if(genre === 'drama'){
      genreID = 18;
    } else if(genre === 'fantasy'){
      genreID = 14;
    } else if(genre === 'horror'){
      genreID = 27;
    } else if(genre === 'mystery'){
      genreID = 9648;
    } else if(genre === 'romance'){
      genreID = 10749;
    } else if(genre === 'sci-fi'){
      genreID = 878;
    } else if(genre === 'thriller'){
      genreID = 53;
    }
    this.setState({filter:'off'})
    this.setState({searchHeader:genre})
    this.setState({searchPath:'Action'})
    this.setState({movies:[]})
    return fetch(`http://localhost:3001/genre`, {
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        genreID:genreID
      })
    })
      .then(res => res.json())
      .then(data => this.setState({movies:data.results}))
      .catch(err => console.log('error'))
    
  }

  render() {

     const filtering = this.state.movies;

    window.addEventListener("scroll", function(){
      let searchBar = document.getElementById('searchBar');
      let rect;
      try{
        rect = searchBar.getBoundingClientRect();
        if(rect.top <= 0){
          searchBar.classList.add("bg-top");
        }else{
          searchBar.classList.remove("bg-top");
        }
      } catch(e){
        return
      }
    })

    if(this.state.route === 'home'){
      return (
        <div>
          <MovieTitle />
          <SearchField 
            onInputChange={this.onInputChange} 
            onButtonClick={this.onButtonClick} 
            SearchField={this.state.SearchField}
            onTrendBtnClick={this.onTrendBtnClick}
          />
          <Filter 
            filter={this.state.filter} 
            onFilterClick={this.onFilterClick}
            onGenreClick={this.onGenreClick}
            done={this.done}
          />
          <PaginationBtn 
            onFirstPageClick={this.onFirstPageClick} 
            onPageClick={this.state.totalPages}
            totalMovieResults = {this.state.totalMovieResults}
            totalPages={this.state.totalPages}
            numBtnHandle={this.numBtnHandle}
            pagesStart={this.state.pagesStart}
            pagesEnd={this.state.pagesEnd}
            onPreviousPageClick={this.onPreviousPageClick}
            onNextPageClick={this.onNextPageClick}
          />
          <ListHeader 
            searchPath={this.state.searchPath}
            searchHeader={this.state.searchHeader}
          />
          {(this.state.movies.length < 1) ?
            <div className='sweet-loading text-center pt-5 mt-5'>
              <FadeLoader
                css={override}
                sizeUnit={"10px"}
                size={5}
                color={'#ff0000'}
                loading={this.state.loading}
              />
              {
                (this.state.loading === true) ?
                <h1 className="text-center text-danger pr-3 pb-5 mb-5" style={{fontSize:'14px'}}>Loading</h1>
                :
                <h1 className="text-center text-danger" style={{fontSize:'15px'}}>Error</h1>
              }
              
            </div>
            :
          <MovieList 
            movies={filtering} 
            onViewClick={this.onViewClick}
            searchPath={this.state.searchPath}
            allCards={this.state.allCards}
            searchHeader={this.state.searchHeader}
          />  
          }
          {(this.state.relatedMovies.length < 1) ?
            <div className='sweet-loading text-center pt-5 mt-5'>
              <FadeLoader
                css={override}
                sizeUnit={"10px"}
                size={5}
                color={'#ff0000'}
                loading={this.state.loading}
              />
              {
                (this.state.loading === true) ?
                <h1 className="text-center text-danger pr-3 pb-5 mb-5" style={{fontSize:'12px'}}>Loading</h1>
                :
                <h1 className="text-center text-danger" style={{fontSize:'15px'}}>Error</h1>
              }
              
            </div>
            :
          <RelatedMovieList 
            relatedMovies={this.state.relatedMovies} 
            onViewClick={this.onViewClick}
            searchPath={this.state.searchPath}
            allCards={this.state.allCards}
            searchHeader={this.state.searchHeader}
          />  
          }
        </div>
      );
    } else {
      return (
        <div className="App">
          <MoviePage 
          movieData={this.state.movieData} 
          onBackClick={this.onBackClick} 
          genres={this.state.genres}
          omdbData={this.state.omdbData}
          />
        </div>
      );
    }
  }
}

export default App;
