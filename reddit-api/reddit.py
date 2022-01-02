import requests
import json
ACCOUNT_ID = 't2_6ish854u'
ACCESS_TOKEN = '140570356897-AGqLwnCWm8ROR5Id6rRDrSR6_zq3JA'

# Access token and refresh token got by oauth2 web flow
# https://ads-api.reddit.com/docs/#section/Authentication/Reddit%20API%20Key


URL_ACCOUNT = 'https://ads-api.reddit.com/api/v2.0/accounts/{}'.format(ACCOUNT_ID)
HEADERS = {
   'User-Agent': 'Bits ADS API v1',
   'Authorization': 'Bearer {}'.format(ACCESS_TOKEN)

}

resp = requests.get(URL_ACCOUNT, headers=HEADERS)
##print(resp)
##resp.raise_for_status() ...
##print(new-content)
