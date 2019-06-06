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
      "specialty": "'"${SPEID}"'",
      "name": "'"${NAME}"'",
      "alignment": "'"${ALI}"'",
      "age": "'"${AGE}"'",
      "kin": "'"${KIN}"'"
    }
  }'

echo
