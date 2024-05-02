import React from 'react';
import DefaultLayout from '../layout/Default';

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title={'MORE IS BETTER'}>
                <h1>This is only for views, but you can use your imagination for a topping!</h1>
                <img src="https://1drv.ms/i/s!AopbLvRHqcpYp0yBfnM3zZOh8Ufc" alt="Topping" />
            </DefaultLayout>
        );
    }
}

export default New;