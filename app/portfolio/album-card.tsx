export default function AlbumCard({ title, coverImgPath, songs }: { title: string, coverImgPath: string, songs: Array<{ title: string, path: string }> }) {
  return (
    <div className="album-card">
      <h3>{title}</h3>
      <div className="grid grid-cols-[1fr_2fr]">
        <figure>
          <img src={coverImgPath} alt={`Album art for ${title}`} />
        </figure>
        <ul>
        {songs.map((song) => {
          return (
            <li>
              <div key={song.title} className="grid grid-cols-[1fr_2fr] gap-2">
                <p>{song.title}</p>
                <audio controls src={song.path}></audio>
              </div>
            </li>
          )
        })}
        </ul>
      </div>
    </div>
  )
}
