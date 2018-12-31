
import React from 'react';
import Card from './card';

class MangasCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latestImages : ["https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/1667587/pexels-photo-1667587.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/837500/pexels-photo-837500.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/1172105/pexels-photo-1172105.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/1002106/pexels-photo-1002106.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "https://images.pexels.com/photos/973226/pexels-photo-973226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/532564/pexels-photo-532564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"]
        }
    }
    render(){
        return(
           <div className="container mangas-image-container card-main-container">
            <div className="row">
                {this.renderCards()}    
            </div>
           </div>
        )
    }

    renderCards(){
        let temp =[] ;
        for(let i=0 ; i<this.state.latestImages.length ; i++){
            temp.push(
                <div key = {i} className="col s12 l4">
                    <Card image={this.state.latestImages[i]} />
                </div>
            )
        }
        return temp;
    }
    componentDidMount(){

        let cardsElem = document.getElementsByClassName('card-background');

        Array.prototype.forEach.call(cardsElem,elem => {
            elem.setAttribute('style',`background-image:url('${elem.getAttribute('data-image-source')}')`);
        });

    }
    
}

export default MangasCard;