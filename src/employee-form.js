import React, {useState} from 'react';
import { Button, Modal } from '@material-ui/core';
import './employee-form.css';
import {employee} from './employee-data';


export const EmployeeForm = ({data}) => {
    const [formState, setFormState] = useState(data);
    function saveHandler() {
        
    }
    function updateNameHandler(e) {
        setFormState({...formState, name: e.target.value})
    }
    function updatedesignationHandler(e) {
        setFormState({...formState, designation: e.target.value})
    }

    function updatePhoneHandler(e) {
        setFormState({...formState, phone: e.target.value})
    }

    function updateLocationHandler(e) {
        setFormState({...formState, location: e.target.value})
    }
   
    return <React.Fragment>
        {
            <div className="form">
            Employee edit
            <div className="form-element">
                <form>
                    <label>Name: </label><br/>
                    <input value={formState?.name} onChange={updateNameHandler}></input><br/>
                    <label>Designation: </label><br/>
                    <input value={formState?.designation} onChange={updatedesignationHandler}></input><br/>
                    <label>Phone: </label><br/>
                    <input value={formState?.phone} onChange={updatePhoneHandler}></input><br/>
                    <label>Location: </label><br/>
                    <input value={formState?.location} onChange={updateLocationHandler}></input><br/>
                    <button onClick={saveHandler}>Save</button>
                </form>
                
            </div>
        </div>
        }
        
    </React.Fragment>

}