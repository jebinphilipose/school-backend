# School Backend

## Project Overview

Create a REST API for school data and expose it to front-end and display the data in tabular format with features like searching, sorting etc.

Note: CSV file used - [Bangalore_schools.csv](https://github.com/openbangalore/bangalore/blob/master/bangalore/Education/Bangalore_schools.csv)

## Getting Started

### Prerequisites

* Python 3.0
* pip
* virtualenv
* Git

### Project Setup

1. Create a virtual environment: `python3 -m venv myvenv && cd myvenv`
2. Activate virtualenv: `source bin/activate`
3. Clone this repo: `git clone https://github.com/jebinphilipose/school-backend.git && cd school-backend`
4. Upgrade pip and install dependencies: `pip install --upgrade pip && pip install -r requirements.txt`
5. Create initial Django migrations: `python manage.py migrate`
6. Create database records with the help of JSON file: `python database_setup.py`
7. Run the server: `python manage.py runserver`
8. Access webpage at [http://localhost:8000/](http://localhost:8000/)


## API Endpoints

* `GET /api/v1/schools` --> Returns JSON of the school data