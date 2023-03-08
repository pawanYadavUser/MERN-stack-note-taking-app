import React ,{useState}from 'react'
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const [credentials, setCredentials] = useState({email: "", password: "", name: ""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:5000/api/auth/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: credentials.email, password: credentials.password, name: credentials.name})
            });
            console.log("Adding for testing")
            console.log(response)
            const json = await response.json()
            console.log("Adding for testing2")
            console.log(json);
            if (json.success){
                // Save the auth token and redirect
                localStorage.setItem('token', json.authtoken); 
                history.push("/profile");
            }
            else{
                alert("Invalid credentials");
            }
        }catch(error){
            console.log(error)
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">name</label>
                    <input type="name" className="form-control" value={credentials.name} onChange={onChange} name="name" id="name" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
