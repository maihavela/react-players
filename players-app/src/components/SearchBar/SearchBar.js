import React from 'react';

const SearchBar = props => {
  return <nav class="navbar navbar-expand-lg navbar-light bg-light pl-2">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">  
         <input class="form-control mr-sm-2 pl-0" type="Player Name" placeholder="Player Name" aria-label="Age"></input>
      </li>
      <li class="nav-item dropdown show ml-2">
        <div class="form-group">
            <select class="form-control" multiple="">
                <option>Attacking Midfield</option>
                <option>Central Midfield</option>
                <option>Centre-Back</option>
                <option>Centre-Forward</option>
                <option>Defensive Midfield</option>
                <option>Keeper</option>
                <option>Left Midfield</option>
                <option>Left Wing</option>
                <option>Left Back</option>
                <option>Right-Back</option>
            </select>
        </div>
      </li>
      <li class="nav-item ml-2">  
         <input class="form-control mr-sm-2" type="search" placeholder="Age" aria-label="Age"></input>
      </li>
      <li class="nav-item ml-5">
         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </li>
    </ul> 
  </div>
</nav>
  
}

export default SearchBar;