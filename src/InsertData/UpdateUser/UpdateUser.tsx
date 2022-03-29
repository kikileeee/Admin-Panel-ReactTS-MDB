import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../../store/actions'
import { dataStructure } from '../Show/Show'
import './updateUser.scss'

const UpdateUser: React.FC = () => {
    const editUser = useSelector<dataStructure, dataStructure>((state) => state)
    const userInfo:dataStructure = editUser
    const dispatch = useDispatch()

    

    return (
        <div className='AddUser'>
            <div className='userItem'>
                <b>Username</b>
                <b>E-mail</b>
                <b>Role</b>
                <p></p>
            </div>
            <div className='userItem'>
                <input type="text" placeholder={editUser.name} />
                <input type="text" placeholder={editUser.email} />
                <select name="role" value={editUser.role} onChange={(e) => {userInfo.role = e.target.value; dispatch(addUser(userInfo))}}>
                    <option value="User" >User</option>
                    {console.log(editUser)}
                    <option value="Mod" >Moderator</option>
                    <option value="Admin" >Admin</option>
                </select>
                <Button>Update user</Button>

            </div>
        </div>

    )
}

export default UpdateUser