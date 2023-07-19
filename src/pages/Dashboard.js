import React from 'react'
import Layout from '../layout/Layout'

import { useDispatch, useSelector } from 'react-redux'
import { setModalState } from '../redux/features/projectSlice';
import Projects from '../components/Projects';

export default function Dashboard() {
  const dispatch = useDispatch()
  


  return (
    <Layout>
      <Projects />
    </Layout>
  )
}
