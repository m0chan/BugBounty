#!/bin/bash
echo "Syntax, Arg1 = Domain, Arg2 = Output File"
echo "Enumerating " $1
echo "Consider using amass intel -org to find ASN and bruteforce/rev dns lookup CIDR range etc"
subfinder -d $1 -o $2.initialdomains
amass enum -d $1 | tee $2.initialdomains 
python3 $BugBounty/CrtSH.py $1 | tee $2.initialdomains
cat $2.initialdomains | grep -v "Average" | grep -v "Querying" | awk '!seen[$0]++' $2.initialdomains > $2
echo "Found The Following Amount of SubDomains (Will Check for SubTakeover & End" && wc -l $2

echo "Starting Stage 2 - Service Discovery"
cat $2 | httprobe -c 50 | tee $2.httprobe
echo "Copying HTTP Servers to EyeWitness Dir" && cp $2.httprobe $Tools/EyeWitness
echo "Starting DirSearch for Basic Paths on Found Hosts"
python3 $Tools/dirsearch/dirsearch.py -L $2.httprobe -e .* -w $Tools/paths --simple-report=$2.dirsearch
echo "Checking Discovered Domains for Sub Takeovers"
subjack -w $2
