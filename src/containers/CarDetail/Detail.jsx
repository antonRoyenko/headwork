import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getCars} from '../../actions';
import {Link} from "react-router-dom";
import {ListGroup, ListGroupItem} from 'mdbreact';
import Swiper from 'react-id-swiper';

class Detail extends Component {
    componentDidMount() {
        this.props.getCars();
    }

    render() {
        const {list} = this.props;
        let carId = this.props.match.params.id;

        const params = {
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                767: {
                    slidesPerView: 1,

                },
                1199: {
                    slidesPerView: 3,
                }
            }
        };
        
        console.log(list[carId]);

        return (
            <Fragment>
                <div className="container">
                    {
                        list[carId] !== undefined && (
                            <div className="car-detail">
                                <div className="img-section">
                                    <img src={list[carId].cover_image} alt=""/>
                                </div>
                                <div className="info">
                                    <h2>{list[carId].name}</h2>
                                    <ListGroup>
                                        <ListGroupItem>Acceleration: {list[carId].Acceleration}</ListGroupItem>
                                        <ListGroupItem>Displacement: {list[carId].Displacement}</ListGroupItem>
                                        <ListGroupItem>Horsepower: {list[carId].Horsepower}</ListGroupItem>
                                        <ListGroupItem>Miles_per_Gallon: {list[carId].Miles_per_Gallon}</ListGroupItem>
                                        <ListGroupItem>Origin: {list[carId].Origin}</ListGroupItem>
                                        <ListGroupItem>Weight_in_lbs: {list[carId].Weight_in_lbs}</ListGroupItem>
                                        <ListGroupItem>Year: {list[carId].Year}</ListGroupItem>
                                    </ListGroup>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="cars-carousel">
                    {
                        list.length !== 0 && (
                            <Swiper {...params}>
                                {
                                    list.map((item) => (
                                        <div key={item.id}>
                                            <Link to={`/car/${item.id}`} onClick={this.updateCar}>
                                                <img src={item.cover_image} alt=""/>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </Swiper>
                        )
                    }
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.cars.list
    };
}

export default connect(mapStateToProps, {getCars})(Detail);
