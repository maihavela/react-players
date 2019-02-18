import React from 'react';

const SearchBar = props => {
  return <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">  
         <input class="form-control mr-sm-2" type="Player Name" placeholder="Player Name" aria-label="Age"></input>
      </li>
      <li class="nav-item dropdown show">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Position
        </a>
        <div class="dropdown-menu show" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Attacking Midfield</a>
          <a class="dropdown-item" href="#">Central Midfield</a>
          <a class="dropdown-item" href="#">Centre-Back</a>
          <a class="dropdown-item" href="#">Centre-Forward</a>
          <a class="dropdown-item" href="#">Defensive Midfield</a>
          <a class="dropdown-item" href="#">Keeper</a>
          <a class="dropdown-item" href="#">Left Midfield</a>
          <a class="dropdown-item" href="#">Left Wing</a>
          <a class="dropdown-item" href="#">Left Back</a>
          <a class="dropdown-item" href="#">Right-Back</a>
        </div>
      </li>
      <li class="nav-item">  
         <input class="form-control mr-sm-2" type="search" placeholder="Age" aria-label="Age"></input>
      </li>
      <li class="nav-item">
         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </li>
    </ul> 
  </div>
</nav>
  
}

export default SearchBar;