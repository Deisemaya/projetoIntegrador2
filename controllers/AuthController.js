const express = require('express');

const AuthController = {
    showHome: (req, res) => {
        res.render('home');
    },
    showAgenda: (req, res) => {
        res.render('agenda-mentor');
    },
    showMentores: (req, res) => {
        res.render('mentores');
    },
    showLogin:(req, res)=>{
        res.render('login');

    },
    showCadastro:(req, res) => {
        res.render('cadastro')
    }

    

};

module.exports = AuthController;