import React, { useState } from 'react'
import './insertData.scss'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Show from './Show/Show'
import AddUser from './AddUser/AddUser'

const InsertData: React.FC = () => {
    const [key, setKey] = useState<string>('show');
    return (
        <div className='Container'>

            <div className="buttonPanel">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(`${k}`)}
                    className="mb-3"
                >
                    <Tab eventKey="show" title="Show users">
                        <Show setKey={setKey}/>
                    </Tab>
                    <Tab eventKey="add" title="Add user" >
                        <AddUser/>
                    </Tab>
                    <Tab eventKey="update" title="Edit User" disabled>
                        <p>Update</p>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default InsertData