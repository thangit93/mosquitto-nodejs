#!/bin/bash

# Exit on fail
set -e

npm start

# Finally call command issued to the docker service
exec "$@"
