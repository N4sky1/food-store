import React from 'react';
import { FoodstuffstoreServiceConsumer } from '../foodstuff-service-context';

const withFoodstuffstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <FoodstuffstoreServiceConsumer>
        {
          (foodstuffstoreService) => {
            return (<Wrapped {...props}
                     foodstuffstoreService={foodstuffstoreService}/>);
          }
        }
      </FoodstuffstoreServiceConsumer>
    );
  }
};

export default withFoodstuffstoreService;
