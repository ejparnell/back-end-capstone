#!/bin/bash

API="https://afternoon-stream-50589.herokuapp.com"
URL_PATH="/specialtys"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "specialty": {
      "health": "'"${HEA}"'",
      "hitDice": "'"${HIT}"'",
      "weapon": "'"${WEP}"'",
      "armor": "'"${ARM}"'",
      "name": "'"${NAME}"'"
    }
  }'

echo
