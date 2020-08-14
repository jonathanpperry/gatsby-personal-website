import React from "react"

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">Code Blog</h4>
    <p className="text-center">Follow me on social media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://facebook.com/jonnyramen"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <i className="fab fa-facebook-f fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/jonathanpperry"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/jonathanpperry"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fab fa-instagram fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/jonathanpperry"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
