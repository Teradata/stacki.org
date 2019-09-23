import React from 'react'
import Card from 'react-bootstrap/Card'
import { Header } from '../components/Header'

import 'bootstrap/dist/css/bootstrap.min.css'

const Logo = () => {
  const image = require('../images/stacki-logo.png')
  return (
    <Card>
      <Card.Body className="text-center">
        <Card.Img style={{ width: 'auto' }} src={image} />
        <br />
        <br />
        <Card.Text>
          <h1>Bare Metal Installer</h1>
          <h3>For Real (and Virtual) Servers</h3>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

const WhatIsIt = () => (
  <Card>
    <Card.Body>
      <Card.Text>
        <h1>What is Stacki</h1>
        <p>
          Stacki (short for “Stack Installer”). Stacki is the world’s fastest
          and easiest-to-use Linux server provisioning tool. There are zero
          prerequisites for taking systems from bare metal to a ping and a
          prompt. This includes parallel installation of Red Hat, CentOS, or
          SuSe and configuration of things such as:
        </p>
        <ul>
          <li>DNS</li>
          <li>DHCP, TFTP, PXE</li>
          <li>Parallel Execution Shell</li>
          <li>Cluster Networking</li>
          <li>Multiple Distributions</li>
          <li>Host Discovery</li>
          <li>Host Assignment via Spreadsheet</li>
          <li>Partition Configuration</li>
          <li>Storage Controller Configuration </li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
)

const HowToGet = () => (
  <Card>
    <Card.Body>
      <Card.Text>
        <h2>Release</h2>
        <p>
          <a href="https://github.com/Teradata/stacki/releases/tag/stacki-5.0-rhel7">
            Stacki 5.0
          </a>{' '}
          was release on 11/30/2017.
        </p>
        <p>
          Yeah we know, we are working to pull togeth a fresh release for CentOS
          7.7 in early October 2019. Development has been extremely active since
          our last release, but we've been focused on SuSe and haven't had the
          cycles to pull together an open-source CentOS version.
        </p>
        <h2>Docs</h2>
        <p>
          All the documentation is part of the{' '}
          <a href="https://github.com/Teradata/stacki">Git Hub</a> project in
          our <a href="https://github.com/Teradata/stacki/wiki">Wiki</a>.
        </p>
        <h2>Contact</h2>
        <p>
          Join us on{' '}
          <a href="https://join.slack.com/t/stacki/shared_invite/enQtMzEwOTIzMTIyOTk1LWMzMGJhZGUxNDc2ODczMDM1ODkwYmM5MGZlOWUxMTVmMDQ5NzZhZmVmNDEwZDIwZWY3NzVlOGM0NjIxMjJiYjY">
            Slack
          </a>{' '}
          (stacki.slack.com) to ask questions and complain.
        </p>
      </Card.Text>
    </Card.Body>
  </Card>
)

export default () => (
  <div>
    <Header />
    <Logo />
    <WhatIsIt />
    <HowToGet />
  </div>
)
