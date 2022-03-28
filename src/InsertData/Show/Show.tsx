import React, { useEffect, useState } from 'react'
import './show.scss'
import Button from 'react-bootstrap/Button'
import { MdEdit } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { BiDotsVertical } from 'react-icons/bi'


interface dataStructure {
    Users: {
        _id: string,
        name: string,
        age: string,
        date: string,
        __v: number
    }[]
}

const Show: React.FC = () => {
    const [Users, setUsers] = useState<dataStructure["Users"]>([])

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
                    <p>{count}#</p>
                    <p>{e.name}</p>
                    <p>{e.age}</p>
                    <p>Regular</p>
                    <p>{e.date}</p>
                    <p className='icons'>
                        <button><MdEdit /></button>
                        <button><AiFillDelete /></button>
                        <button><BiDotsVertical /></button>
                    </p>
                </div>
            })}
        </div>
    )
}

export default Show