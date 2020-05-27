import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Timers from '../Timers/Timers';
import Card from '../../components/UI/Card/Card';

class Home extends Component {
    render() {
        return (
            <Aux>
                <Card>
                    <main><Timers variant="basic"/></main>
                </Card>
            </Aux>
         );
    }
}

export default Home;
