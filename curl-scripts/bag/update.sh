#!/bin/bash

API="http://localhost:4741"
URL_PATH="/bags"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "bag": {
      "hero": "'"${HERID}"'",
      "itemName": "'"${NAME}"'",
      "itemAbility": "'"${ABI}"'"
    }
  }'

echo