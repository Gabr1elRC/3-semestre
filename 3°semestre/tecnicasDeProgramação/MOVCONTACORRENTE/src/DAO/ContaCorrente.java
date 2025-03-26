/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO;

/**
 * @author Herivelton Gonçalves
 */
public class ContaCorrente {

    private String num_conta;
    private String num_agencia;
    private String id_cli;
    private String saldo;

    public ContaCorrente(String num_conta, String num_agencia, String id_cli, String saldo) {
        this.num_conta = num_conta;
        this.num_agencia = num_agencia;
        this.id_cli = id_cli;
        this.saldo = saldo;
    }

    public ContaCorrente() {

    }

    public String getNumConta() {
        return num_conta;
    }

    public void setNumConta(String num_conta) {
        this.num_conta = num_conta;
    }

    public String getNumAgencia() {
        return num_agencia;
    }

    public void setNumAgencia(String num_agencia) {
        this.num_agencia = num_agencia;
    }

    public String getIdCli() {
        return id_cli;
    }

    public void setIdCli(String id_cli) {
        this.id_cli = id_cli;
    }

    public String getSaldo() {
        return saldo;
    }

    public void setSaldo(String saldo) {
        this.saldo = saldo;
    }
    
            // Método para retornar os valores SQL formatados
    public String dadosSQLValues() {
        String dadosContaCorrente = "'" 
            + this.getNumAgencia()+ "', '" 
            + this.getNumConta()+ "', '" 
            + this.getIdCli()+ "', '" 
            + this.getSaldo()+ "'";
        return dadosContaCorrente;
    }
}
