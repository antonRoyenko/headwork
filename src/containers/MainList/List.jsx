import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCars} from '../../actions'

class CarsList extends Component {
    constructor(props) {
        super(props);
    }

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
                    <ul>
                        {
                            cars.list.length !== 0 && (
                                cars.list.map((item) => (
                                    <li key={item.id} className="item">
                                        <img src={item.cover_image} alt=""/>
                                        <div className="detail">
                                            <h4>
                                                {item.name}
                                            </h4>
                                            <div className="total-info d-flex justify-content-between">
                                                <span>Country of Origin: {item.Origin}</span>
                                                <span>Year: {item.Year}</span>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-primary btn-rounded">Detail</button>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            )
                        }
                    </ul>
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
