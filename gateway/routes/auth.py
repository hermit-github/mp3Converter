from urllib.parse import urlencode
from fastapi import APIRouter
from fastapi.responses import RedirectResponse

router = APIRouter()

@router.post("/login")
def login():
    params = {
        "client_id": "374107383616-tihl6sq1cneg5357dvlm3rbee28kvis8.apps.googleusercontent.com",
        "redirect_uri": REDIRECT_URI,
        "response_type": "code",
        "scope": " ".join(SCOPES),
        "access_type": "offline",
        "prompt": "consent",
    }

    url = f"{AUTHORIZE_URL}?{urlencode(params)}"
    return RedirectResponse(url)

