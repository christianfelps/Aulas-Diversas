package Animais;

public class Bird extends Animal{
    static int numberOfBirds;

    public Bird(String name, String color, int height, double weight) {
        super(name, color, height, weight);
    }

    @Override
    public String toString() {
        return "Bird{" +
                "name='" + name + '\'' +
                '}';
    }

    @Override
    public void sound() {
        System.out.println("Piu piu");
    }
}
