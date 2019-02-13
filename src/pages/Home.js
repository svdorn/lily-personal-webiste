import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import "./Home.css";

class Home extends Component {

    render() {
        return (
            <div className="home">
                <div>
                    <div>
                        Trustless leasing agreements that are guaranteed, instantaneous, and easy to use.
                    </div>
                    <div>
                        TrustLease aims to transform traditional leasing systems by giving power to both the lessor and lessee
                        to improve transparency between transactions and create an insurance mechanism to protect both parties
                        in the case of common collection disputes.
                    </div>
                    <Button size="large">
                        <Link to="/menu">Menu</Link>
                    </Button>
                </div>
            </div>
        );
    }
}

export default Home;
