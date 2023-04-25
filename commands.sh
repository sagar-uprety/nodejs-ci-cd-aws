#Installing required dependencies
sudo yum update -y
sudo yum install -y nodejs npm
sudo npm install -g pm2

#folder that holds our node.js application
sudo mkdir /app
chmod o+wx app/