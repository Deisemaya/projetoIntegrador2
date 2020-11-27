const express = require('express');

const indexController = {
    showHome: (req, res) => {
        res.render('home');
    },
    showAgenda: (req, res) => {
        res.render('agenda-mentor');
    },
    showMentores: (req, res) => {
        res.render('mentores');
    },
};





module.exports = indexController;