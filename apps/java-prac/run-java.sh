#!/bin/bash
cd apps/java-prac
mkdir -p build
javac src/Main.java -d build
java -cp build com.example.Main