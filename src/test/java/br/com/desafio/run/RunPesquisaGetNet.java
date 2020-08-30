package br.com.desafio.run;

import org.junit.AfterClass;
import org.junit.Rule;
import org.junit.rules.TestRule;
import org.junit.runner.RunWith;

import com.codeborne.selenide.junit.TextReport;

import br.com.desafio.config.ConfigDriver;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        tags = "@PequisarSuperget",
        plugin = {"pretty","html: cucumber-html-reports"},
        features = "src/test/resources/features/",
        glue = {"br.com.desafio.steps"}
        )

public class RunPesquisaGetNet{
		@Rule
		public TestRule report = new TextReport().onFailedTest(true).onSucceededTest(true);
		
        @AfterClass
        public static void tearDown() {
        	ConfigDriver.killDriver();
        }
}
