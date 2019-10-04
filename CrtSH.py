#!/usr/bin/env python3
#@felamos for JSON Assistance :)

 
from crtsh import crtshAPI
import json
import sys

results = ""

def Main():
    if len(sys.argv) < 2:
        sys.exit(f"[*] {sys.argv[0]} domain")

    domain = sys.argv[1]
    print(f"[*] Enumerating {domain}")

    def api(d):
        results = json.dumps(crtshAPI().search(d))
        return results

    def save(d, r):
        print(f"[*] Saved Raw JSON to File {d}.json")
        with open(f"{d}.json", "w") as f:
            f.write(r)
            f.close()

    def getname(r):
        json_object = json.loads(r)
        with open(domain + "_domains.subs", "w") as f:
            for url in json_object[0]:
                sub = url['name_value']
                f.write(sub+"\n")
                #print(sub)

        linecount = sum(1 for line in open(domain + "_domains.subs"))
        print("[*] Succesfully Found " + str(linecount) + " Domains")
        print("[*] Saved SubDomains to " + domain + "_domains.subs")
	
    save(domain, api(domain))
    getname(api(domain))


if __name__ == "__main__":
    Main()
