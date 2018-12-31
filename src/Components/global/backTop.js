import React from 'react';
import MaterialIcon from './materialicon';
import $ from 'jquery';

class BackTop extends React.Component{
    render(){
        return(
            <a className="btn-floating btn-small btn-primary" id="back-top" href="#!"
            onClick={this.handleClick}>
                <MaterialIcon iconName="arrow_drop_up"/>                
            </a>

        );
    }
    handleClick(){
        $('#back-top').each(function(){
            $(this).click(function(){ 
                $('html,body').animate({ scrollTop: 0 }, 'slow');
                return false; 
            });
        });
    }
}

export default BackTop;