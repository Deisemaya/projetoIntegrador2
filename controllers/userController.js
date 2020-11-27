const path = require('path');
const usuarios = []
const Users = {
        show:(req, res) => {
          res.render('cadastro')
      },
        create: (req, res) => {
          let {nome, email, senha} = req.body;
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
          res.render("editar-perfil", {usuario}); 
      },
        editByName:(req, res) => {
          let nome = req.params.nome
          let usuario = usuarios.find((usuario) => {return usuario.nome == nodemon});
          res.render("editar-perfil", {usuario}) 
      },
        delete: (req, res)=>{
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
        showlogin:(req, res) => {
            res.render('login');
        },
        login:(req, res) => {
          let{email, senha} = req.body;
          let user = usuarios.find(
              user => (user.email == email && user.senha == senha)
          );
          if (user) {req.session.user = user
          return res.redirect ("perfil");
         } else {
             return res.redirect("login");
         }
      }
  }
  
  module.exports = Users;