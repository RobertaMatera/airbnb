import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Hosting extends Component {
    render() {
        return (
            <div className="mx-auto">
                <img src="images/host.jpg" alt="host woman" className="mx-5" />
                <h3>Questions about hosting?</h3>
                <Button  className="py-3 px-4 bg-button">Ask a Superhost</Button>{' '}
            </div>
        )
    }
}
