#Installing required dependencies
sudo apt update -y
sudo apt install -y nodejs npm
sudo npm install -g pm2

#folder that holds our node.js application
sudo mkdir /app
chmod o+wx app/