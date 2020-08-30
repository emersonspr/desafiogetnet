$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/RealizarPesquisa.feature");
formatter.feature({
  "name": "Pesquisar no campo de busca",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "name": "realizar acesso ao site",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@PequisarSuperget"
    }
  ]
});
formatter.step({
  "name": "que desejo acessar o site",
  "keyword": "Dado "
});
formatter.step({
  "name": "clicar no campo de busca",
  "keyword": "Quando "
});
formatter.step({
  "name": "informar \"\u003citemPesquisa\u003e\" e clico no botao pesquisar",
  "keyword": "E "
});
formatter.step({
  "name": "no resultado da busca, clico no link \"\u003cresultado\u003e\"",
  "keyword": "Então "
});
formatter.step({
  "name": "verifico se a modal foi aberta com a mensagem \"\u003cresultado\u003e\"",
  "keyword": "E "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "itemPesquisa",
        "resultado"
      ]
    },
    {
      "cells": [
        "superget",
        "Como acesso a minha conta SuperGet?"
      ]
    }
  ]
});
formatter.scenario({
  "name": "realizar acesso ao site",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@PequisarSuperget"
    }
  ]
});
formatter.step({
  "name": "que desejo acessar o site",
  "keyword": "Dado "
});
formatter.match({
  "location": "StepDefinitionRealizarPesquisa.queDesejoAcessarOSite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no campo de busca",
  "keyword": "Quando "
});
formatter.match({
  "location": "StepDefinitionRealizarPesquisa.acionarOCampoDeBusca()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar \"superget\" e clico no botao pesquisar",
  "keyword": "E "
});
formatter.match({
  "location": "StepDefinitionRealizarPesquisa.informarValorPesquisaEAcionoOBotaoPesquisar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no resultado da busca, clico no link \"Como acesso a minha conta SuperGet?\"",
  "keyword": "Então "
});
formatter.match({
  "location": "StepDefinitionRealizarPesquisa.noResultadoDaBuscaClicoNoLinkValorResultado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifico se a modal foi aberta com a mensagem \"Como acesso a minha conta SuperGet?\"",
  "keyword": "E "
});
formatter.match({
  "location": "StepDefinitionRealizarPesquisa.verificoSeAModalFoiAbertaComAMensagemValorResultado(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Exceção lançada.\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat br.com.desafio.sup.Util.inException(Util.java:57)\r\n\tat br.com.desafio.steps.StepDefinitionRealizarPesquisa.verificoSeAModalFoiAbertaComAMensagemValorResultado(StepDefinitionRealizarPesquisa.java:76)\r\n\tat ✽.verifico se a modal foi aberta com a mensagem \"Como acesso a minha conta SuperGet?\"(file:src/test/resources/features/RealizarPesquisa.feature:10)\r\n",
  "status": "failed"
});
});