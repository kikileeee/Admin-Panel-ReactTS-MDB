import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector} from 'react-redux'
import { dataStructure } from '../Show/Show'
import './updateUser.scss'

const UpdateUser: React.FC = () => {
    let editUser = useSelector<dataStructure, dataStructure>((state) => state)

    
    const [Username, SetUsername] = useState<string>('')
    const [Email, SetEmail] = useState<string>('')
    const [Role, SetRole] = useState<string>('')
    useEffect(() =>{
        SetUsername(editUser.name)
        SetEmail(editUser.email)
        SetRole(editUser.role)
    }, [])
    function updateUser() {
        let newInfoUser:dataStructure = editUser
        let readyForUpdate:Boolean = false
        if (Username !== ''){
            newInfoUser.name = Username
            readyForUpdate= true
        } if (Email !== ''){
            newInfoUser.email = Email
            readyForUpdate= true
        } if (Role !== ''){
            newInfoUser.role = Role
            readyForUpdate= true
        }
        console.log(newInfoUser)
        if (readyForUpdate){

            fetch('http://192.168.1.113:9000/users/', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newInfoUser)
            }).then(response => {
                window.location.reload()
            })
        }
        // reload
        //window.location.reload();
    }


    return (
        <div className='AddUser updateUser'>
            <div className='userItem'>
                <b>Username</b>
                <b>E-mail</b>
                <b>Role</b>
                <p></p>
            </div>
            <div className='userItem'>
                <input type="text" placeholder={editUser.name} onChange={(e) => SetUsername(e.target.value)}/>
                <input type="text" placeholder={editUser.email} onChange={(e) => SetEmail(e.target.value)}/>
                <select key={editUser._id} name="role" defaultValue={editUser.role} onChange={(e) => SetRole(e.target.value)}>
                    <option value="User" >User</option>
                    <option value="Mod" >Moderator</option>
                    <option value="Admin" >Admin</option>
                </select>
                <Button onClick={updateUser}>Update user</Button>

            </div>
        </div>

    )
}

export default UpdateUser