#Starlette is a lightweight asynchronous web framework for building web applications in Python

#from starlette.config import Config
#from starlette.datastructures import Secret  # starlett datastructures are used to store configuration data


#try:
 #   config = Config(".env")  # will try to load the environment variables from .env file
#except FileNotFoundError:   #except FileNotFound Error, if it doesn't exist then just use default values
 #   config = Config()       #use default config = Config()
    

#DATABASE_URL = config("DATABASE_URL", cast=Secret) # it will kept secret and will now expose in any log files

#TEST_DATABASE_URL = config("TEST_DATABASE_URL", cast=Secret)

from starlette.config import Config
from starlette.datastructures import Secret


try:
    config = Config(".env")
except FileNotFoundError:
    config = Config()

DATABASE_URL = config("DATABASE_URL", cast=Secret)

TEST_DATABASE_URL = config("TEST_DATABASE_URL", cast=Secret)