#!/usr/bin/env bash

# install virtualbox --build-headless
deb http://download.virtualbox.org/virtualbox/debian yakkety contrib
sudo apt-key add oracle_vbox_2016.asc
sudo apt-key add oracle_vbox.asc
sudo apt-get update

sudo apt-get install virtualbox-5.1
sudo apt-get install dkms

# install vagrant
sudo apt-get install vagrant

# install ruby
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt-get update
sudo apt-get install ruby2.2 ruby2.2-dev

# install serverspec
sudo gem install serverspec
