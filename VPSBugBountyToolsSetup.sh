#!/bin/bash

#
# Execute as wget -O - gist_url | bash
#
# Couldn't add gist url as, it changes after every update i.e. as soon as I save this, it's url will change :p
#
# It's debian based, so for centos and likewise you have to change apt to yum and similarly 
#
InstallationStartTime=$(date +%s)
#### COLORS #### ( Taken from : https://misc.flogisoft.com/bash/tip_colors_and_formatting )
NORMAL='\e[0m'
RED='\e[31m'
LIGHT_GREEN='\e[92m'
LIGHT_YELLOW='\e[93m'
BLINK='\e[5m'
BOLD='\e[1m'
UNDERLINE='\e[4m'
###############
apt-add-repository -y ppa:rael-gc/rvm
apt update -yq # && apt upgrade -y	# Do it manually, cause there are some whiptail menus that aren't automated yet and 
 					# thus cause problems

apt-get install -yq python unzip curl git gcc make libpcap-dev python3 python-pip python3-pip clang nmap pzip-full python3.6-dev
pip install rdpy==1.3.2
timedatectl set-timezone Asia/Kolkata
echo -e "\n${LIGHT_YELLOW}Delete older go binary ${NORMAL}\n"
original_go=`which go`
rm $original_go
echo -e "\n${LIGHT_YELLOW}Download go from golang website to install v1.10.3, as subfinder requires v1.10+ ${NORMAL}\n"
wget https://dl.google.com/go/go1.10.3.linux-amd64.tar.gz
tar -C /usr/local -xzf go1.10.3.linux-amd64.tar.gz
echo "export PATH=$PATH:/usr/local/go/bin" >> $HOME/.profile
rm go1.10.3.linux-amd64.tar.gz
echo -e "\n${LIGHT_YELLOW}Reload .bashrc and .profile ${NORMAL}\n"
source $HOME/.profile
source $HOME/.bashrc

mkdir tools && cd tools
echo -e "\n${LIGHT_YELLOW}Present Working Directory : "$PWD${NORMAL}

# git clone https://github.com/FortyNorthSecurity/EyeWitness.git && echo -e "\n${LIGHT_YELLOW}Running setup/setup.sh ${NORMAL}\n"
# Not using master repo cause, it has wrong options for extracting bzip2 archive type
# Also changed the download source to google drive so as to fasten the downloading process
# git clone https://github.com/LuD1161/EyeWitness.git && echo -e "\n${LIGHT_YELLOW}Running setup/setup.sh ${NORMAL}\n"
# cd EyeWitness/setup
# sh setup.sh
# cd ..
# Only download new phantomJS if the original EyeWitness failed 
# Use the following commented code if using FortyNorthSecurity's repo, as the extracted phantomJS is wrong

# curl -L -o phantomjs-2.1.1-linux-x86_64.tar.bz2 "https://drive.google.com/uc?export=download&id=1xc14FtJ0M10PQp5Em1XsmcraOFDXHV_G" -O phantomjs-2.1.1-linux-x86_64.tar.bz2
# tar jxf phantomjs-2.1.1-linux-x86_64.tar.bz2
# cp phantomjs-2.1.1-linux-x86_64/bin/phantomjs bin
# rm -rf phantomjs-2.1.1-linux-x86_64
# rm phantomjs-2.1.1-linux-x86_64.tar.bz2

# curl -L -o geckodriver-v0.13.0-linux32.tar.gz "https://drive.google.com/uc?export=download&id=1oQ-e8vcCLo7LZJJkJ5RsibUThQd9vndE" -O geckodriver-v0.13.0-linux32.tar.gz
# tar jxf geckodriver-v0.13.0-linux32.tar.gz
# cp geckodriver-v0.13.0-linux32/bin/phantomjs bin
# rm geckodriver-v0.13.0-linux32.tar.gz
# rm -rf geckodriver-v0.13.0-linux32


