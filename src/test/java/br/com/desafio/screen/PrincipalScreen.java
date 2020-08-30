package br.com.desafio.screen;

import org.openqa.selenium.support.PageFactory;

import br.com.desafio.config.ConfigDriver;


public class PrincipalScreen {
	public PrincipalScreen() {
		PageFactory.initElements(ConfigDriver.configurarDriver(), this);
	}

}
