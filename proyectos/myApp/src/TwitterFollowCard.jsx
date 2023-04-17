import { useState } from "react"

export function TwitterFollorCard ({userName = 'unknown',children}) {
    const[isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    
    const buttonClassName = isFollowing ? 'tw-followcard-button is-following' : 'tw-followcard-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-follow-card">
            <header className="tw-followcard-header">
                <img
                className="tw-followcard-avatar" 
                src="src\assets\avatar.png" />
                <div className="tw-followcard-info">
                    <strong>{children}</strong>
                    <span className="tw-followcard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}