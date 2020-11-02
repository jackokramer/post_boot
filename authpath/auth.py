##from URL_ACCOUNT import requests
import requests
ACCOUNT_ID = 't2_6ish854u'
ACCESS_TOKEN = ' 140570356897-6hGs5mE8hCWqqHGUjlixL9-7srz-aw'

# Access token and refresh token got by oauth2 web flow
# https://ads-api.reddit.com/docs/#section/Authentication/Reddit%20API%20Key


URL_ACCOUNT = 'https://ads-api.reddit.com/api/v2.0/accounts/{}'.format(ACCOUNT_ID)
HEADERS = {
   'User-Agent': 'Bits ADS API v1',
   'Authorization': 'Bearer {}'.format(ACCESS_TOKEN)

}

resp = requests.get(URL_ACCOUNT, headers=HEADERS) ## piggy back ythe headers and store them in rest
resp.raise_for_status()