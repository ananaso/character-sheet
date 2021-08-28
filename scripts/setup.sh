#!/bin/bash

cp ./config/.env ./character-sheet-app/
sed -i -e 's/^/REACT_APP_/' ./character-sheet-app/.env && printf "Setup complete!\n"