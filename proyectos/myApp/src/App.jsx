import React from 'react'
import './App.css'
import { TwitterFollorCard } from './TwitterFollowCard'
export function App () {
    return (
        <>
        <TwitterFollorCard isFollowing={true}  userName='Matias Anovazzi'>
            Matias Anovazzi
          </TwitterFollorCard>
        </>
    )
}