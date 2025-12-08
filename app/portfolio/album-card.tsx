export default function AlbumCard({ title, songs }: { title: string, songs: Array<{ title: string, path: string }> }) {
  return (
    <div className="album-card">
      <h3>{title}</h3>
      {songs.map((song) => {
        return (
          <div>
            <p>{song.title}</p>
            <audio controls src={song.path}></audio>
          </div>
        )
      })}
    </div>
  )
}
