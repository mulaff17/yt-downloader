# Youtube Downloader with NodeJS

## Installation of Node Server
The Youtube Downloader uses NodeJS as Backend. Therefore we need to install it first on our webserver.
1. Refresh your package index 
``` 
sudo apt update
```
2. Install Node JS
```
sudo apt install nodejs
```
3. Check Version of Nodejs
```
node -v
```
4. Install nginx
```
sudo apt install nginx npm
```
5. Go to var/www directory 
```
cd /var/www
```
6. Install git
```
sudo apt install git
```
7. Navigate into the www directory
```
cd /var/www
```
8. Clone Repo
```
git clone https://github.com/mulaff17/yt-downloader.git
```
9. Change Nginx Config File
```
sudo nano /etc/nginx/sites-enabled/default
```
Change the root path of the file to the yt-downloader:
root /var/www/yt-downloader;
10. Change the Server URL in the server File
```
sudo nano /var/www/yt-downloader/index.html
```
Change all the Locations if this comment: (appears in three functions)
// EDIT THIS PART TO YOUR OWN SERVER ADDRESS
fetch(`http://localhost:3000/downloadmp4?URL=${query}`)

## Use Nodejs as a Service with PM2

1. Change the Server URL in the server File
```
sudo npm install pm2@latest -g
```
2. Create a dedicated User for PM2 to run Service
```
sudo adduser YOURUSER
```

3. Add Group
```
sudo groupadd YOURGROUP
```

4. Assign the Group to the /var/www/yt-downloader 
```
usermod -a -G YOURGROUP YOURUSER
```
5. Switch to Your Service User
```
sudo su - pm2-execute
```
6. Create the Service
```
pm2 start server.js
```
7. Save the Service
```
pm2 save
```
8. Create Startup Script
```
pm2 startup
```
9. Run the Command Output of the command before as a root
For that switch to the root user and run the command that will be given from the output of the command before that looks similar to this:
```
sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u pm2-execute --hp /home/pm2-execute
```
10. Restart System and test
```
sudo systemctl status pm2-pm2execute
```




