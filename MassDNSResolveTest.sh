#!/bin/bash
echo "Arg1 = Subdomain, Arg2 =Output" 
massdns -r resolvers.txt -t A -o J $1 | jq 'select(.resp_type=="A") | .query_name' | sort -u > $2
