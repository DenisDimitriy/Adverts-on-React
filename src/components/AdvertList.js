import React, { Component } from 'react'
import AdvertBlock from './AdvertBlock'

export default class AdvertList extends Component {
    render() {
        const advertsJSON = localStorage.getItem("adverts");
        const adverts = JSON.parse(advertsJSON);

        const advertArray = adverts.map ((advert, index) =>
            <div key = {advert.id}>
                <AdvertBlock advert = {advert} />
            </div>
        )
        return (
            <div>
                <h3><i>Список объявлений</i></h3>
                {advertArray}
            </div>
        )
    }
}