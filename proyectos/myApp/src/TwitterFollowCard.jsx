export function TwitterFollorCard ({userName = 'unknown', children, isFollowing}) {
    console.log(isFollowing)
    
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
                <button className='tw-followcard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}