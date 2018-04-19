let client_id = "<YOUR APPLICATION ID FROM DEV.FITBIT.COM>"
let domain = "<YOUR DOMAIN e.g. priansh.com example.com google.com deb.surge.sh>"
let scopes = [
    'activity',
    'nutrition',
    'heartrate',
    'location',
    'profile',
    'settings',
    'sleep',
    'social',
    'weight'
] // whatever scopes you want, see list: https://dev.fitbit.com/build/reference/web-api/oauth2/#scope
let appEntry = "app.html" // the html file for your app

/*

    You shouldn't need to edit below this line.

*/


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

var fitbitURL = "https://www.fitbit.com/oauth2/authorize?" + [
    "response_type=token",
    `client_id=${client_id}`,
    `redirect_uri=http%3A%2F%2F${domain}%2Fauth`,
    `scope=${scopes.join('%20')}`,
    "expires_in=604800" // 1 week
].join("&")

window.fitbitURL = fitbitURL

function parseURL() {
    let params = window.location.href.split('?')[1].split('#')[0].split('&')
    var userId, accessToken
    params.forEach(v => {
        v = v.split('='), key = v[0], value = v[1]
        switch (key) {
            case 'access_token':
                accessToken = value;
                return
            case 'user_id':
                userId = value;
                return
            default:
                return
        }
    })
    if (userId)
        window.userId = userId
    if (accessToken)
        window.accessToken = accessToken
}

function encodeURL(u) {
    let t = (accessToken || window.accessToken), uid = (userId || window.userId)
    if (u.indexOf('?') < 0) u = u + '?'
    return u + `access_token=${t}&user_id=${uid}`
}

window.parseURL = parseURL
window.encodeURL = encodeURL

var appURL = `http://${domain}/${appEntry}`
window.appURL = appURL