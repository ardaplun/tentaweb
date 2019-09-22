import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div class="card-scene" onClick={() => window.location.replace("/")}>
        <div id="card" class="card">
          <div class="card-face card-backing">
            <div class="back-main">
              <p className="name">I think you are lost</p>
              <p className="short-desc">
                Well everyone will lost at least once in a lifetime, so try to
                type correctly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
