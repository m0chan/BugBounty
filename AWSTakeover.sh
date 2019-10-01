#!/bin/bash

while read a; 
do
 echo "Enumerating $a"
 http -b GET http://$a | grep -E -q '<Code>NoSuchBucket</Code>|<li>Code: NoSuchBucket</li>' && echo "Subdomain takeover may be possible" || echo "Subdomain takeover is not possible"
done < StarbucksAWS.txt
