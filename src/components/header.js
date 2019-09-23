import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import GitHubButton from 'react-github-btn'

export const Header = () => (
  <Navbar bg="light" expand="lg" sticky="top">
    <Navbar.Brand>Stacki</Navbar.Brand>
    <Navbar.Collapse className="justify-content-end" data-size="large">
      <GitHubButton href="https://github.com/Teradata/stacki" data-size="large">
        View on GitHub
      </GitHubButton>
    </Navbar.Collapse>
  </Navbar>
)
