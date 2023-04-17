import React from 'react'
import './App.css'
import { TwitterFollorCard } from './TwitterFollowCard'
export function App () {
    return (
        <>
        <TwitterFollorCard isFollowing userName='Matias Anovazzi'>
            Matias Anovazzi
          </TwitterFollorCard>
          
          <TwitterFollorCard isFollowing={false} userName='Matias Anovazzi'>
            Pepe Argento
          </TwitterFollorCard>
        </>
        
    )
}