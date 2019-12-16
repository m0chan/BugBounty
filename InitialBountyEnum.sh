#!/bin/bash
echo "\nSyntax, Arg1 = Domain, Arg2 = Output File"
echo "\nEnumerating " $1
echo "\nConsider using amass intel -org to find ASN and bruteforce/rev dns lookup CIDR range etc"

subfinder -d $1 -o $2.initialdomains
amass enum -d $1 | tee >> $2.initialdomains 
python3 $BugBounty/CrtSH.py $1 | tee >> $2.initialdomains

echo "\n\n Using ALTDNS to Find Permutations"

altdns $2.initialdomains -o $2.initialdomains.permutations -w $Tools/altdns/words.txt -r -s $2.initialdomains.permutations.resolved
cat $2.initialdomains.permutations.resolved >> $2.initialdomains
cat $2.initialdomains | grep -v "Average" | grep -v "Querying" | awk '!seen[$0]++' $2.initialdomains > $2

echo "\nFound The Following Amount of SubDomains (Will Check for SubTakeover & End" && wc -l $2

echo "\nUse github-search tools in $Tools Manually Here" 

echo "\nStarting Stage 2 - Service Discovery"
cat $2 | httprobe -c 50 | tee $2.httprobe
echo "\nCopying HTTP Servers to EyeWitness Dir" && cp $2.httprobe $Tools/EyeWitness
echo "\nStarting DirSearch for Basic Paths on Found Hosts"
python3 $Tools/dirsearch/dirsearch.py -L $2.httprobe -e .* -w $Tools/paths --simple-report=$2.dirsearch
echo "\nChecking Discovered Domains for Sub Takeovers"
subjack -w $2
