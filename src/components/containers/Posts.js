import React, { Component } from 'react'
import { APIManager } from '../../utils'

class Posts extends Component {

    componentDidMount(){
        APIManager.get('/api/post')
        .then(results => {
            console.log()
        })
    }

    render(){
        return (
            <div>
                Posts Container     
            </div>     
        )
    }
}

export default Posts