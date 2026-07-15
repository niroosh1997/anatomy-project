#!/bin/bash
unset PYTHONPATH
cd "$(dirname "$0")/backend"
exec venv/bin/uvicorn main:app --port 8000
