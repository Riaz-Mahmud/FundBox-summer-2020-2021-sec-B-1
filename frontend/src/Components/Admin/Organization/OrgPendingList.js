import React from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState,useEffect} from 'react';

const OrgPendingList = () => {
    let serial = 0;
    const [getEvent, setGetEvent] = useState([]);
    const mount= async()=>{
        const res = await axios.get('http://localhost:8000/api/admin/pendingOrg');
        console.log(res.data);
        
        if (res.status === 200) {
            setGetEvent(res.data)
        }
    }

    
    useEffect(() => {
        mount();    
    }, []);

    return (
        <div className="col-sm-8 offset-sm-2" style={{ "marginTop" :"20px"}}>
            <div className="card">
                <div className="card-header" style={{ "padding" :"5px"}}>
                    <h4>
                    <Link to={'/admin/dashboard'} className="btn btn-primary btn-sm foat-end"> Back</Link>
                    </h4>
                
                    <h4 className="card-title"> Pending Sponsor List </h4>
               </div>

                <div className="class-body">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Info</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            getEvent.map((e) => {
                                return (
                                    <tr key={e.id} >
                                        <td>{serial += 1}</td>
                                        <td>
                                            {e.name} <br/>
                                            <small> <b>UserId:</b> {e.user_id} </small>
                                        </td>
                                        <td>
                                            <small> <b>Phone:</b> {e.phone} </small>  <br/>
                                            <small> <b>Phone:</b> {e.address} </small> <br/>
                                        </td>
                                        <td>Pending</td>
                                        <td>
                                            <Link to={`pendingOrgAccept/${e.id}`} className="btn btn-success btn-sm foat-end" > Accept </Link>
                                            <Link to={`pendingOrgdelete/${e.id}`} className="btn btn-danger btn-sm foat-end" > Delete </Link>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default OrgPendingList;