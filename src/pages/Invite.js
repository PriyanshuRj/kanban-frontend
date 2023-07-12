import React, {useState} from 'react'
import Layout from '../layout/Layout'
import { useParams } from 'react-router';
export default function Invite() {
    const { inviteId } = useParams();
  return (
    <Layout>

    <div>Invite</div>
    </Layout>
  )
}
