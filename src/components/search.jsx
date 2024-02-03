import React from 'react';
import search_icon from '../assets/search.png';

class Search extends React.Component{
  render(){
    return(<div className='top-bar'>
      <input type='text' placeholder='Search' id='cityInput'/>
      <div id='search-icon' className='search-icon' onClick={this.props.onSearch}>
      <img src={search_icon} alt='Search Icon'/>
      </div>
    </div>)
  }
}
export default Search;