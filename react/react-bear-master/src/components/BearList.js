import React, { useState, useEffect } from 'react'
import BearCard from './BearCard';
import './BearList.css';
import {useSelector , useDispatch} from 'react-redux';
import axios from 'axios'

const BearList = props => {

    const bears = useSelector(state => state.bear);
    const dispatch = useDispatch();

    const getBears = async () => {
        const result = await axios.get(`http://localhost:8000/api/bears`)
            
        dispatch({type:'GET_BEARS' , bears : result.data})
      }

      useEffect(() => {
        getBears()
      }, [])

    if (!bears || !bears.length)
        return (<h2>No bears</h2>)

    return (
        <div className='bearlist-container'>
            {
                bears.map((bear, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <BearCard  {...bear}  />
                    </div>
                ))
            }
        </div>

    )
}

export default BearList;