import React, { Component } from 'react';
import "./tour.scss";

export default class Tour extends Component {
    state = {
        showInfo: true
    }

    dispInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        const { id, city, img, name, info } = this.props.data;
        const removeTour = this.props.removeTour;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="tour-image" />
                    <span onClick={() => { removeTour(id) }} className="close-btn">
                        <i className="fas fa-times"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info{''} <span onClick={this.dispInfo}><i className="fas fa-caret-square-down"></i></span></h5>
                    {this.state.showInfo && <p>{info}</p>}


                </div>
            </article>
        )
    }
}
