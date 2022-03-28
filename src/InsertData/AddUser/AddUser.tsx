import React, { useState } from 'react'
import './addUser.scss'
import Button from 'react-bootstrap/Button'


const AddUser: React.FC = () => {
    const [Username, SetUsername] = useState<string>('')
    const [Email, SetEmail] = useState<string>('')
    const [Role, SetRole] = useState<string>('User')

    interface userInfo {
        username: string,
        email: string,
        role: string
    }

    function addUser() {
        let userInfo: userInfo = {
            username: Username,
            email: Email,
            role: Role
        }
        fetch('http://192.168.1.113:9000/users/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
        })
    }

    return (
        <div className='AddUser'>
            <div className='userItem'>
                <b>Username</b>
                <b>E-mail</b>
                <b>Role</b>
                <p></p>
            </div>
            <div className='userItem'>
                <input type="text" placeholder='Username' onChange={(e) => SetUsername(e.target.value)} />
                <input type="text" placeholder='E-mail' onChange={(e) => SetEmail(e.target.value)} />
                <select name="role" onChange={(e) => SetRole(e.target.value)}>
                    <option value="User">User</option>
                    <option value="Mod">Moderator</option>
                    <option value="Admin">Admin</option>
                </select>
                <Button onClick={addUser}>Add User</Button>

            </div>
        </div>
    )
}

export default AddUser