import React, { Component } from 'react';
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export default class index extends Component {
    state = {
        tours: tourData
    }

    removeTour = id => {
        console.log(id);
    }

    removeTour = (id) => {
        const { tours } = this.state;
        const filteredTours = tours.filter(tour => {
            return tour.id !== id;
        });

        this.setState({
            tours: filteredTours
        })
    }
    render() {
        // console.log(this.state.tours);
        const { tours } = this.state;
        return (
            <section className="tour-list">
                {tours.map(tour => {
                    return <Tour key={tour.id} data={tour} removeTour={this.removeTour} />
                })}

            </section>
        )
    }
}
