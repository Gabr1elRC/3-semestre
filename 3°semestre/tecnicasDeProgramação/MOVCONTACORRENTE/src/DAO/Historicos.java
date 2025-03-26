/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO;

/**
 * @author Herivelton Gonçalves
 */
public class Historicos {

    private String id_his;
    private String historico;

    public Historicos(String id_his, String historico) {
        this.id_his = id_his;
        this.historico = historico;
    }

    public Historicos() {

    }

    public String getIdHis() {
        return id_his;
    }

    public void setIdHis(String id_his) {
        this.id_his = id_his;
    }

    public String getHistorico() {
        return historico;
    }

    public void setHistorico(String historico) {
        this.historico = historico;
    }
    
            public String dadosSQLValues() {

        String dadosUsuarios = "'" 

            + this.getIdHis()+ "', '" 

            + this.getHistorico()+ "'";

        return dadosUsuarios;

    }
 
}
