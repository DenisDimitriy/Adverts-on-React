import React, { Component } from 'react'

export default class AdvertList extends Component {
    state = {
        page: 1
    }

    render() {
        var countOfPages = this.props.countOfPages
      
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
        this.props.onPageChange(this.pageCurrent)
    }
}