/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO;
/**
 * @author Herivelton Gonçalves
 */
public class Clientes {
    private String id_cli;        
    private String nome;      //  
    private String CPF;       //
    private String endereco;  //
    private String numero;       // 
    private String complemento; //
    private String bairro;    //    
    private String cidade;       //  
    private String UF;          //  
    private String CEP;         //  
    private String email;      //
    private String status;       
    private String telefone;   //    
    private String CNPJ;      //     
    private String sexo;      //       

    public Clientes(String id_cli, String nome, String CPF, String endereco, String numero, 
                   String complemento, String bairro, String cidade, String UF, 
                   String CEP, String email, String status, String telefone, 
                   String CNPJ, String sexo) {
        this.id_cli = id_cli;
        this.nome = nome;
        this.CPF = CPF;
        this.endereco = endereco;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.UF = UF;
        this.CEP = CEP;
        this.email = email;
        this.status = status;
        this.telefone = telefone;
        this.CNPJ = CNPJ;
        this.sexo = sexo;
    }

    public String getIdCli() {
        return id_cli;
    }

    public void setIdCli(String id_cli) {
        this.id_cli = id_cli;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        if (nome == null){
            System.out.println("Nome inválido!");
            return;
        }
        this.nome = nome;
    }

    public String getCPF() {
        return CPF;
    }

    public void setCPF(String CPF) {
    String cpf; 
    cpf = CPF.replace(".", "");
    cpf = cpf.replace("-", "");
    
    try{
      Long.parseLong(cpf);
    } catch(NumberFormatException e){
        System.out.println("CPF Inválido!");
      return;
    }

    int d1, d2;
    int digito1, digito2, resto;
    int digitoCPF;
    String nDigResult;

    d1 = d2 = 0;
    digito1 = digito2 = resto = 0;

    for (int nCount = 1; nCount < cpf.length() - 1; nCount++) {
      digitoCPF = Integer.valueOf(cpf.substring(nCount - 1, nCount)).intValue();

      d1 = d1 + (11 - nCount) * digitoCPF;

      d2 = d2 + (12 - nCount) * digitoCPF;
    };

    resto = (d1 % 11);

    if (resto < 2)
      digito1 = 0;
    else
      digito1 = 11 - resto;

    d2 += 2 * digito1;

    resto = (d2 % 11);

    if (resto < 2)
      digito2 = 0;
    else
      digito2 = 11 - resto;

    String nDigVerific = cpf.substring(cpf.length() - 2, cpf.length());
    nDigResult = String.valueOf(digito1) + String.valueOf(digito2);
    boolean isValid =  nDigVerific.equals(nDigResult);
    if (!isValid){
        System.out.println("CPF Inválido!");
    return;
    }
        this.CPF = CPF;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getUF() {
        return UF;
    }

    public void setUF(String UF) {
        this.UF = UF;
    }

    public String getCEP() {
        return CEP;
    }

    public void setCEP(String CEP) {
        this.CEP = CEP;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String isStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCNPJ() {
        return CNPJ;
    }

    public void setCNPJ(String CNPJ) {
        if (CNPJ.equals("00000000000000") || CNPJ.equals("11111111111111") ||
        CNPJ.equals("22222222222222") || CNPJ.equals("33333333333333") ||
        CNPJ.equals("44444444444444") || CNPJ.equals("55555555555555") ||
        CNPJ.equals("66666666666666") || CNPJ.equals("77777777777777") ||
        CNPJ.equals("88888888888888") || CNPJ.equals("99999999999999") ||
       (CNPJ.length() != 14)){
        System.out.println("CNPJ Inválido!");
        return;
        }

    char dig13, dig14;
    int sm, i, r, num, peso;

      sm = 0;
      peso = 2;
      for (i=11; i>=0; i--) {
        num = (int)(CNPJ.charAt(i) - 48);
        sm = sm + (num * peso);
        peso = peso + 1;
        if (peso == 10)
           peso = 2;
      }

      r = sm % 11;
      if ((r == 0) || (r == 1))
         dig13 = '0';
      else dig13 = (char)((11-r) + 48);

      sm = 0;
      peso = 2;
      for (i=12; i>=0; i--) {
        num = (int)(CNPJ.charAt(i)- 48);
        sm = sm + (num * peso);
        peso = peso + 1;
        if (peso == 10)
           peso = 2;
      }

      r = sm % 11;
      if ((r == 0) || (r == 1))
         dig14 = '0';
      else dig14 = (char)((11-r) + 48);

      if ((dig13 == CNPJ.charAt(12)) && (dig14 == CNPJ.charAt(13))){
        this.CNPJ = CNPJ;
        return;
      }
        System.out.println("CNPJ Inválido!");
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }
    
    public boolean isValidName(String nome){
        return nome == null;
    }
    public Clientes(){
        
    }

    public void setID(String text) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    public String getID() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
    
        public String dadosSQLValues(){
        String dadosClientes;
        dadosClientes = "'"
                + this.getIdCli()+ "','"
                + this.getNome() + "','"
                + this.getEndereco() + "','"
                + this.getNumero()+ "','"
                + this.getComplemento()+ "','"
                + this.getBairro()+ "','"
                + this.getCidade()+ "','"
                + this.getUF() + "','"
                + this.getCEP() + "','"
                + this.getTelefone()+ "','"
                + this.getCPF() + "','"
                + "2020-01-01" + "','"
                + this.getCNPJ() + "'";
           
                
            return dadosClientes;
        }
        
        public String alterarDadosSQLValues(){
        String dadosClientes;
        dadosClientes = "ID='"
                + this.getIdCli()+ "',ID='"
                + this.getNome() + "',NOME='"
                + this.getEndereco() + "',ENDERECO='"
                + this.getNumero()+ "',NUMERO='"
                + this.getComplemento()+ "',COMPLEMENTO='"
                + this.getBairro()+ "',BAIRRO='"
                + this.getCidade()+ "',CIDADE='"
                + this.getUF() + "',UF='"
                + this.getCEP() + "',CEP='"
                + this.getTelefone()+ "',TELEFONE='"
                + this.getCPF() + "',CPF='"
                + "2020-01-01" + "','"
                + this.getCNPJ() + "'";
           
                
            return dadosClientes;
        }  
}
