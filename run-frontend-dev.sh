#!/bin/bash
export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH"
cd "$(dirname "$0")/frontend"
exec npm run dev
