git clone [project]

cd ./project

# activate venv environment
python3 -m venv venv
. venv/bin/activate

# install packages
pip install -r requirements/production.txt

# run local server
python manage.py runserver