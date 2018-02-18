import React, { Component } from 'react'
import AdvertBlock from './AdvertBlock'

export default class AdvertList extends Component {
    state = {
        page: 1
    }

    render() {
        const advertsJSON = localStorage.getItem("adverts");
        if(advertsJSON == null) return (
            <div>
                <h3><i>Список объявлений</i></h3>
                <div>Объявления не найдены</div>
            </div>
        )

        const advertsLS = JSON.parse(advertsJSON);
        advertsLS.reverse()

        var countOfPages = Math.ceil(advertsLS.length / 5)

        var pageCurrent = this.state.page
        if (pageCurrent < 1){
            pageCurrent = 1
            this.setState({
                page: 1
            })
        }
        if (pageCurrent > countOfPages){
            pageCurrent = countOfPages
            this.setState({
                page: countOfPages
            })
        }

        var indexBegin = pageCurrent*5 -5
        var indexEnd = indexBegin + 5
        if (indexEnd > advertsLS.length){
            indexEnd = advertsLS.length
        }

        var advertsView = advertsLS.slice(indexBegin, indexEnd)

        const adverts = advertsView;

        const advertArray = adverts.map ((advert, index) =>
            <div key = {advert.id}>
                <AdvertBlock advert = {advert} userAuthorized = {this.props.userAuthorized} />
            </div>
        )
        return (
            <div>
                <h3><i>Список объявлений</i></h3>
                <button onClick={()=>this.setState({page: --pageCurrent})}>Назад</button>
                {pageCurrent}/{countOfPages}
                <button onClick={()=>this.setState({page: ++pageCurrent})}>Вперед</button>
                {advertArray}                
            </div>
        )
    }
}