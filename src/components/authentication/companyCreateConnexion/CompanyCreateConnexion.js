import React, { Component } from "react";
import CompanyCreateAccount from "./CompanyCreateAccount";
import ConnexionCompany from "./ConnexionCompany";
import "../authentication.css";

class CompanyCreateConnexion extends Component {
  state = {
    connexion: true
  };

  clickAccount = () => {
    this.setState({ connexion: false });
  };

  clickConnexion = () => {
    this.setState({ connexion: true });
  };
  
  render() {
    const { connexion } = this.state;
    return (
      <div>
        {connexion ? <h3>Connectez-vous !</h3> : <h3>Inscrivez-vous !</h3>}
        {connexion ? (
          <ConnexionCompany {...this.props} />
        ) : (
          <CompanyCreateAccount {...this.props} />
        )}
        {connexion ? (
          <p>
            Vous n'êtes pas encore sur OneTeam ?{" "}
            <a href="#" onClick={this.clickAccount} className="orangeBold">
              Inscrivez-vous !
            </a>{" "}
          </p>
        ) : (
          <p>
            J'ai déjà un compte,{" "}
            <a href="#" onClick={this.clickConnexion} className="orangeBold">
              je me connecte
            </a>{" "}
            !
          </p>
        )}
      </div>
    );
  }
}

export default CompanyCreateConnexion;
