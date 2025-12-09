export default function AlbumCard({ title, coverImgPath, explicit, songs }: { title: string, coverImgPath: string, explicit: boolean, songs: Array<{ title: string, path: string }> }) {
  return (
    <div className="bg-black border-1 border-blue-100/10 rounded-xl relative ">
      <div className="absolute h-full w-full z-1 mix-blend-color-dodge shadow-2xl shadow-blue-500/50 rounded-xl" />
      <div className="p-4 z-3">
        <h3>{title}{explicit ? <span className="ml-2 px-1 text-sm text-red-700 border-1 border-red-700">EXPLICIT</span> : ''}</h3>
        <div className="grid grid-cols-[1fr_2fr]">
          <figure>
            <img src={coverImgPath} alt={`Album art for ${title}`} />
          </figure>
          <ul>
          {songs.map((song) => {
            return (
              <li key={song.title}>
                <div className="grid grid-cols-[1fr_2fr] gap-2">
                  <p>{song.title}</p>
                  <audio controls src={song.path}></audio>
                </div>
              </li>
            )
          })}
          </ul>
        </div>
      </div>
    </div>
  )
}
