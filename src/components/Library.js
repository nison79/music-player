import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ songs,setCurrentSong,audioRef,isPlaying ,setSongs }) => {
    return (
        <div className="library">
            <h2>Library</h2>
                <div className="library-songs">
                    {songs.map((song) => (
                        <LibrarySong 
                        songs={songs} 
                        id={song.id}
                        key={song.id}
                        setCurrentSong={setCurrentSong} 
                        song={song}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                        />
                        ))}
                </div>
            
        </div>
    )
}

export default Library
