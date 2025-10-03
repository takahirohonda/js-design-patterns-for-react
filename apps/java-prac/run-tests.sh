#!/bin/bash
cd apps/java-prac

echo "Compiling main classes..."
mkdir -p build/classes
javac -d build/classes src/Main.java

echo "Compiling test classes..."
mkdir -p build/test-classes
javac -cp "lib/junit-platform-console-standalone-1.10.0.jar:build/classes" -d build/test-classes src/test/java/com/example/MainTest.java

echo "Running tests..."
java -jar lib/junit-platform-console-standalone-1.10.0.jar \
  --class-path build/classes:build/test-classes \
  --scan-class-path