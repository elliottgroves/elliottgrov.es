import AlbumCard from "@/app/portfolio/album-card"

export default function Page() {
  const albums: Array<{ title: string, coverImgPath: string, explicit: boolean, songs: Array<{ title: string, path: string }> }> = [
    { 
      title: '3+1', 
      coverImgPath: '',
      explicit: true,
      songs: [
        { title: 'Finally', path: '/audio/Finally.wav' },
        { title: 'Art', path: '/audio/Art.wav' },
        { title: 'Yells', path: '/audio/Yells.wav' },
        { title: 'Eternity', path: '/audio/Eternity.wav' }
      ]
    }
  ]

  return (
    <>
      <header>
        <h1>Portfolio</h1>
      </header>
      <section>
        <h2>Professional</h2>
        <article>
          <h3>Web</h3>
          <p>My life has been shaped by the internet. I've been lucky enough to make websites professionally in one way or another for the past 10 years.</p>
        </article>
      </section>
      <section>
        <h2>Personal</h2>
        <h3>Music</h3>
        <p>I enjoy making instrumental hip-hop inspired electronic music when the mood strikes me. Since college I've done so under the alias <b>mazy beats</b>. Below are some other instrumentals not available on <a href="https://soundcloud.com/mazybeats" target="_blank" rel="noreferrer">my SoundCloud</a>.</p>
        <ul>
          {albums.map((album) => <AlbumCard key={album.title} title={album.title} explicit={album.explicit} coverImgPath={album.coverImgPath} songs={album.songs}/>)}
        </ul>
      </section>
      <section>
        <h3>Games</h3>
        <p>I've had a lifelong fascination for games as an intersection of semiotics, art, and systems design, while capturing the essence of continual improvement. Life would be easier if it gave you as direct of feedback as a game.</p>
        <p> I've done some game jams with friends and have worked on video game projects in my spare time.</p>
      </section>
    </>
  )
} 
