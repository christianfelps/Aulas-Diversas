package Animais;

 public abstract class  Animal {

        protected String name;
        protected String color;
        protected int height;
        protected double weight;
        protected String stateOfMind;

        public Animal(String name, String color, int height, double weight) {
            this.name = name;
            this.color = color;
            this.height = height;
            this.weight = weight;
        }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public String getStateOfMind() {
        return stateOfMind;
    }

    public void setStateOfMind(String stateOfMind) {
        this.stateOfMind = stateOfMind;
    }

    protected void eat(){}

        protected void sleep(){}

        public void sound(){}
    }


