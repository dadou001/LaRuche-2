echo -e "\nChecking requirements...\n"

if which node > /dev/null
then
    echo "node is installed, skipping..."
else
    echo "ERROR: node should be installed. visit https://www.npmjs.com/get-npm"
    exit 1
fi

if which ng > /dev/null
then
    echo "Angular CLI is installed, skipping..."
else
    echo "Installing Angular CLI"
    npm i -g @angular/cli
fi

npm install
npm audit fix
