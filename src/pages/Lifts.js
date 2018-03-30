import React, { Component } from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Input } from 'mdbreact';
import "../css/style.css"


class starterpage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <Card>
                            <div className="lift-center">
                                <h3><st>Click each exercise or click submit all</st></h3>
                            </div>
                                <CardBody>

                                <Button block color="primary">Exercise  Weight Reps</Button>
                                <br/>
                                <Button block color="primary">Block level button</Button>
                                <br/>
                                <Button block color="primary">Block level button</Button>
                                <br/>
                                <Button block color="primary">Block level button</Button>
                                <br/>
                                <Button block color="primary">Block level button</Button>
                                <br/>
                                <Button block color="primary">Block level button</Button>
                                <br/>
                                <Button block color="primary">Block level button</Button>
                                <br/>
                                <Button block color="primary">Block level button</Button>
                                <br/>
                                    <div className="lift-center">
                                        <Button color="primary">Submit All</Button>
                                    </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default starterpage;