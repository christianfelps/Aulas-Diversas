package Animais;

public class Dog extends Animal{
    //Atributtos

    static int numberOfDogs;

    private int tailSize;

    //Construtores


    public Dog(String name, String color, int height, double weight, int tailSize) {
        super(name, color, height, weight);
        this.name = name;
        this.color = color;
        this.height = height;
        this.weight = weight;
        this.tailSize = tailSize;

        numberOfDogs++;

    }


    //Metodos







    public String pegar(){
        return "Bolinha";
    }
    public String interagir(String acao) {
        switch (acao) {
            case "carinho" : this.stateOfMind = "Feliz";
            break;
            case "vai dormir" : this.stateOfMind = "Bravo";
            break;
            case "pisar na patinha" : this.stateOfMind = "triste";
            break;
            default : this.stateOfMind = "neutro";
        }
        return this.stateOfMind;
    }

    @Override
    public String toString() {
        return "Dog{" +
                "name='" + name + '\'' +
                '}';
    }

    @Override
    public void sound() {
        System.out.println("AU AU AU!");
    }
}
