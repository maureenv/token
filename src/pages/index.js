 //https://github.com/PrototypeInteractive/gatsby-react-boilerplate */
 // npm run dev to start app
import React from 'react'
import Features from '../components/features'

import chart from '../../images/stats.png'
import coinIcon from '../../images/icon-coins.png'
import customizable from '../../images/customizable.png'
import bot from '../../images/botscreen.png'
import discord from '../../images/discord.jpg'
import fuck from '../../images/fuck.png'
import fuckBlue from '../../images/fuck-blue.png'
import fuckLogo from '../../images/fucktoken-circle-logo.png'
import laptop from '../../images/laptop.png'
import mail from '../../images/telegram.jpg'
import mailPNG from '../../images/mail.png'
import pieIcon from '../../images/icon-piechart.png'
import reddit from '../../images/reddit.jpg'
import secure from '../../images/secure.png'
import slack from '../../images/slack.jpg'
import twitch from '../../images/twitch.jpg'
import twitter from '../../images/twitter.jpg'
import wallet from '../../images/fuck-hub-wallet.png'
import walletSmall from '../../images/nofees.png'


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
      <div className="section-container gray-bg">
        <div className="features-container__inner">
          <h2 className="section-title"> Features </h2>
            <h3 className="section-subtitle"> Connect all of your social media accounts to one tipping wallet </h3>
            <div className="logos-container">
              <div className="logo-column">
                <img src={ twitter } alt="twitter"/>
                <img src={ reddit } alt="reddit"/>
                <img src={ discord } alt="discord"/>
              </div>
              <div className="logo-column">
                <img className="wallet" src={ wallet } alt="wallet"/>
              </div>
              <div className="logo-column">
                <img src={ mail } alt="mail"/>
                <img src={ twitch } alt="twitch"/>
                <img src={ slack } alt="slack"/>
              </div>
            </div>
            <button className="button button-purple auto-width"><img src={ pieIcon } alt="pie icon"/><p>Sign-Up For Fuckhub </p></button>
        </div>
      </div>
      <div className="section-container gradient-bg">
        <div className="section-title-container">
          <h2 className="section-title"> A Closer Look </h2>
          <h3 className="section-subtitle"> Connect all of your social media accounts to one tipping wallet </h3>
          <div className="grid-container">
            <div className="grid-container__inner">
              <div className="grid-item">
                <img src={ coinIcon } alt="coins"/>
                <p className="title"> No Fees </p>
                <p> We want the world to give a FUCK, so we offer no fees on your tips.  Gas costs are also free - we’ve got you covered. </p>
              </div>
              <div className="grid-item">
                <img src={ chart } alt="chart"/>
                <p className="title"> Personalized Stats </p>
                <p> Want to know how often you give a FUCK?  Our charts and statistics can show exactly how much of a FUCK you give (or don’t). </p>
              </div>
              <div className="grid-item">
                <img src={ walletSmall } alt="wallet"/>
                <p className="title"> Account Creation </p>
                <p> FuckHub wallets are automatically generated for new users.  Tipping someone a FUCK allows them to immediately join the fun, without the hassle of signing up. </p>
              </div>
              <div className="grid-item">
                <img src={ secure } alt="secure"/>
                <p className="title"> Secure </p>
                <p> Your tipping wallet is more secure than Equifax.  Sign in with any supported platform and enable 2-Factor authorization to keep your FUCKs safe. </p>
              </div>
              <div className="grid-item">
                <img src={ customizable } alt="customizable"/>
                <p className="title"> Customizable </p>
                <p> Become a top FUCKer and have your profile showcased on the dashboard of every other member.  Users can increase their rank based on the amount of tips they give. </p>
              </div>
              <div className="grid-item">
                <img src={ mailPNG } alt="Mail"/>
                <p className="title"> Free Withdrawals </p>
                <p> Your wallet features free withdrawals from FuckHub.  Want to send your FUCKs to cold storage?  No problem, withdrawal couldn’t be easier. FUCKs safe. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container gray-bg">
        <div className="section-title-container">
          <h2 className="section-title"> Tipping bots </h2>
          <h3 className="section-subtitle"> Tips from over 5 social media accounts. See the Tip-Bots in action. </h3>
        </div>
        <div className="two-column-container">
          <div className="two-column-container__inner">
            <img src={ bot } alt="bot"/>
            <img src={ bot } alt="bot"/>
            <img src={ bot } alt="bot"/>
            <img src={ bot } alt="bot"/>
            <img src={ bot } alt="bot"/>
            <img src={ bot } alt="bot"/>
          </div>
        </div>
      </div>

  </div>
)


export default IndexPage
