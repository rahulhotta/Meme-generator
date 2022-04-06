import React from 'react'
import memesData from '../memesData';



function Header() {
  let [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/24y43o.jpg"
  }
  )

  let [allMemes, setAllMemes] = React.useState(memesData)

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
}, [])

  function clickHandler() {
    
    let randomNumber = Math.floor(Math.random() * 100)
    let currentMemeUrl =allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: currentMemeUrl
    }))

  }


  function changeHandler(event)
  {
    setMeme(oldMeme => ({
      ...oldMeme,
      [event.target.name]: event.target.value
    }))
  }
  return (
    <header className='header'>

      <input
        type="text"
        className="inp"
        placeholder="Top Text"
        name='topText'
        value={meme.topText}
        onChange={changeHandler}
      />

      <input
        type="text"
        className='inp'
        placeholder="Bottom Text"
        name='bottomText'
        value={meme.bottomText}
        onChange={changeHandler}
      />
      <button className='new-img-btn' onClick={clickHandler}> Get a new meme image  🖼 </button>

      <div className="meme">
        <img src={meme.randomImage} className="new-meme-img" />
        <h2 className="meme-text--top">{meme.topText}</h2>
        <h2 className="meme-text--bottom">{meme.bottomText}</h2>
      </div>

    </header>
  )
}

export default Header