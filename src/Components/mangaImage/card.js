import React from 'react';

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <div className="card-image">
                    <div className="card-background" data-image-source={this.props.image}></div>
                    <div className="card-hidden-content">
                        <a href="#!">&nbsp;</a>
                        <span className="card-views">24 views</span>
                        <span className="card-post-date">3 weeks ago</span>
                        <span className="card-author"><a href="#!"> by : author name</a></span>
                    </div>
                </div>
            
                <div className="card-content">
                    <a href="#!"><p className="card-hero-title">demo title</p></a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exerc
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum</p>
                    <a href="#!" className="btn btn-small waves-effect waves-light btn-primary btn-sm">read more</a>
                </div>
            </div>
        )
    }
}

export default Card;