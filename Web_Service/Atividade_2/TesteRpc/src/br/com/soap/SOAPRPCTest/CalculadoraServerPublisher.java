package br.com.soap.SOAPRPCTest;

import javax.xml.ws.Endpoint;

/*
 * Publicação na porta 8080
 * */

public class CalculadoraServerPublisher {

  public static void main(String[] args)
  {
    Endpoint.publish("http://127.0.0.1:8080/SOAPRPCTest",
    new CalculadoraServerImpl());
  }
}
