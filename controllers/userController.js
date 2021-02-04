const express = require('express');
const path = require('path');
const fs = require('fs')
const bcrypt = require('bcrypt');
const { stringify } = require('querystring');
const Sequelize = require('sequelize')
const config = require('../config/database')

const db = new Sequelize(config)
//const result = db.query("select * from  " ,{type:Sequelize.QueryTypes.S})

const usuarios = []

const Users = {
        show:(req, res) => {
          res.render('cadastro')  
      },
        
      create: (req, res) => {
          let {nome, email, senha} = req.body;
          let senhaCrip = bcrypt.hashSync(senha, 10)
          let usuario = stringify({nome, email, senha:senhaCrip})
          fs.writeFileSync(usuarioJson,usuario)
          usuarios.push = ({
              nome:nome,
              email: email,
              telefone:tefone,
              senha:senha
          });
          res.redirect('/');
      },      
        
      editById: (req, res) => {
          let id= req.params.id;
          let usuario = usuarios.find((usuario) => {return usuario.id == id});
          res.render('editar-perfil', {usuario}); 
      },
        
      editByName:(req, res) => {
          let nome = req.params.nome
          let usuario = usuarios.find((usuario) => {return usuario.nome == nodemon});
          res.render('editar-perfil', {usuario}) 
      },
        
      delete: (req, res)=> {
          const idParam = req.params.id
          /*usuario.findByIdAndDelete(idParam, (error, usuario) => {
              if(error) {
                  return res.status(500).send(error)
              } else {
                  if(usuario) {
                      return res.status(200).send("Usuário apagado.");
                  } else {
                      res.StatusSend(404);
                  }
              }
          })*/
        },
        
        showLogin:(req, res) => {
            res.render('login');
        },
        
        login:async (req, res) => {
          let{email, senha} = req.body;
          let usuarioSalvo = fs.readFileSync(usuarioJson, {enconding:"utf-8"})
          usuarioSalvo = JSON.parse(usuarioSalvo)

          if(email != usuarioSalvo.email){
              return res.send("Usuario  invalido")
          }
          if(bcrypt.compareSync(senha, usuarioSalvo.senha)){
              return res.send('senha invalida')
          }
          res.redirect('perfil')
        }
          /*let user = usuarios.find(
              user => (user.email == email && user.senha == senha)
          );
          if (user) {req.session.user = user
          return res.redirect ('perfil');
         } else {
             return res.redirect('login');
         }
      }*/,
      
      showCadastroMentor: (req, res) => {
        res.render('cadastro-mentor')
      }
  }
  
  module.exports = Users;