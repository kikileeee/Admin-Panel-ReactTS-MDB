import React, { useEffect, useState } from 'react'
import './show.scss'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from 'react-bootstrap'
import { MdEdit } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { BiDotsVertical } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/actions'


export interface dataStructure {
    _id: string,
    name: string,
    email: string,
    role: string,
    date: string,
    __v: number
}

interface Props {
    setKey: React.Dispatch<React.SetStateAction<string>>
};


const Show: React.FC<Props> = (props) => {
    const [Users, setUsers] = useState<dataStructure[]>([])

    let count: number = 0

    useEffect(() => {
        fetch('http://192.168.1.113:9000/users/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            }
            );
    }, [])
    function takeDataOnUpdate() {
        fetch('http://192.168.1.113:9000/users/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            }
            );
    }
    async function deleteThis(x: string) {
        console.log(x)
        let data: object = { id: x }
        await fetch('http://192.168.1.113:9000/users/', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        takeDataOnUpdate()
    }

    const dispatch = useDispatch()
    async function updateUser(x: dataStructure) {
        props.setKey('update')


        dispatch(addUser(x))
    }


    return (
        <div className='Show'>
            <div className='fdisplay'>
                <Button variant="primary" onClick={() => { console.log(Users) }}>Search</Button>{' '}
                <input type="text" />
            </div>
            <div className='userItem'>
                <b>ID</b>
                <b>Username</b>
                <b>E-mail</b>
                <b>Role</b>
                <b>Created</b>
                <b>Actions</b>
            </div>
            {Users.map(e => {
                count += 1
                return <div className='userItem' key={e._id}>
                    <p>#{count}</p>
                    <p>{e.name}</p>
                    <p>{e.email}</p>
                    <p>{e.role}</p>
                    <p>{e.date}</p>
                    <div className='icons'>
                        <button onClick={() => updateUser(e)}><MdEdit /></button>
                        <button onClick={() => deleteThis(e._id)}><AiFillDelete /></button>
                        <DropdownButton id="dropdown-basic-button" title={<BiDotsVertical color='black' />} menuVariant='dark'>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Add a note to {e.name}</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Remove a note</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Show