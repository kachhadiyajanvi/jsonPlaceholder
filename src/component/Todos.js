import { useEffect, useState } from "react";
import Header from "./Header";
import axios from 'axios';
import { Container } from "react-bootstrap";
function Todos() {
    let [data, setdata] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
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
                        <th className="post_data">User_Id</th>
                        <th className="post_data">Title</th>
                        <th className="post_data">Status</th>
                    </tr> 
                    </thead>
                    {data.map((ele,ind)=>{
                        return(
                            <tr key={ind}>
                                <td className="post_data">{ele.id}</td>
                                <td className="post_data">{ele.userId}</td>
                                <td className="post_data">{ele.title}</td>
                                <td className="post_data">{ele.completed?'True':'False'}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            </Container>
        </>
    )
}
export default Todos;
