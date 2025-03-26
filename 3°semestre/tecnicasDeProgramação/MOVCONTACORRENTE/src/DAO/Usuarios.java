/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO;
/**
 * @author Herivelton Gonçalves
 */
public class Usuarios {
    private String id_cli;
    private String senha;
    private String num_ag1;
    private String num_cc1;
    
    public Usuarios(String login, String senha, String id_cli) {
        this.id_cli = id_cli;
        this.senha = senha;
        this.num_ag1 = num_ag1;
        this.num_cc1 = num_cc1;
    }

    public Usuarios() {
        
    }
    
    public String getIdCli() {
        return id_cli;
    }

    public void setIdCli(String id_cli) {
        this.id_cli = id_cli;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getNum_ag1() {
        return num_ag1;
    }

    public void setNum_ag1(String num_ag1) {
        this.num_ag1 = num_ag1;
    }
    
        public String getNum_cc1() {
        return num_cc1;
    }

    public void setNum_cc1(String num_cc1) {
        this.num_cc1 = num_cc1;
    }
    
        // Método para retornar os valores SQL formatados
    public String dadosSQLValues() {
        String dadosUsuarios = "'" 
            + this.getIdCli()+ "', '" 
            + this.getSenha() + "', '" 
            + this.getNum_ag1() + "', '" 
            + this.getNum_cc1() + "'";
        return dadosUsuarios;
    }
}
