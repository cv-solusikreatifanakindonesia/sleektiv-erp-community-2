from sleektiv import http
from sleektiv.http import request
from sleektiv.addons.web.controllers.home import CREDENTIAL_PARAMS


CREDENTIAL_PARAMS.append('webauthn_response')


class WebauthnController(http.Controller):
    @http.route(['/auth/passkey/start-auth'], type='json', auth='public')
    def json_start_authentication(self):
        auth_options = request.env['auth.passkey.key']._start_auth()
        return auth_options
