package com.example;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

public class MainTest {

    @Test
    @DisplayName("Test getGreeting returns correct greeting")
    public void testGetGreeting() {
        Main main = new Main();
        String result = main.getGreeting();
        assertEquals("Hello, world!", result);
    }

    @Test
    @DisplayName("Test getGreeting with name returns personalized greeting")
    public void testGetGreetingWithName() {
        Main main = new Main();
        String result = main.getGreeting("Alice");
        assertEquals("Hello, Alice!", result);
    }

    @Test
    @DisplayName("Test getGreeting with empty name")
    public void testGetGreetingWithEmptyName() {
        Main main = new Main();
        String result = main.getGreeting("");
        assertEquals("Hello, !", result);
    }

    @Test
    @DisplayName("Test add method with positive numbers")
    public void testAddPositiveNumbers() {
        Main main = new Main();
        int result = main.add(5, 3);
        assertEquals(8, result);
    }

    @Test
    @DisplayName("Test add method with negative numbers")
    public void testAddNegativeNumbers() {
        Main main = new Main();
        int result = main.add(-5, -3);
        assertEquals(-8, result);
    }

    @Test
    @DisplayName("Test add method with zero")
    public void testAddWithZero() {
        Main main = new Main();
        int result = main.add(5, 0);
        assertEquals(5, result);
    }

    @Test
    @DisplayName("Test add method with mixed positive and negative")
    public void testAddMixedNumbers() {
        Main main = new Main();
        int result = main.add(10, -3);
        assertEquals(7, result);
    }
}