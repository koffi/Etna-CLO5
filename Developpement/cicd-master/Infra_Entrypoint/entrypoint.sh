#!/bin/bash

###################

# Install docker engine sur l amachine host #
echo "----Installation de docker sur la machine host\n"
if [ $? -eq 0 ]
then
    docker --version | grep "Docker version"
    if [ $? -eq 0 ]
    then
        echo "------docker already installed\n"
    else
        echo "------installing  docker ....\n"
        sudo apt-get update
        sudo apt-get install docker.io -y
    fi
else
    echo "install docker\n" >&2

fi
echo " fin installation docker\n"
#####################################


# Install ansible #
echo "--------Installation de ansible sur la machine host\n"
if ! grep -q "ansible/ansible" /etc/apt/sources.list /etc/apt/sources.list.d/*; then
    echo "----Adding Ansible PPA\n"
    sudo apt-add-repository ppa:ansible/ansible -y
fi

if ! hash ansible >/dev/null 2>&1; then
    echo "----Installing Ansible...\n"
    sudo apt-get update
    sudo apt-get install software-properties-common ansible git python-apt -y
else
    echo "----Ansible already installed\n"
fi

echo " -------fin installation ansible\n"
#####################################

# Execution du playbook infrastructure.yml #

echo " -------Execution de infrastructure.yml\n"

ansible-playbook ../playbooks/infrastructure.yml