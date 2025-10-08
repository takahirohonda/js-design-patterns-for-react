#!/bin/bash
cd apps/java-prac

echo "Cleaning previous build..."
mvn clean

echo "Compiling and packaging..."
mvn package

echo "Build completed!"
echo "JAR file created in target/ directory"