// write your CatList component here
import React, { Component } from "react";

class CatList extends Component {
    renderCats = () => this.props.cats.map((cat) => <img src={cat.url}/>)
    render(){
        return (
            <div>
            {this.renderCats()}
            </div>
        )
    }
}

export default CatList