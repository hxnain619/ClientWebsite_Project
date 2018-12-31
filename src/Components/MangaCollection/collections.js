import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesomeIcons from '../global/fontAwesomeIcons';
import NewsLetter from '../global/newsLetter';

class Collections extends React.Component{


    render(){
        return(
            <div className="container mangas-text-collection-container">
                <div className="row">
                    <div className="col s12 l7">
                        <div className="row">
                            <div className="col s12">
                                <ul className="collection with-header">

                                    <li className="collection-header"><h4>a</h4></li>
                                    <li className="collection-item"><Link to="/">chapter name</Link></li>
                                    <li className="collection-item"><Link to="/">chapter name</Link></li>
                                    <li className="collection-item"><Link to="/">chapter name</Link></li>
                                    <li className="collection-item"><Link to="/">chapter name</Link></li>

                                    <li className="collection-header"><h4>b</h4></li>
                                    <li className="collection-item"><Link to="/text list">chapter name</Link></li>
                                    <li className="collection-item"><Link to="/text list">chapter name</Link></li>
                                    <li className="collection-item"><Link to="/text list">chapter name</Link></li>
                                    <li className="collection-item"><Link to="/text list">chapter name</Link></li>

                                    <li className="collection-header"><h4>c</h4></li>
                                    <li className="collection-item"><Link to="/text list">chapter name</Link></li>
                                    <li className="collection-item"><Link to="/text list">chapter name</Link></li>
                                    <li className="collection-item"><Link to="/text list">chapter name</Link></li>
                                    <li className="collection-item"><Link to="/text list">chapter name</Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 l5 mangas-social-container">
                        <div className="row">
                            <div className="col s12">
                                <h4>social media</h4>
                                <div className="divider"></div>    
                            </div>
                            <div className="col s12" id="social-btn-container">
                                <Link to="/text list" className="btn-floating social-btn btn-large">
                                    <FontAwesomeIcons iconClasses = "fab fa-facebook-f" />
                                </Link>
                                <Link to="/text list" className="btn-floating social-btn btn-large">
                                    <FontAwesomeIcons iconClasses = "fab fa-twitter" />
                                </Link>
                                <Link to="/text list" className="btn-floating social-btn btn-large">
                                    <FontAwesomeIcons iconClasses = "fab fa-linkedin-in" />
                                </Link>
                                <Link to="/text list" className="btn-floating social-btn btn-large">
                                    <FontAwesomeIcons iconClasses = "fas fa-rss" />
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <h4>categories</h4>
                                <div className="divider"></div>
                            </div>
                            <div className="col s12">
                                <Link to="/text list" className="btn-badges">comedy</Link>
                                <Link to="/text list" className="btn-badges">drama</Link>
                                <Link to="/text list" className="btn-badges">romance</Link>
                                <Link to="/text list" className="btn-badges">martial arts</Link>
                                <Link to="/text list" className="btn-badges">drama</Link>
                                <Link to="/text list" className="btn-badges">romance</Link>
                                <Link to="/text list" className="btn-badges">comedy</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <h4>newsletter</h4>
                                <div className="divider"></div>
                            </div>
                            <div className="col s12">
                                <NewsLetter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    
}

export default Collections;