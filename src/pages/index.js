 //https://github.com/PrototypeInteractive/gatsby-react-boilerplate */
 // npm run dev to start app
import React from 'react'
import Features from '../components/features'
import fuck from '../../images/fuck.png'
import fuckLogo from '../../images/fucktoken-circle-logo.png'
import coinIcon from '../../images/icon-coins.png'
import pieIcon from '../../images/icon-piechart.png'
import fuckBlue from '../../images/fuck-blue.png'
import laptop from '../../images/laptop.png'


const IndexPage = props => (
  <div>
    {/*<Features data={props.data.allDataJson.edges[0].node.features} />*/}
    <div className="section-container blue-bg">
      <div className="hero__inner">
        <img className="hero-logo" src={ fuckLogo } alt="Fuck token logo"/>
        <h1> Express yourself, give a <img src={ fuck } alt="fuck"/></h1>
        <div className="button-container">
          <button className="button button-light"><img src={ pieIcon } alt="pie icon"/><p>Enter Fuckhub </p></button>
          <button className="button button-dark"><img src={ coinIcon } alt="coin icon"/><p>Get Tokens</p></button>
        </div>
      </div>
    </div>

    <div className="section-container">
      <div className="what-container__inner">
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/s_NiGNa6XmA?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div className="what-description">
          <h2> What is <img src={ fuckBlue } alt="fuck"/> Token?</h2>
          <p><em>FUCK Token</em> is an Ethereum-based tipping token for mainstream social media and chat websites.  Our token enables real-time peer-to-peer value exchange, while allowing users to express their opinions.  <em>Giving a FUCK</em> is similar to an upvote, like, or favorite.</p>
        </div>
      </div>
      </div>
      <div className="section-container gradient-bg">
        <div className="wallet-container__inner">
          <h2 className="section-title"> The Wallet </h2>
          <img src={ laptop } alt="laptop"/>
          <div className="description-container">
            <h3 className="section-subtitle"> Dashboard Design </h3>
            <p>When it comes to giving a FUCK, nothing is more important than keeping track of your movement.  With our FuckHub Dashboard you can monitor your balance, tips, burns, statistics and the leaderboard.</p>

            <p className="spacer-small">The top tippers are prominently displayed for every user to see, offering instant bragging rights of being the biggest FUCKer in the world.  You can also show how little of a FUCK you give by climbing the top burner rate.</p>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="features-container__inner">
          <h2 className="section-title"> Features </h2>
            <h3 className="section-subtitle"> Connect all of your social media accounts to one tipping wallet </h3>
            <button className="button button-purple auto-width"><img src={ pieIcon } alt="pie icon"/><p>Sign-Up For Fuckhub </p></button>
        </div>
      </div>

  </div>
)


export default IndexPage
