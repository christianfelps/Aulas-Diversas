import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] numeros = {10, 23, 5, 9, 4};
        int maior = numeros[0];
        int menor = numeros[0];
        float media = 0;

        for(int i=0; i < numeros.length; i++){
            if (numeros[i] > maior){
                maior = numeros[i];
            }
            if (numeros[i] < menor){
                menor = numeros[i];
            }
           media = media + numeros[i];
        }
        media = media / numeros.length;
        System.out.println("maior numero" + maior );
        System.out.println("menor numero" + menor );
        System.out.println("Media " +  media);




     // String[] letras = new String[5];
    // [0] [1] [2] [3] [4]
//        letras[0] = "A";
//        letras[1] = "B";
//        letras[2] = "C";
//        letras[3] = "D";
//        letras[4] = "E";
//        System.out.println(letras);
//        for(int i = 0; i < letras.length; i++){
//            System.out.println(letras[i].toLowerCase());
//        }
//        String[] letras = {"A", "B", "C", "D", "E", "X"};

//        for(int i = 0; i < letras.length; i++){
//           System.out.println(letras[i]);
//       }

//        System.out.println(Arrays.toString(letras));




    }
}