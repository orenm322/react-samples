import React, { Component } from 'react';

class Course extends Component {
    
    state = {
        id: null,
        title: null
    }


    componentDidMount() {
        this.loadData(); 
    }

    componentDidUpdate() {
        this.loadData(); 
    }

    loadData() {
        if(this.props.match.params.id) {
            if(!this.state.id || (this.state.id && this.state.id !== this.props.match.params.id) ) {
                let title = null;
                const query = new URLSearchParams(this.props.location.search);
                for (let param of query.entries()) {
                    if(param[0] === 'title') {
                        title = param[1];
                    }
                }
                this.setState({id: this.props.match.params.id, title: title })
            }
        }
    }

    
    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;