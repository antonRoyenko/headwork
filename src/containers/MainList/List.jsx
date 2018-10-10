import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCars} from '../../actions';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { Link } from "react-router-dom";

class CarsList extends Component {
    componentDidMount() {
        this.props.getCars();
    }

    render() {
        const { cars } = this.props;
        console.log(cars.list);
        return (
            <div className="container">
                <div className="filter-block">

                </div>
                <div className="list-auto">
                        {
                            cars.list.length !== 0 && (
                                cars.list.map((item) => (
                                    <Card key={item.id} className="item">
                                        <div className="view overlay zoom">
                                            <img
                                                src={item.cover_image}
                                                className="img-fluid " alt="zoom" />
                                        </div>
                                        <CardBody>
                                            <a className="activator waves-effect waves-light mr-4"><i className="fa share-alt" /></a>
                                            <CardTitle>{item.name}</CardTitle>
                                            <hr />
                                            <CardText>
                                                <span>Country of Origin: {item.Origin}</span>
                                                <span>Year: {item.Year}</span>
                                            </CardText>
                                            <Link to={`/car/${item.id}`} className="black-text d-flex justify-content-end">
                                                <h5>Detail <i className="fa fa-angle-double-right" /></h5>
                                            </Link>
                                        </CardBody>
                                    </Card>
                                ))
                            )
                        }
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        cars: state.cars
    };
}

export default connect(mapStateToProps, {getCars})(CarsList);
