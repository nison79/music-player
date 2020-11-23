import React from 'react'



const LibrarySong = ({ song , songs, setCurrentSong ,id , audioRef , isPlaying, setSongs ,setIsPlaying }) => {


    const songSelectHandler = async () => {
        //const selectedSong =  songs.filter((state) => state.id === id);
        await   setCurrentSong(song);

            audioRef.current.play();
        //add actives state
        const newSongs = songs.map((song) =>{
            if(song.id === id){
                return  {
                        ...song,
                        active:true,
                };
                } else {
                    return{
                        ...song,
                        active:false,
                    };
                }
            });
            setSongs(newSongs);
            //check if the song is playing
            if (isPlaying) audioRef.current.play();
        
        }
        const playSongHandler = () => {
            if(isPlaying){
                audioRef.current.pause();
                setIsPlaying(!isPlaying);
            }else{
                audioRef.current.play();
                setIsPlaying(!isPlaying);
            }
        };

    return (
        <div  onClick={songSelectHandler} onChange={playSongHandler} className ={`library-song ${song.active ? 'selected' : ''}`}>
            <img alt={song.name} src ={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
};


export default LibrarySong
