#!/bin/bash
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
if [[ $VERCEL_GIT_COMMIT_REF != ~ "dependabot" ]]; then
  echo "Deploying"
  exit 1; 
else
  echo "This is a dependabot branch, cancel preview"
  exit 0;
fi
