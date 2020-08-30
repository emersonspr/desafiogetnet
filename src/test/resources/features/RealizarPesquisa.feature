#language: pt
Funcionalidade: Pesquisar no campo de busca

  @PequisarSuperget
  Esquema do Cenário: realizar acesso ao site
    Dado que desejo acessar o site
    Quando clicar no campo de busca
    E informar "<itemPesquisa>" e clico no botao pesquisar
    Então no resultado da busca, clico no link "<resultado>"
    E verifico se a modal foi aberta com a mensagem "<resultado>"

    Exemplos: 
      | itemPesquisa | resultado                           |
      | superget     | Como acesso a minha conta SuperGet? |
