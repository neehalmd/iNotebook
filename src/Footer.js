import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer
          className="text-center text-white"
          style={{"background-color": "#0a4275", 'width':'100%'}}
        >
          <div className="container m-4 mb-0">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
                <button type="button" className="btn btn-outline-light btn-rounded">
                  Sign up!
                </button>
              </p>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{"background-color": "rgba(0, 0, 0, 0.2)"}}
          >
            © 2020 Copyright:
            <a className="text-white" href="/">
              NEEHAL MD
            </a>
          </div>
        </footer>
      
    </div>
  )
}

export default Footer
