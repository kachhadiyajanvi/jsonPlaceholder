import { useEffect, useState } from "react";
import Header from "./Header";
import axios from 'axios';
import { Container } from "react-bootstrap";
function Users() {
    let [data, setdata] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                console.log(response.data);
                setdata(response.data);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])
    return (
        <>
            <Header></Header>
            <Container>
                <div className="data py-4">
                    <h1>TODOS PAGE..!</h1>
                    <table align="center" className="table bordered text-center">
                        <thead>
                            <tr className="bggray">
                                <th className="post_data">No.</th>
                                <th className="post_data">Name</th>
                                <th className="post_data">Username</th>
                                <th className="post_data">Email</th>
                                <th className="post_data">Address</th>
                                <th className="post_data">Phone</th>
                                <th className="post_data">Website</th>
                                <th className="post_data">Company</th>
                            </tr>
                        </thead>
                        {data.map((ele, ind) => {
                            return (
                                <tr key={ind}>
                                    <td className="post_data">{ele.id}</td>
                                    <td className="post_data">{ele.name}</td>
                                    <td className="post_data">{ele.username}</td>
                                    <td className="post_data">{ele.email}</td>
                                    <td className="post_data">
                                        <table className="text-start">
                                            <tr>
                                                <td><b>Street:-</b>{ele.address.street}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Suite:-</b>{ele.address.suite}</td>
                                            </tr>
                                            <tr>
                                                <td><b>City:-</b>{ele.address.city}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Zipcode:-</b>{ele.address.zipcode}</td>
                                            </tr>
                                            <tr>
                                                <td className="d-inline-block"><b></b>
                                                    <table>
                                                        <tr>
                                                            <td><b>Geo:-</b>Lat:-{ele.address.geo.lat}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="ps-5">Lng:-{ele.address.geo.lng}</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td className="post_data">{ele.phone}</td>
                                    <td className="post_data">{ele.website}</td>
                                    <td className="post_data">
                                        <table className="text-start">
                                            <tr>
                                                <td><b>Name:-</b>{ele.company.name}</td>
                                            </tr>
                                            <tr>
                                                <td><b>CatchPhrase:-</b>{ele.company.catchPhrase}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Bs:-</b>{ele.company.bs}</td>
                                            </tr>
                                            <tr>
                                            </tr>

                                        </table>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </Container>
        </>
    )
}
export default Users;
