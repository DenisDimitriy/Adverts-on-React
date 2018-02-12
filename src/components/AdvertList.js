import React, { Component } from 'react'
import AdvertBlock from './AdvertBlock'
import adverts from '../adverts'

export default class AdvertList extends Component {
    render() {
        const advertArray = adverts.map ((advert, index) =>
            <div key = {advert.id}>
                <AdvertBlock advert = {advert} />
            </div>
        )
        return (
            <div>
                <h3>Список объявлений</h3>
                {advertArray}
            </div>
        )
    }
}