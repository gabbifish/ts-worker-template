#! /bin/bash

. ./workers.config

curl -X PUT "https://api.cloudflare.com/client/v4/zones/$zone_id/workers/script" -H \
"X-Auth-Email:$cf_email" -H "X-Auth-Key:$auth_key" -H \
"Content-Type:application/javascript" --data-binary "@dist/bundle.js"