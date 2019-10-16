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

const LatestRelease = () => (
  <Card>
    <Card.Body>
      <Card.Text>
        <h2>Stacki 5.4 Release</h2>
        <p>
          The Stacki team is totally stoked to announce Stacki 5.4, the most
          thoroughly tested (knock on wood) release of Stacki to date, with a
          number of new features, bugfixes, refactors. Stacki is totally rad and
          you should use it to deploy all of your bare metal CentOS/RHEL 7.x,
          and SLES 12 machines in a fast, scalable, and repeatable manner. Or
          even VM's, if you're into that sort of thing.
        </p>
        <p>ISOs</p>
        <ul>
          <li>
            <a href="http://teradata-stacki.s3.amazonaws.com/release/stacki/5.x/stacki-5.4-redhat7.x86_64.disk1.iso">
              Stacki
            </a>
          </li>
          <li>
            <a href="http://teradata-stacki.s3.amazonaws.com/release/stacki/5.x/stackios-5.4-redhat7.x86_64.disk1.iso">
              StackiOS
            </a>
          </li>
        </ul>
        <p>VM Images</p>
        <ul>
          <li>
            <a href="http://teradata-stacki.s3.amazonaws.com/release/stacki/5.x/stacki-5.4-redhat7.qcow2">
              qcow2
            </a>
          </li>
          <li>
            <a href="http://teradata-stacki.s3.amazonaws.com/release/stacki/5.x/stacki-5.4-redhat7.ova">
              ova
            </a>
          </li>
        </ul>
        <p>
          Visit us on our Slack (see below) for more details on this release, or
          check out the very raw{' '}
          <a href="https://github.com/Teradata/stacki/releases/tag/stacki-5.4">
            release notes
          </a>
          .
        </p>
      </Card.Text>
    </Card.Body>
  </Card>
)

const Info = () => (
  <Card>
    <Card.Body>
      <Card.Text>
        <h2>Contact</h2>
        <p>
          Join us on{' '}
          <a href="https://join.slack.com/t/stacki/shared_invite/enQtMzEwOTIzMTIyOTk1LTFmNGM2NmNjZjNjNzhkYzUyMTg1OThhNzE5MmUzOWE1MGE1YTVmNDE5YmYxMzJmYjY3MDg0MGEwNGRmNmU3ZjM">
            Slack
          </a>{' '}
          (stacki.slack.com) to ask questions and complain.
        </p>
      </Card.Text>
    </Card.Body>
  </Card>
)

export default () => (
  <>
    <Header />
    <Logo />
    <WhatIsIt />
    <LatestRelease />
    <Info />
  </>
)
