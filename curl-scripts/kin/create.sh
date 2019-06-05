#!/bin/bash

API="https://afternoon-stream-50589.herokuapp.com"
URL_PATH="/kins"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "kin": {
      "name": "'"${NAME}"'",
      "size": "'"${SIZE}"'",
      "ability": "'"${ABI}"'",
      "speed": "'"${SPE}"'"
    }
  }'

echo
