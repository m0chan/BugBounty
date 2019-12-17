#!/bin/bash
echo "Creating Basic Permutations for " $1
for i in $(cat /home/aidan/Tools/alterations.txt); do echo $i.$1; 
done;


