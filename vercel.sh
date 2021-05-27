#!/bin/bash
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
if [[ $VERCEL_GIT_COMMIT_REF != dependabot/* ]]; then 
  exit 1; 
fi
exit 0;