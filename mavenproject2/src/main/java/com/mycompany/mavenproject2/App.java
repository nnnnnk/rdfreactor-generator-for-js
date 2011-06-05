package com.mycompany.mavenproject2;


import java.util.logging.Level;
import java.util.logging.Logger;
import org.ontoware.rdf2go.Reasoning;
import org.ontoware.rdfreactor.generator.CodeGenerator;


/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        try {
            CodeGenerator.generate("foaf.rdf", "./src", "foaf", Reasoning.rdfs, true);
        } catch (Exception ex) {
            Logger.getLogger(App.class.getName()).log(Level.SEVERE, null, ex);
        }

        
        System.out.println( "Hello World!" );
    }
}
