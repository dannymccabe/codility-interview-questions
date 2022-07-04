import {React, useState, useEffect} from 'react'
import axios from 'axios'

const Show = () => {
    const [posts, setPosts] = useState([])

    function getBurgers() {
        axios.get(`https://my-burger-api.herokuapp.com/burgers`)
        .then(res => {
            console.log(res)
            setPosts(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <div>
        <button onClick={()=>getBurgers()}>Get Burger</button>
        <div>
            {
                posts.map(post => <h2 key={post.id}>{post.description}</h2>)
            }
        </div>
    </div>
  )
}

export default Show