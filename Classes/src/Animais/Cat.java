package Animais;

public class Cat extends Animal{

static int numberofCats;


    public Cat(String name, String color, int height, double weight) {
        super(name, color, height, weight);
    }

    @Override
    public String toString() {
        return "Cat{" +
                "name='" + name + '\'' +
                '}';
    }

    @Override
    public void sound() {
        System.out.println("Miau minhauiu!");
    }
}
