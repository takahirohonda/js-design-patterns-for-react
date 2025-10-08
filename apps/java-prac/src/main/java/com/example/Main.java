package com.example;

public class Main {
    
    public String getGreeting() {
        return "Hello, world!";
    }
    
    public String getGreeting(String name) {
        return "Hello, " + name + "!";
    }
    
    public int add(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        Main app = new Main();
        System.out.println(app.getGreeting());
    }
}