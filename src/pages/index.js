import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import CV1 from "../images/CV1.jpg"
import CV2 from "../images/CV2.jpg"
import CV3 from "../images/CV3.jpg"
import CV4 from "../images/CV4.jpg"
import CV5 from "../images/CV5.jpg"

import telfigma from "../images/figma download.mp4"
import figmaname from "../images/figma name.mp4"
import sms from "../images/sms.mp4"
import perso from "../images/cvperson.mp4"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "XXX",
      lastName: "",
      mail: "tonmail@gmail.com",
      cv: 1,
    }

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeLastname = this.handleChangeLastname.bind(this)
    this.handleChangeMail = this.handleChangeMail.bind(this)
  }

  handleNextCv = () => {
    this.setState({ cv: this.state.cv + 1 })
  }

  handlePreviousCv = () => {
    this.setState({ cv: this.state.cv - 1 })
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value })
  }

  handleChangeLastname(e) {
    this.setState({ lastName: e.target.value })
  }

  handleChangeMail(e) {
    this.setState({ mail: e.target.value })
  }

  render() {
    let cvDisplay = CV1

    if (this.state.cv == 1) {
      cvDisplay = CV1
    } else if (this.state.cv == 2) {
      cvDisplay = CV2
    } else if (this.state.cv == 3) {
      cvDisplay = CV3
    } else if (this.state.cv == 4) {
      cvDisplay = CV4
    } else if (this.state.cv == 5) {
      cvDisplay = CV5
    }

    return (
      <Layout>
        <SEO title="Home" />
        <h1>
          Ton <b> CV </b> <br /> au prix d'une pinte 🍺
        </h1>
        <p>
          Petit outil pour te créer ton CV idéal: choisis ton modèle et
          personnalise-le très facilement. Enjoy !{" "}
        </p>

        <video className="mainvid" muted loop playsInline autoPlay>
          <source src={perso} type="video/mp4" />
        </video>

        <div className="sec-choice" id="fonctionnement">
          <h2> 1</h2>
          <p>
            {" "}
            Choisis ton <b>modèle </b> - n° {this.state.cv}
          </p>
          <div className="cvup">
            <img src={cvDisplay} alt="cv1" />

            {this.state.cv != 1 ? (
              <svg
                onClick={() => this.handlePreviousCv()}
                className="arleft"
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.939338 10.9393C0.353551 11.5251 0.353551 12.4749 0.939338 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.939338 10.9393ZM32 10.5L2 10.5V13.5L32 13.5V10.5Z"
                  fill="#171B81"
                />
              </svg>
            ) : null}

            {this.state.cv != 5 ? (
              <svg
                onClick={() => this.handleNextCv()}
                className="arright"
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.0607 13.0607C31.6464 12.4749 31.6464 11.5251 31.0607 10.9393L21.5147 1.3934C20.9289 0.80761 19.9792 0.80761 19.3934 1.3934C18.8076 1.97918 18.8076 2.92893 19.3934 3.51472L27.8787 12L19.3934 20.4853C18.8076 21.0711 18.8076 22.0208 19.3934 22.6066C19.9792 23.1924 20.9289 23.1924 21.5147 22.6066L31.0607 13.0607ZM1.31134e-07 13.5L30 13.5L30 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z"
                  fill="#171B81"
                />
              </svg>
            ) : null}
          </div>
        </div>

        <div className="sec pair">
          <video className="video " muted loop playsInline autoPlay>
            <source src={telfigma} type="video/mp4" />
          </video>
          <div className="text">
            <h2> 2</h2>
            <p>
              Télécharge{" "}
              <a href="https://www.figma.com/downloads/" target="blank">
                <b>Figma Desktop</b>
              </a>{" "}
              (ça prend 2 minutes, c’est gratos, et c’est pour personnaliser ton
              cv! Et utile pour plein d’autres choses)
            </p>
          </div>
        </div>

        <div className="sec">
          <div className="text">
            <h2> 3</h2>
            <p>
              Une fois ton compte créé, entre ici ton nom et ton prénom, et
              l’adresse mail avec laquelle tu t’es inscrite sur Figma
            </p>
            <form>
              <input
                type="text"
                name={this.state.name}
                placeholder="Prénom"
                onChange={this.handleChangeName}
              />
            </form>
            <form>
              <input
                type="text"
                lastName={this.state.lastname}
                placeholder="Nom"
                onChange={this.handleChangeLastname}
              />
            </form>
            <form>
              <input
                type="text"
                mail={this.state.mail}
                placeholder="Mail"
                onChange={this.handleChangeMail}
              />
            </form>
          </div>
          <video className="video" muted loop playsInline autoPlay>
            <source src={figmaname} type="video/mp4" />
          </video>
        </div>

        <div className="sec pair">
          <video className="video" muted loop playsInline autoPlay>
            <source src={sms} type="video/mp4" />
          </video>
          <div className="text">
            <h2> 4</h2>
            <p>
              Copie-colle ce sms et envoie-le moi au <b>0659133919</b>
            </p>
            <p className="sms">
              Hello! Je suis{" "}
              <b>
                {" "}
                {this.state.name} {this.state.lastName}{" "}
              </b>{" "}
              :) Peux-tu me partager le modèle de CV n°<b>{this.state.cv}</b> à
              cette adresse: <b>{this.state.mail}</b> ? Je viens de te faire le
              lydia de 5,50 € !{" "}
            </p>
          </div>
        </div>

        <div className="sec">
          <div className="text">
            <h2> 5</h2>
            <p>
              Paie-moi une petite bière (5,50 € via Lydia au 0659133919) en{" "}
              <b>précisant bien ton nom et prénom</b> et je te partage le modèle
              de CV sur Figma que tu pourras personnaliser à souhait !
            </p>
          </div>
          <video className="video" muted loop playsInline autoPlay>
            <source src={perso} type="video/mp4" />
          </video>
        </div>

        <br />
        <br />
        <br />

        <div className="contact" id="contact">
          <h3>
            <strong>Une question? Un problème? </strong>
          </h3>
          <p>
            N’hésite pas à me contacter au <b>0659133919</b> ou par mail à
            <b> an.bendahan@gmail.com</b>
          </p>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
