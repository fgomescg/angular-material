# angular-material
Projeto CRUD angular com material design

Novo projeto angular
ng new ang-material-books
cd .\ang-material-books\

adicionando biblioteca material
ng add @angular/material => N, Y

//biblioteca de supporte de gestos
npm install --save hammerjs

//Criando módulo material
ng g module material --module app


//criando componente layout
ng g component layout --skipTests (Skiptests para não instalar arquivos de testes)

//adicionando biblioteca flex-layout
npm install @angular/flex-layout --save

//adicionando componente home
ng g component home --skipTests

//criango módulo para rota
ng g module routing --module app

//criando componente de navegação do header
ng g component navigation/header --skipTests

//criando componente de navegação lateral
ng g component navigation/sidenav-list --skipTests

//criando serviço de repositório
ng g service shared/repository --skipTests

//criando módulo de livro
ng g module book --module app

//criando component de lista de livros
ng g component book/book-list --skipTests

//criando modulo de rota para livro 
ng g module book/book-routing --module owner