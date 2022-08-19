 import { useState } from "react";
 import { useNavigate } from "react-router-dom";
const Create = () => {
    const [title, setTitle]=useState('')
    const [sub , setSub] =useState('');
    const [starter, setStarter] =useState('');
    const [body , setBody]=useState('')

    const navigate =useNavigate()

    const  handleSubmit=(e)=>{
        e.preventDefault()
        let blog = {title, sub, starter, body}
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            body:JSON.stringify(blog),
            headers:{'Content-Type':'application/json'}

        }).then((results)=>{
            console.log('new blog created')
        })
        navigate('/')
    }
    return ( 
        <div className="login-box">
            <h1>Add new blog</h1>
      <form onSubmit={handleSubmit}>
    <div className="user-box">
    <label>Title</label>
    <input type="text" 
                    value={title}
                    required
                    onChange={(e)=>{setTitle(e.target.value)}}
                    />

    </div>
    <div className="user-box">
    <label>Sub-Title</label>
    <input type="text" 
                    value={sub}
                    required
                    onChange ={(e)=>{setSub(e.target.value)}}
                    />

    </div>
    <div className="user-box">
    <label >Starter</label>

        <input type="text" 
        value={starter}
        required
        onChange ={(e)=>{setStarter(e.target.value)}}
        />
    </div>

    <div className="user-box">
    <label htmlFor="">Body</label>
                 <textarea 
                 required
                 value={body}
                 onChange={(e)=>{setBody(e.target.value)}}
                 ></textarea>

    </div>
    <button>Add </button>
  </form>













           
        </div>
     );
}
 
export default Create;