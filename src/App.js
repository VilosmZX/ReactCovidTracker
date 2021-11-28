/* eslint-disable no-unused-vars */
import React from 'react';

import { Cards, Charts, CountryPicker } from './components';
import Styles from './App.module.css';
import { fetchData } from './api'
import coronaImage from './assets/covid.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={Styles.container}>
                <img className={Styles.image} src={coronaImage} alt='Covid' />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
            </div>
        )
    }
}

export default App;