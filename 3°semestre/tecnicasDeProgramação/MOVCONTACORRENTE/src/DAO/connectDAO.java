/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO;
 
//import java.util.List;
import java.sql.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.ResultSet;
//import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;
// import javax.swing.table.AbstractTableModel;
 
/**
*
* @author Gabriel Correa
*/
public class connectDAO {
 
    Connection con;
 
    public Connection connectDB() {
        JOptionPane.showMessageDialog(null, "Inicia a classe para conexão com SQL SERVER!");
 
        String caminho = "jdbc:sqlserver://localhost:1433;databaseName=MOV_CONTA_CORRENTE;"
                + "encrypt=true;trustServerCertificate=true;";
        String usuario = "sa";
        String senha = ".";
        try {
            con = DriverManager.getConnection(caminho, usuario, senha);
            JOptionPane.showMessageDialog(null, "Conectado com sucesso!");
        } catch (SQLException erro) {
            JOptionPane.showMessageDialog(null, "Erro de conexão, connectDAO - Mensagem => " + erro.getMessage());
            JOptionPane.showMessageDialog(null, "\n Erro de conexão, connectDAO - Estado => " + erro.getSQLState());
            JOptionPane.showMessageDialog(null, "\n Erro de conexão, connectDAO - Código => " + erro.getErrorCode());
        }
        return con;
        // con.close();
    }
 
    public void insereRegistroJFBD(String tabela, String strDados) {
 
        con = connectDB();
        Statement stmt;
        try {
            stmt = con.createStatement();
 
            String sql = "INSERT INTO dbo." + tabela + " "
                    + "VALUES (" + strDados + ")";
            JOptionPane.showMessageDialog(null, "String de Insert: " + sql);
 
            try {
                stmt.executeUpdate(sql);
                JOptionPane.showMessageDialog(null, "Inclusão executada com sucesso!");
            } catch (SQLException erro) {
                JOptionPane.showMessageDialog(null, "Erro de conexão, connectDAO - Mensagem => " + erro.getMessage());
                JOptionPane.showMessageDialog(null, "\n Erro de conexão, connectDAO - Estado => " + erro.getSQLState());
                JOptionPane.showMessageDialog(null, "\n Erro de conexão, connectDAO - Código => " + erro.getErrorCode());
            }
            con.close();
        } catch (SQLException ex) {
            Logger.getLogger(connectDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
 
    public void alteraRegistroJPBD(String table, String strDados, String pesquisaId) {
        con = connectDB();
        {
            Statement stmt;
            try {
                stmt = con.createStatement();
                String sql = "UPDATE dbo." + table + " SET " + strDados + " WHERE (" + pesquisaId + ");";
                try {
                    stmt.executeUpdate(sql);
                    JOptionPane.showMessageDialog(null, "Alteracao executada com sucesso!");
                } catch (SQLException erro) {
                    JOptionPane.showMessageDialog(null, "Erro de conexão, connectDAO - Mensagem => " + erro.getMessage());
                    JOptionPane.showMessageDialog(null, "\n Erro de conexão, connectDAO - Estado => " + erro.getSQLState());
                    JOptionPane.showMessageDialog(null, "\n Erro de conexão, connectDAO - Código => " + erro.getErrorCode());
                }
                con.close();
            } catch (SQLException ex) {
                Logger.getLogger(connectDAO.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
 
    public Clientes pesquisaClienteJPBD(String tabela, String pesquisaId) {
    Clientes clientesReturn = new Clientes();
    String tabelaSGBD = "CLIENTES";
    if (tabela.equals(tabelaSGBD)) {
        con = connectDB();
        Statement stmt;
        try {
            stmt = con.createStatement();
            String sql = "SELECT * FROM " + tabela + " WHERE id = " + pesquisaId;
            try (ResultSet dados = stmt.executeQuery(sql)) {
                if (dados.next()) {
                    clientesReturn.setIdCli(dados.getString(1));  
                    clientesReturn.setCPF(dados.getString(2));
                    clientesReturn.setNome(dados.getString(3));
                    clientesReturn.setEndereco(dados.getString(4));
                    clientesReturn.setBairro(dados.getString(5));
                    clientesReturn.setCidade(dados.getString(6));
                    clientesReturn.setUF(dados.getString(7));
                    clientesReturn.setTelefone(dados.getString(8));
                    clientesReturn.setEmail(dados.getString(9));
                    clientesReturn.setSexo(dados.getString(10));
                } else {
                    JOptionPane.showMessageDialog(null, "Nenhum cliente encontrado com esse ID.");
                }
            } catch (SQLException erro) {
                JOptionPane.showMessageDialog(null, "Erro de conexão, connectDAO - Mensagem => " + erro.getMessage());
                JOptionPane.showMessageDialog(null, "\n Erro de conexão, connectDAO - Estado => " + erro.getSQLState());
                JOptionPane.showMessageDialog(null, "\n Erro de conexão, connectDAO - Código => " + erro.getErrorCode());
            }
            con.close();
        } catch (SQLException ex) {
            Logger.getLogger(connectDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    return clientesReturn;
}
        }
    
