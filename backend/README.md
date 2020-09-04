git clone [project]

cd ./backend

# activate venv environment
python3 -m venv venv

. venv/bin/activate

# install packages
pip install -r requirements/requirement.txt

## mysql client issue
If an error accur like "OSError: mysql_config not found", run the following line and try the requirement.txt again:  
sudo apt-get install libmysqlclient-dev

# run local server
python manage.py runserver

# additional libs
We are using 3rd party python packages for this project. While runnning "python manage.py runserver", it will list the missing packages for python. Simply use pip to install those libs. Will add to script in the fulture
