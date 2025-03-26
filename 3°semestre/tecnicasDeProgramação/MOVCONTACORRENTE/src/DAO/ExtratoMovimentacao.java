/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO;

/**
 * @author Herivelton Gonçalves
 */
import java.time.LocalDateTime;
import java.math.BigDecimal;

public class ExtratoMovimentacao {
 
    private String num_conta;
    private String num_agencia;
    private String documento;
    private String data_movimentacao;
    private String credito_ou_debito;
    private String id_his;
    private String valor;
    private String saldo;
    private String Compl_his;
 
    // Constructor
    public ExtratoMovimentacao(String num_conta, String num_agencia, String documento,
            String data_movimentacao, String credito_ou_debito,
            String id_his, String valor, String saldo, String Compl_his) {
        this.num_conta = num_conta;
        this.num_agencia = num_agencia;
        this.documento = documento;
        this.data_movimentacao = data_movimentacao;
        this.credito_ou_debito = credito_ou_debito;
        this.id_his = id_his;
        this.valor = valor;
        this.saldo = saldo;
        this.Compl_his = Compl_his;
    }
 
    public ExtratoMovimentacao() {
 
    }

    ExtratoMovimentacao(String string, String string0, String string1, String string2, String c, String transferência, String string3, String string4) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
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
 
    public String getDocumento() {
        return documento;
    }
 
    public void setDocumento(String documento) {
        this.documento = documento;
    }
 
    public String getDataMovimentacao() {
        return data_movimentacao;
    }
 
    public void setDataMovimentacao(String data_movimentacao) {
        this.data_movimentacao = data_movimentacao;
    }
 
    public String getCreditoOuDebito() {
        return credito_ou_debito;
    }
 
    public void setCreditoOuDebito(String credito_ou_debito) {
        this.credito_ou_debito = credito_ou_debito;
    }
 
    public String getIdHis() {
        return id_his;
    }
 
    public void setIdHis(String id_his) {
        this.id_his = id_his;
    }
 
    public String getValor() {
        return valor;
    }
 
    public void setValor(String valor) {
        this.valor = valor;
    }
 
    public String getSaldo() {
        return saldo;
    }
 
    public void setSaldo(String saldo) {
        this.saldo = saldo;
    }
    public String getCompl_his() {
    return Compl_his;
    }
    public void setCompl_his(String Compl_his) {
        this.Compl_his = Compl_his;
    }
    // Método para retornar os valores SQL formatados
    public String dadosSQLValues() {
        String dadosExtratoMovimentacao = "'" 
            + this.getNumAgencia()+ "', '"
            + this.getNumConta()+ "', '" 
            + this.getDataMovimentacao()+ "', '" 
            + this.getDocumento()+ "', '" 
            + this.getCreditoOuDebito()+ "', '" 
            + this.getIdHis()+ "', '"
            + this.getCompl_his()+ "', '"
            + this.getValor()+ "', '" 
            + this.getSaldo()+ "'";
        return dadosExtratoMovimentacao;
    }
}