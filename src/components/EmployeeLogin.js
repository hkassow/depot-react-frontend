import { useContext, useState } from "react"
import { UserContext } from "../context/user"


const EmployeeLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    }) 
    const { loginEmployee } = useContext(UserContext)
    const handleFormChange = (e) => {
        let {value, title} = e.target
        setFormData({...formData, [title]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        loginEmployee(formData)
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>email</label>
                <input onChange={(e) => handleFormChange(e)} value={formData['email']} title='email'></input>
                <label>password</label>
                <input onChange={handleFormChange} value={formData['password']} title='password'></input>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}


export default EmployeeLogin