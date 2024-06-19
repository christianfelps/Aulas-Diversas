package main;

import implementation.Supermarket;
import implementation.SupermarketArray;

import java.util.Scanner;

public class main {

    private static final int size = 3;
    public static void main(String[] args) {
        Supermarket supermarket = new SupermarketArray(size);
        Scanner scanner = new Scanner(System.in);
        int opcao;

        do{
            System.out.println("\nLista de Compras");
            System.out.println("1 - Inserir");
            System.out.println("2 - Listar");
            System.out.println("3 - Remover");
            System.out.println("4 - Sair");
            System.out.println("Escolha uma opcao");
            opcao = scanner.nextInt();

            switch (opcao){

                case 1:
                    System.out.println("Digite o item a ser inserido:");
                    String item = scanner.next();//Only simple words
                    supermarket.add(item);
                    break;

                case 2:
                    supermarket.print();
                    break;

                case 3:
                    System.out.println("Digite a posicao do item a ser removido: ");
                    int index = scanner.nextInt();
                    supermarket.delete(index);
                    break;
                case 4:
                    System.out.println("Saidno do Programa");
                    break;
                default:
                    System.out.println("Opcao invalida. Por favor, escolha novamente. ");



            }


        }while(opcao != 4);

        scanner.close();

    }
}
