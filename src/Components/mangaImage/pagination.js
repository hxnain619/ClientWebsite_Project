import React from 'react';
import MaterialIcon from '../global/materialicon';

class Pagination extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            Links : ["1","2","3","4","5","6","7","8","9","a","b","c","d","e"]
        }
        this.getLists = this.getLists.bind(this);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <ul className="pagination">
                            {this.getLists()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    getLists(){
        
        let temp = [];

        temp.push(
            <li key={0}>
                <a href="#!">
                    <MaterialIcon iconName="chevron_left"/>
                </a>
            </li>
        );
        
        for(let i=0 ;i<this.state.Links.length ; i++){
            if(this.state.Links[i] === this.props.active){
                temp.push(
                    <li key={i+1} className="active">
                        <a href="#!">
                            {this.state.Links[i]}
                        </a>
                    </li>
                );
            }
            else{
                temp.push(
                    <li key={i+1}>
                        <a href="#!">
                            {this.state.Links[i]}
                        </a>
                    </li>
                )
            }
        }


        temp.push(
            <li key={this.state.Links.length + 1}>
                <a href="#!">
                    <MaterialIcon iconName="chevron_right"/>
                </a>
            </li>
        );

        return temp;
    }

}

export default Pagination;