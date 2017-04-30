import React, { Component } from 'react';

import Connexion_demande from './ajouter_demande_connexion';
import Ajouter_demande from './deposer_une_annonce';

export default class DepotDemande extends Component {
    render(){
        if (connection===0){
            return(
            <Connexion_demande/>
            );
        } else if (connection===1){
            return(
            <Ajouter_demande/>
            );
        }
    }
}