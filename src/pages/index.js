 //https://github.com/PrototypeInteractive/gatsby-react-boilerplate */
 // npm run dev to start app
import React from 'react'
import Features from '../components/features'
import fuck from '../../images/fuck.png'
import fuckLogo from '../../images/fucktoken-circle-logo.png'


const IndexPage = props => (
  <main>
    {/*<Features data={props.data.allDataJson.edges[0].node.features} />*/}
    <div className="hero">
      <div className="hero__inner">
        <img className="hero-logo" src={ fuckLogo } alt="Fuck token logo"/>
        <h1> Express yourself, give a <img src={ fuck } alt="fuck"/></h1>
        <div className="button-container">
          <button className="button button-light"> Enter Fuckhub </button>
          <button className="button button-dark"> Get Tokens</button>
        </div>
      </div>
    </div>

  </main>
)


export default IndexPage
