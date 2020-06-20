import React, {Component} from 'react';

class NavBar extends Component {
    constructor(props){
      super(props);
        this.state = {
          searchbar: []
        }
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange(e) {
      let currentList = [];
      let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.items;
      newList = currentList.filter(item => {
        const lc = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.props.items;
    }
    this.setState({
      filtered: newList
    });
  }


 render(){
   return (
     <header>
        <img src="/images/logo.png" alt="Logo"/>

        <ul>
          <li className="navLink">
            <a href="/home">Home</a>
          </li>
          <li className="navLink">
            <a href="/stories">News Articles</a>
          </li>
          <li className="navLink">
            <a href="/about">About Us</a>
          </li>
        </ul>

        <div className="searchbar">
          <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
        </div>
      </header>
    )
  }
}
export default NavBar;
