import React, { Component } from 'react';
import FoodstuffListItem from '../foodstuff-list-item';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { withFoodstuffstoreService } from '../hoc';
import { fetchFoodstuff, foodstuffAddedToCart } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './foodstuff-list.scss';

const FoodstuffList = ({ foodstuffs, onAddedToCart }) => {
  return (
    <ul className="foodstuff__products-list">
      {
        foodstuffs.map((foodstuff) => {
          return (
            <li key={foodstuff.id}>
              <FoodstuffListItem
                foodstuff={foodstuff}
                onAddedToCart={() => onAddedToCart(foodstuff.id)}/>
            </li>
          );
        })
      }
    </ul>
  );
};

class FoodstuffListContainer extends Component {

  componentDidMount() {
    this.props.fetchFoodstuff();
  }

  render() {
    const { foodstuffs, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <FoodstuffList foodstuffs={foodstuffs} onAddedToCart={onAddedToCart}/>;
  }
}

const mapStateToProps = ({ FoodstuffList: { foodstuffs, loading, error }}) => {
  return { foodstuffs, loading, error };
};

const mapDispatchToProps = (dispatch, { foodstuffstoreService }) => {

  return bindActionCreators({
    fetchFoodstuff: fetchFoodstuff(foodstuffstoreService),
    onAddedToCart: foodstuffAddedToCart
  }, dispatch);
};

export default compose(
  withFoodstuffstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(FoodstuffListContainer);