cd ~/tools
git clone https://github.com/jordanpotti/CloudScraper.git && echo -e "\n${LIGHT_YELLOW}Installing CloudScraper's requirements.txt ${NORMAL}\n"
pip install -r CloudScraper/requirements.txt

go get github.com/subfinder/subfinder
if [ $? -eq 0 ]; then
	mv ~/go/bin/subfinder /usr/bin/
	echo -e "\n${LIGHT_YELLOW} Installed subfinder ${NORMAL}\n"
	rm -rf subfinder
else
	echo -e "\n${LIGHT_YELLOW}Try reinstalling subfinder manually ${NORMAL}\n"
	echo -e "\n${LIGHT_YELLOW}RUN : go get github.com/subfinder/subfinder ${NORMAL}\n"
fi

cd ~/tools
git clone https://github.com/blechschmidt/massdns.git && echo -e "\n${LIGHT_YELLOW}Making and copying massdns to /usr/bin/ ${NORMAL}\n"
cd massdns
make
if [ $? -eq 0 ]; then
	mv /root/tools/massdns/bin/massdns /usr/bin/ && cd - # go back to main directory
	mkdir /root/tools/massdns_lists
	mv /root/tools/massdns/lists/* /root/tools/massdns_lists/massdns_lists/
	rm -rf massdns
	echo -e "\n${LIGHT_YELLOW}Installed massdns ${NORMAL}\n"
else
	echo -e "\n${LIGHT_YELLOW}Try reinstalling massdns manually ${NORMAL}\n"
	echo -e "\n${LIGHT_YELLOW}RUN : git clone https://github.com/blechschmidt/massdns.git ${NORMAL}\n"
	echo -e "\n${LIGHT_YELLOW}And then cd into the directory and issue make command ${NORMAL}\n"
fi

echo -e "\n${LIGHT_YELLOW}Proceeding with installation of masscan ${NORMAL}\n"
git clone https://github.com/robertdavidgraham/masscan.git && echo -e "\n${LIGHT_YELLOW}Making masscan ${NORMAL}\n"
cd masscan
make -j
if [ $? -eq 0 ]; then
	mv ./bin/masscan /usr/bin/ && cd - # go back to main directory
	rm -rf masscan && echo -e "\n${LIGHT_YELLOW}Deleted masscan github local clone ${NORMAL}\n"
	echo -e "\n${LIGHT_YELLOW}Installed masscan ${NORMAL}\n"
else
	echo -e "\n${LIGHT_YELLOW}Try reinstalling masscan manually ${NORMAL}\n"
	echo -e "\n${LIGHT_YELLOW}RUN : git clone https://github.com/robertdavidgraham/masscan.git ${NORMAL}\n"
	echo -e "\n${LIGHT_YELLOW}And then cd into the directory and issue make command ${NORMAL}\n"
fi


go get github.com/tomnomnom/waybackurls && echo -e "\n${LIGHT_YELLOW}Got waybackurls ;) ${NORMAL}\n"
mv ~/go/bin/waybackurls /usr/bin/
if [ $? -eq 0 ]; then
	echo -e "\n${LIGHT_YELLOW}Installed waybackurls ${NORMAL}\n"
else
	echo -e "\n${LIGHT_YELLOW}Try reinstalling waybackurls manually ${NORMAL}\n"
	echo -e "\n${LIGHT_YELLOW}RUN : go get github.com/tomnomnom/waybackurls && echo \"Got waybackurls ;)\" ${NORMAL}\n"
	echo -e "\n${LIGHT_YELLOW}Then move the binary from ~/go/bin/ to /usr/bin/ ${NORMAL}\n"
fi

git clone https://github.com/x90skysn3k/brutespray.git && echo -e "\n${LIGHT_YELLOW}Cloned Brutespray ${NORMAL}\n"

echo -e "\n${LIGHT_YELLOW}\n Downloading amass \n ${NORMAL}\n"
wget "https://drive.google.com/uc?export=download&id=1_cR9nKhoBcyZXkwifnucTTbe--qgJAUS" -O amass.zip
echo -e "\n${LIGHT_YELLOW}Extracting amass to /usr/bin/ ${NORMAL}\n"
unzip -o amass.zip -d /usr/bin/
if [ $? -eq 0 ]; then
	echo -e "\n${LIGHT_YELLOW}Installed amass ${NORMAL}\n"
	rm amass.zip
else
	echo -e "\n${LIGHT_YELLOW}Try redownloading amass ${NORMAL}\n"
fi

apt-get install -yq python-virtualenv bc locate dnsutils apache2 tree

cd ~/tools & echo -e "\n${LIGHT_YELLOW}Cloning JS-scan ${NORMAL}\n"
git clone https://github.com/zseano/JS-Scan.git
chmod o+x JS-Scan
ln -s "/root/tools/JS-Scan" /var/www/html/JS-Scan

cd ~/tools && echo -e "\n${LIGHT_YELLOW}Cloning bucketkicker ${NORMAL}\n"
git clone https://github.com/craighays/bucketkicker.git
pip3 install -r ~/tools/bucketkicker/requirements.txt

echo -e "\n${LIGHT_YELLOW}Installing trufflehog ${NORMAL}\n"
pip install truffleHog

echo -e "\n${LIGHT_YELLOW}Installing wafw00f ${NORMAL}\n"
pip install wafw00f

echo -e "\n${LIGHT_YELLOW}Installing whatweb ${NORMAL}\n"
apt-get install -yq whatweb

echo -e "\n${LIGHT_YELLOW}Installing snallygaster ${NORMAL}\n"
pip3 install snallygaster

cd ~/tools && echo -e "\n${LIGHT_YELLOW}Installing SubOver ${NORMAL}\n"
go get github.com/Ice3man543/SubOver
mkdir -p ~/tools/SubOver
mv ~/go/bin/SubOver ~/tools/SubOver
cp ~/go/src/github.com/Ice3man543/SubOver/providers.json ~/tools/SubOver

cd ~/tools && echo -e "\n${LIGHT_YELLOW}Cloning CloudFlare-Enum ${NORMAL}\n"
git clone https://github.com/mandatoryprogrammer/cloudflare_enum.git

cd ~/tools && echo -e "\n${LIGHT_YELLOW}Cloning AWS-Bruteforcer ${NORMAL}\n"
git clone https://github.com/Ucnt/aws-s3-bruteforce.git
cd aws-s3-bruteforce
pip install boto
cd ~/tools

# Although cloning Goohak and GoogD0rker but need to make a workaround for google's IP restriction on advanced search
# Cause these are not working for me
echo -e "\n${LIGHT_YELLOW}For Goohak and GoogD0rker pip install google ${NORMAL}\n"
pip install google

cd ~/tools && echo -e "\n${LIGHT_YELLOW}Cloning Goohak ${NORMAL}\n"
git clone https://github.com/1N3/Goohak.git
chmod +x Goohak/goohak 

cd ~/tools && echo -e "\n${LIGHT_YELLOW}Cloning GoogD0rker${NORMAL}\n"
# Using my own fork as the owner has still to merge my PR on his repo https://github.com/ZephrFish/GoogD0rker/pull/7/commits/89a3c1b1f76e4d562180cb4cbaaff03211e1264f
git clone https://github.com/LuD1161/GoogD0rker.git

cd ~/tools && echo -e "\n${LIGHT_YELLOW}Installing brakeman : For RoR applications ${NORMAL}\n"
# Alternative : gem install brakeman 
# Using git method so as to install the latest brakeman
git clone https://github.com/presidentbeef/brakeman.git
cd brakeman
gem build brakeman.gemspec
gem install brakeman-*.gem
mv ~/tools/brakeman/bin/brakeman /usr/local/bin/
mv ~/tools/brakeman/bin/codeclimate-brakeman /usr/local/bin/
rm -rf ~/tools/brakeman

cd ~/tools && echo -e "\n${LIGHT_YELLOW}Installing gitleaks ${NORMAL}\n"
go get -u github.com/zricethezav/gitleaks

cd ~/tools && echo -e "\n${LIGHT_YELLOW}Installing subjack${NORMAL}\n"
go get github.com/haccer/subjack
# cp ~/go/src/github.com/haccer/subjack/fingerprints.json


cd ~/tools && echo -e "\n${LIGHT_YELLOW}Downloading aquatone binary${NORMAL}\n"
echo -e "\n${LIGHT_YELLOW}Check the latest binaries at : https://github.com/michenriksen/aquatone/releases${NORMAL}\n"
wget "https://github.com/michenriksen/aquatone/releases/download/v1.4.3/aquatone_linux_amd64_1.4.3.zip"
unzip aquatone_linux_amd64_1.4.3.zip
rm aquatone_linux_amd64_1.4.3.zip


cd ~/tools && echo -e "\n${LIGHT_YELLOW}Installing chromium for aquatone${NORMAL}\n"
git clone https://github.com/scheib/chromium-latest-linux.git
cd chromium-latest-linux && sh update-and-run.sh
# for running chromium
apt-get install -yq --no-install-recommends libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 libnss3 

cd ~/tools && echo -e "\n${LIGHT_YELLOW}Getting all wordlists from gdrive, wordlists contain jhaddix's all.txt and massdns as well as subrute's names.txt  ${NORMAL}\n"
mkdir wordlists
wget "https://drive.google.com/uc?export=download&id=1X1TTZhxfiLyqrI1Vrw0_DdhFfl3LzsbX" -O all_resolvers.zip
unzip -o all_resolvers.zip -d wordlists
rm all_resolvers.zip

cd ~/tools && echo -e "\n${LIGHT_YELLOW}Downloading dirbuster wordlists ${NORMAL}\n"
wget "https://drive.google.com/uc?export=download&id=1KbxiE_RFZCDpBDKAJbWeG6NXe7YNtCIc" -O all_wordlists.zip
unzip -o all_wordlists.zip -d wordlists
rm all_wordlists.zip

# Finally when all is set and folder's deleted
# Get the scripts, it's in a gist
echo -e "\n${LIGHT_YELLOW}Getting the scripts ;\) ${NORMAL}\n"
wget "https://codeload.github.com/gist/8182f825bd91344ce4c2bf5e2acdf2b3/zip/5605e06e160f1f4870b60ba98438a0aa580d1e26" -O scripts.zip
unzip -j scripts.zip -d scripts
chmod +x ~/tools/scripts/*
rm scripts.zip 

# for i in $( ls scripts/*.sh ); do
# 	dir=$( echo $i | cut -d"/" -f2 | cut -d"." -f1)
#     chmod +x $i
#     if [ "$dir" != "brutespray" ]; then     # Cause we need to move brutespray.sh into brutespray where the brutespray.py is originally
# 	    mkdir $dir
# 	    mv $i $dir
#     fi
# done
# rm -rf scripts/
cd ~/tools/massdns/ && git clone https://github.com/TheRook/subbrute.git
mv subbrute/* .
rm -rf subbrute
pip install wfuzz

cd ~/tools
wget -O master_script.sh "https://gist.githubusercontent.com/LuD1161/0a85aef8e27e4a7644fd4b69efb62caa/raw/32b13233a5cbcd4c0bd4754d3e7906ca9d665c2d/master_script.sh"
chmod +x master_script.sh
wget -O nmap-input-file-creator.py "https://gist.githubusercontent.com/LuD1161/dbc44c6c028de2f0cbae9e737af5aa1e/raw/652a811492e89746a71da743e4735a08a74dcad5/nmap-input-file-creator.py"
chmod +x nmap-input-file-creator.py
apt autoremove -y

echo -e "\n${LIGHT_YELLOW}Building nmap from git ${NORMAL}\n"
cd ~/tools
git clone https://github.com/nmap/nmap.git
cd nmap && sh ./configure
make
make install

echo -e "\n${LIGHT_YELLOW}Installing wpscan requirements ${NORMAL}\n"
apt-get -yq install libcurl4-openssl-dev libxml2 libxml2-dev libxslt1-dev ruby-dev build-essential libgmp-dev zlib1g-dev gcc git ruby make software-properties-common
apt-add-repository -y ppa:rael-gc/rvm
apt-get update
apt-get install rvm
apt-get -yq install rvm
cd ~
source /etc/profile.d/rvm.sh
rvm install 2.5.1
rvm use 2.5.1 --default
echo -e "gem: --no-ri --no-rdoc" > ~/.gemrc
#echo -e "source /usr/local/rvm/scripts/rvm" >> ~/.bashrc
cd ~/tools
echo -e "${LIGHT_YELLOW}Cloning wpscan ${NORMAL}"
git clone https://github.com/wpscanteam/wpscan.git
cd wpscan
gem install bundler
bundle install --without test

### Install gobuster ####
echo -e "\n${LIGHT_YELLOW}Installing gobuster ${NORMAL}\n"
cd ~/tools && wget https://github.com/OJ/gobuster/releases/download/v2.0.1/gobuster-linux-amd64.7z
7z x gobuster-linux-amd64.7z
mv gobuster-linux-amd64/gobuster .
rm -rf gobuster-linux-amd64/
chmod +x ~/tools/gobuster
# cat targets.txt | while read line; do gobuster -f -k -e -to 5s -t 40 -w ~/tools/wordlists/starter.txt -u "$line" | tee out.txt ; done
#########################

echo -e "${LIGHT_YELLOW}Setting ulimit to 100000 ${LIGHT_GREEN}( so as to make gobuster work fine with 100 threads ) ${NORMAL}"
echo "ulimit -n 100000" >> ~/.bashrc

### Install searchsploit ####
echo -e "\n${LIGHT_YELLOW}Installing searchsploit${NORMAL}\n"
mkdir /opt
git clone https://github.com/offensive-security/exploitdb.git /opt/exploitdb
sed 's|path_array+=(.*)|path_array+=("/opt/exploitdb")|g' /opt/exploitdb/.searchsploit_rc > ~/.searchsploit_rc
ln -sf /opt/exploitdb/searchsploit /usr/local/bin/searchsploit

InstallationCompletionTime=$(date +%s)
echo -e "\n${LIGHT_YELLOW}Setting up GOPATH and GO bin in path ${NORMAL}\n"
echo "export GOPATH=$HOME/go" >> ~/.bashrc
echo "PATH=$PATH:/root/tools/chromium-latest-linux/latest/chrome-linux:/root/tools:$GOPATH/bin" >> ~/.bashrc
echo -e "${LIGHT_GREEN}Setup Complete Bug Bounty tools :) :) ${NORMAL}\n"
echo -e "${BOLD}Usage : ./master_script.sh domain basic|advanced${NORMAL}\n"
echo -e "Total Time taken : ${LIGHT_GREEN}$(( $InstallationCompletionTime-$InstallationStartTime )) ${NORMAL}seconds"
echo -e "\n${LIGHT_YELLOW}e.g. ./master_script.sh example.com basic|advanced ${NORMAL}\n"
echo -e "\n"
echo -e "${RED}Don't forget to add subfinder's config.json at ~/.config/subfinder/config.json${NORMAL}\n"
echo -e "\n${LIGHT_YELLOW}Also check for aquatone's latest binaries at : https://github.com/michenriksen/aquatone/releases${NORMAL}\n"
echo -e "\n${LIGHT_YELLOW}Enjoy :)  ${NORMAL}\n"
