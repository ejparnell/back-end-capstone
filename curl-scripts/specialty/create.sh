#!/bin/bash

API="http://localhost:4741"
URL_PATH="/specialtys"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "specialty": {
      "hero": "'"${HERID}"'",
      "health": "'"${HEA}"'",
      "hitDice": "'"${HIT}"'",
      "weapon": "'"${WEP}"'",
      "armor": "'"${ARM}"'",
      "name": "'"${NAME}"'"
    }
  }'

echo
