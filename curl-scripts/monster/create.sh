#!/bin/bash

API="http://localhost:4741"
URL_PATH="/monsters"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "monster": {
      "name": "'"${NAME}"'",
      "hitDice": "'"${HIT}"'",
      "health": "'"${HEA}"'",
      "lore": "'"${LOR}"'"
    }
  }'

echo
