import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosCancellation() {

    const [token, setToken] = useState("");
    const [toggle, setToggle] = useState(false);
    const [todos, setTodos] = useState([])

// BY USING BUTTON CLICK 
    // let productRequest;
    // const fetchData = () => {

    //     if (productRequest !== undefined) {
    //         productRequest.cancel();
    //         axios.get('https://jsonplaceholder.typicode.com/todos', {
    //             cancelToken: productRequest.token
    //         }).then((req) => {
           
    //             setTodos(req)
    //         })
    //     }

    //     productRequest = axios.CancelToken.source();

    //     axios.get('https://jsonplaceholder.typicode.com/todos', {
    //         cancelToken: productRequest.token
    //     }).then((req) => {
    //         console.log(req.data)
    //         setTodos(req.data)
    //     })
    // }

    // BY USING USEEFFECT
    useEffect(() => {
        const productRequest = axios.CancelToken.source();
        axios.get('https://jsonplaceholder.typicode.com/todos',{
                cancelToken : productRequest.token
            }).then((req) => {
                console.log(req.data)
        })

      return () => {
        productRequest.cancel();
      }
    }, [toggle])


    return (
        <div>

            <div>

                {/* <button onClick={fetchData}> Fetch Data</button> */}
            </div>
            {/* <div> */}

                <button onClick={()=>{setToggle(p => !p)}}>Toggle</button>
            {/* </div> */}
            {/* {
                toggle &&
                <> <h1>Showing... </h1></>
            } */}
            
                {
                    todos.map((todo)=>{
                        console.log("todo", todo)
                        return(

                            <h5 key={todo.id}>{todo.id} - {todo.title} </h5>
                        )
                    })
                }
         
        </div>
    )
}

export default AxiosCancellation;