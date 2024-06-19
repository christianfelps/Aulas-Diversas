package Store;

import Animais.Animal;
import Animais.Dog;

public class Petshop {


    public void shower(Animal animal){
        animal.setStateOfMind("Clean");
    }

    public void shear(Dog dog){
        dog.setStateOfMind("Sheared");
    }

    public void stayInHotel(Animal animal){
        animal.setStateOfMind("To miss");
    }
}
