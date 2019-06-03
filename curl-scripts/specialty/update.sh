#!/bin/bash

API="http://localhost:4741"
URL_PATH="/specialtys"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "specialty": {
      "hero": "'"${HERID}"'",
      "health": "'"${HEA}"'",
      "hitDice": "'"${HIT}"'",
      "weapon": "'"${WEP}"'",
      "armor": "'"${ARM}"'"
    }
  }'

echo
