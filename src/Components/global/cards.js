import React from 'react';
import {Link} from 'react-router-dom';

class Cards extends React.Component {
 
    render() {
        return (
            <div className="card">

                <div className="card-image">
                    <div className="card-background" data-image-source={this.props.image}>
                    </div>
                    <div className="card-hidden-content">
                        <a href="#!">&nbsp;</a>
                        <span className="card-views">24 views</span>
                        <span className="card-post-date">3 weeks ago</span>
                        <span className="card-author">
                            <a href="#!">by : author name</a>
                        </span>
                    </div>
                </div>

                <div className="card-content">
                    <a href="#!"><p className="card-hero-title">demo title</p></a>
                </div>

            </div>
        );
    }
}

export default Cards;
