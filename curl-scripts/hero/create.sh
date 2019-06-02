#!/bin/bash

API="http://localhost:4741"
URL_PATH="/heros"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "hero": {
      "owner": "'"${OWN}"'",
      "bag": "'"${BAGID}"'",
      "specialty": "'"${SPEID}"'",
      "name": "'"${NAME}"'",
      "alignment": "'"${ALI}"'"
    }
  }'

echo
