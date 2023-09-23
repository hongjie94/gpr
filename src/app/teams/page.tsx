import React from 'react'
import TeamList from './teamList'
import fetchData from '@/lib/fetchData'

export default async function page() {

  const teams = await fetchData("teams");

  return (
    <div>
      <TeamList teamsData={teams}/>
    </div>
  )
}
