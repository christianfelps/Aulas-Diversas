//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        String graduacao;
        int nota = 65;

        //nota do aluno for maior ou igual a 70, entao aprovado
        // A 80 B 70 C 60 D 0
  if (nota >= 80){
     graduacao = "A";
    }else if (nota >= 70) {
      graduacao = "B";
  }else if (nota >= 60) {
      graduacao = "C";
  }else if (nota < 60  && nota >= 0){
      graduacao = "D";
  }else {
     graduacao = "";
  }

  switch(graduacao){
        case "A":
        case "B":
            System.out.println("Aluno Aprovado");
        break;
        case "C":
        case "D":
            System.out.println("Aluno Reprovado");
            break;
        default:
            System.out.println("Graduaao invalida");
  }
    }

}