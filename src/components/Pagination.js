import React, { Component } from 'react'

export default class AdvertList extends Component {
    state = {
        page: 1
    }

    render() {
        var advertsRevers = this.props.advertsRevers
      
        var countOfPages = Math.ceil(advertsRevers.length / 5)

        this.pageCurrent = this.state.page
        if (this.pageCurrent < 1){
            this.pageCurrent = 1
            this.setState({
                page: 1
            })
        }
        if (this.pageCurrent > countOfPages){
            this.pageCurrent = countOfPages
            this.setState({
                page: countOfPages
            })
        }

        var indexBegin = this.pageCurrent*5 - 5
        var indexEnd = indexBegin + 5
        if (indexEnd > advertsRevers.length){
            indexEnd = advertsRevers.length
        }

        this.advertsView = advertsRevers.slice(indexBegin, indexEnd)

        return (
            <div className="pagination">
                <button className="btn btn-default" onClick={()=>this.handlerPaginationClick("backward")}>Назад</button>
                {this.pageCurrent}/{countOfPages}
                <button className="btn btn-default" onClick={()=>this.handlerPaginationClick("forward")}>Вперед</button>
            </div>
        )
    }

    handlerPaginationClick = (option) => {
        if(option === "backward") this.setState({page: --this.pageCurrent})
        if(option === "forward") this.setState({page: ++this.pageCurrent})
        this.props.onPageChange(this.advertsView, this.pageCurrent)
    }

}
/*
 onClick={()=>this.props.onPageChange("backward")}
                <button className="btn btn-default" onClick={()=>this.setState({page: --this.pageCurrent})}>Назад</button>
                {this.pageCurrent}/{countOfPages}
                <button className="btn btn-default" onClick={()=>this.setState({page: ++this.pageCurrent})}>Вперед</button>
*/