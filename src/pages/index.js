import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import ImageSmile from "../components/imageSmile"
import ImageUnsmile from "../components/imageUnsmile"
import SEO from "../components/seo"
import linkedin from "../images/icons/linkedin.svg"
import fb from "../images/icons/fb.svg"
import github from "../images/icons/github.svg"
import twitter from "../images/icons/twitter.svg"
import email from "../images/icons/email.svg"
import "../styles/index.less"

const IndexPage = () => {
  let [isHappy, setIsHappy] = React.useState(false)

  const flipCardHandler = () => {
    let card = document.getElementById("card")
    // let isTouchEnabled = 'ontouchstart' in window

    if (card.classList.contains("card--flipped")) {
      card.classList.add("card--unflip")

      setTimeout(function() {
        card.classList.remove("card--flipped", "card--unflip")
      }, 500)
    } else {
      card.classList.add("card--flipped")
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div className="card-scene" style={{ height: "90%" }}>
          <div id="card" className="card" onClick={flipCardHandler}>
            <div
              className="card-face card-backing"
              style={{ height: "100%" }}
              onMouseEnter={() => setIsHappy(true)}
              onMouseLeave={() => setIsHappy(false)}
            >
              <div className="back-main">
                <div style={{ width: "50%" }}>
                  {isHappy ? <ImageSmile /> : <ImageUnsmile />}
                </div>
                <p className="name">YULIAN TENTA WARDANA</p>
                <p className="short-desc">
                  Front-End and Internet of Things Enthusiast
                </p>
              </div>
            </div>
            <div className="card-face card-front" style={{ height: "100%" }}>
              <div className="main-pane">
                <div className="desc">
                  <p>
                    Currently working at <br />
                    <a href="https://prospace.io">
                      ProSpace Analytics Pte Ltd
                    </a>{" "}
                    as a <br />
                    Tech Team Lead and Frontend Developer
                  </p>
                </div>
                <div className="link-container">
                  <img
                    src={fb}
                    style={{height:'23px'}}
                    alt="my facebook profile"
                    onClick={() =>
                      window.open("https://web.facebook.com/yulian.wardana")
                    }
                  />
                  <img
                    src={twitter}
                    alt="my twitter account"
                    onClick={() => window.open("https://twitter.com/ardaplun")}
                  />
                  <img
                    src={email}
                    style={{height:'23px'}}
                    alt="my personal email"
                    onClick={() =>
                      window.open(
                        "mailto:yulianwardana@gmail.com?subject=Found you from website"
                      )
                    }
                  />
                  <img
                    src={linkedin}
                    alt="my online cv's"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/yuliantentawardana/"
                      )
                    }
                  />
                  <img
                    src={github}
                    style={{height:'24px'}}
                    alt="my online cv's but in project code"
                    onClick={() => window.open("https://github.com/ardaplun")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
