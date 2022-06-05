#!/bin/bash
apt-get update
yes | apt-get install nginx
yes | ufw enable
yes | ufw allow 'Nginx HTTP'
yes | ufw allow 'ssh'

## Make directory for serving react frontend
mkdir -p /var/www/metric-time.net/html
chown -R $USER:$USER /var/www/metric-time.net/html
chmod -R 755 /var/www/metric-time.net

## Remove Nginx default site
rm /etc/nginx/sites-available/default
rm /etc/nginx/sites-enabled/default
