import React, {Component} from 'react';

class Header extends Component {
  render() {

    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <div>
      <header id="home">
      </header>
        <nav id="nav-wrap">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            {/*<li><a className="smoothscroll" href="#about">About</a></li>*/}
            {/*<li><a className="smoothscroll" href="#resume">Resume</a></li>*/}
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            {/*<li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>*/}
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>

        </nav>
    <div class="section-1">
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
          <hr/>
          <ul className="social">
            {networks}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#portfolio"><i className="icon-down-circle"></i></a>
      </p>
    </div>
    </div>
  )
    ;
  }
}

export default Header;
