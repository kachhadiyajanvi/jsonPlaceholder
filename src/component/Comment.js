import { useEffect, useState } from "react";
import Header from "./Header";
import axios from 'axios';
import { Container } from "react-bootstrap";
function Comments() {
    let [data, setdata] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
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
                <h1>COMMENT PAGE..!</h1>
                <table align="center" className="table bordered text-center">
                    <thead>
                    <tr className="bggray">
                        <th className="post_data">No.</th>
                        <th className="post_data">User_Id</th>
                        <th className="post_data">Title</th>
                        <th className="post_data">Name</th>
                        <th className="post_data">SubData</th>
                    </tr> 
                    </thead>
                    {data.map((ele,ind)=>{
                        return(
                            <tr key={ind}>
                                <td className="post_data">{ele.id}</td>
                                <td className="post_data">{ele.postId}</td>
                                <td className="post_data">{ele.name}</td>
                                <td className="post_data">{ele.email}</td>
                                <td className="post_data">{ele.body}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            </Container>
        </>
    )
}
export default Comments;
