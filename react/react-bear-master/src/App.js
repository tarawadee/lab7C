import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BearCard from './components/BearCard'
import BearList from './components/BearList'
import InputForm from './components/InputForm';
import {useSelector , useDispatch} from 'react-redux';

export default () => (

    <div>
      <h2>Bears</h2>
      <BearList/>
      <InputForm/>
    </div>
)