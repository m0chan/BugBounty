#!/bin/bash
for i in $(cat rootdomains.txt);
 do 
echo "Enumerating " $i 
curl -s https://certspotter.com/api/v0/certs?domain=$i | jq '.[].dns_names[]' | sed 's/\"//g' | sed 's/\*\.//g' | sort -u > $i.certspotter.subdomains
wc -l $i.certspotter.subdomains
done
