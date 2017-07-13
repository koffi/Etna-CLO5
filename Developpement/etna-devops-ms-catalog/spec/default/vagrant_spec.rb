require 'spec_helper'

# DOCKER
    # docker-ce package: should be installed
    describe package('docker-ce'), :if => os[:family] == 'ubuntu' do
        it { should be_installed }
    end

    # docker service: should be enabled & running
    describe service('docker'), :if => os[:family] == 'ubuntu' do
        it { should be_enabled }
        it { should be_running }
    end

    # mongo container: should be listening on 27017 port
    describe port(27017) do
        it { should be_listening }
    end

    # mongo-express container: should be listening on 8081 port
    describe port(8081) do
        it { should be_listening }
    end

# NODEJS
    # nodejs package: should be installed
    describe package('nodejs'), :if => os[:family] == 'ubuntu' do
        it { should be_installed }
    end

    # node bin: should exists
    describe command('which node') do
        its(:stdout) { should match '/usr/bin/node' }
    end

    # node version: should be at least 8
    describe command('/usr/bin/node --version') do
        its(:stdout) { should match 'v8.*' }
    end

# NPM
    # npm bin: should exists
    describe command('which npm') do
        its(:stdout) { should match '/usr/bin/npm' }
    end

    # npm version: should be at least 5
    describe command('/usr/bin/npm --version') do
        its(:stdout) { should match '5.*' }
    end

# PM2
    # pm2 bin: should exists
    describe command('which pm2') do
        its(:stdout) { should match '/usr/bin/pm2' }
    end
