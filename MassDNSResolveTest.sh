#!/bin/bash


/home/aidan/Tools/massdns/bin/massdns -r massdns/lists/resolvers.txt -t A -o S /home/aidan/BugBounty/Selectra/Subdomains.txt -w /home/aidan/BugBounty/Selectra/MassDNSResolve.txt

print "[*] Finished Enumerating " 
print "[*] Cleaning up with sed now"

sed 's/A.*//' /home/aidan/BugBounty/Selectra/MassDNSResolve.txt | sed 's/CN.*//' | sed 's/\..$//' > /home/aidan/BugBounty/Selectra/MassDNSResolve.clean.txt
