import React from "react";
import {Container} from "react-bootstrap";

function AccessStatistics(props) {
    const {state} = props;

    return (
        <Container fluid className="mt-5">
            <h3 className="mb-3 font-weight-bold">Access statistics (YYYY/MM)</h3>
            <div className="table-responsive text-center">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead className="bg-info text-white">
                    <tr>
                        <th>Date/Division</th>
                        <th>Unique visit</th>
                        <th>Page view</th>
                        <th>Average View</th>
                        <th>Mobile access</th>
                        <th>Ratio</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                    </tr>
                    <tr>
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>63</td>
                        <td>2011/07/25</td>
                        <td>$170,750</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <th>Sum</th>
                        <th>100</th>
                        <th>100</th>
                        <th>100</th>
                        <th>100</th>
                        <th>100</th>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </Container>
    )
}

export default AccessStatistics;