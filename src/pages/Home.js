import React, { Component } from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Input } from 'mdbreact';
import "../css/style.css"


class Home extends Component {
    render() {
        return (
            <div className="intro">
                <section className="container row">
                    {/*Background Image */}

                    <div className="col-lg-3">

                    </div>
                    <div className="col-lg-6">
                        <CardBody>
                            <Card>
                                <CardBody>
                                    <div className="md-form">
                                        <Input label="Email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                                        <Input label="Password" icon="lock" group type="password" validate/>
                                        <div className="text-center">
                                            <Button color="primary">Login</Button>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </CardBody>
                    </div>
                    <div className="col-lg-3">

                    </div>
                </section>
            </div>
        );
    }
}

export default Home;