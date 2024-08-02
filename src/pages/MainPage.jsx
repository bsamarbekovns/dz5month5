import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPostsDataSlice} from "../reducer/getPostsSlice.js";
import {Link} from "react-router-dom";

const MainPage = () => {
    const dispatch = useDispatch();
    const {users} = useSelector((state) => state.getPostsSlice);
    useEffect(() => {
        dispatch(getPostsDataSlice())
    }, [])
    console.log(users)

    return (
        <div style={{width:'600px' , gap:'20px',margin:'0 auto', flexWrap:'wrap', justifyContent:'space-around', display:'flex', border:'4px solid blue'}}>
            {
                users?(
                    users.map((item, index) => (
                        <Link to={`card/${item.id}`} style={{width:'150px', cursor:'pointer', height:'150px', border:'3px solid black'}} key={index}>
                            <span>{item.name}</span>
                            <span>{item.username}</span>
                            <p>{item.phone}</p>
                            <p>{item.website}</p>
                        </Link>
                    ))
                ):(
                    <h2>
                        loading
                    </h2>
                )
            }
        </div>
    );
};

export default MainPage;