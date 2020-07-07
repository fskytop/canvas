import React from 'react';

class Category extends React.Component{

  constructor(props) {
    super(props);
    
    this.state = {
      topic: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.setNameFilter = props.setNameFilter;
  }
  
  handleClick(e) {
    e.preventDefault();
    const topic = e.target.getAttribute('data');
    document.getElementById("search-box").value = topic;
    this.setState({ topic: topic });
    this.setNameFilter(topic);
  }
  
  render(){
    return (
      <nav className="d-none d-lg-block col-lg-2 float-lg-left pl-3 pl-md-0 pr-3 pr-md-5 pt-3 pt-md-2 pb-md-6">
        <h4 className="text-mono mb-3 text-normal">Category</h4>
        <ul className="list-style-none mb-4">
          <li>
            <a className="muted-link filter-item py-2 mb-0"
               onClick={this.handleClick}
               data="AI">AI</a>
          </li>
          <li>
            <a className="muted-link filter-item py-2 mb-0"
               onClick={this.handleClick}
               data="COVID-19">COVID-19</a>
          </li>
          <li>
            <a className="muted-link filter-item py-2 mb-0"
               onClick={this.handleClick}
               data="Tool">Tool</a>
          </li>
          <li>
            <a className="muted-link filter-item py-2 mb-0"
               onClick={this.handleClick}
               data="Developer">Developer</a>
          </li>
          <li>
            <a className="muted-link filter-item py-2 mb-0"
               onClick={this.handleClick}
               data="Practice">Practice</a>
          </li>
          <li>
            <a className="muted-link filter-item py-2 mb-0"
               onClick={this.handleClick}
               data="Design">Design</a>
          </li>
          <li>
            <a className="muted-link filter-item py-2 mb-0"
               onClick={this.handleClick}
               data="DevOps">DevOps</a>
          </li>
          <li>
            <a className="muted-link filter-item py-2 mb-0"
               onClick={this.handleClick}
               data="Security">Security</a>
          </li>
          <li>
            <a className="muted-link filter-item py-2 mb-0"
               onClick={this.handleClick}
               data="Language">Language</a>
          </li>
          <li>
            <a className="muted-link filter-item py-2 mb-0"
               onClick={this.handleClick}
               data="System">System</a>
          </li>
          <li>
            <a className="muted-link filter-item py-2 mb-0"
               onClick={this.handleClick}
               data="Framework">Framework</a>
          </li>
          
        </ul>
      </nav>
    )
  }
}

export default Category;
