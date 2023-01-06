# from ..project2.settings import SECRET_KEY, SIMPLE_JWT
from project2.settings import SIMPLE_JWT, SECRET_KEY
import jwt
from jwt.exceptions import ExpiredSignatureError


def is_auth_jwt(request):
    try:
        print('llllllllllllllllllllllll')
        print(request.headers)
        token = request.headers['Authorization'].split(' ')
        token = token[1]
        print(token)
        try:
            k = jwt.decode(token, SECRET_KEY, algorithms=[
                           SIMPLE_JWT['ALGORITHM']])
        except ExpiredSignatureError as error:
            print('Timeout')
        else:
            return k
    except:
        return False


def is_auth_staff(request):
    print('''kjkjkjkjkj''')
    try:
        k = is_auth_jwt(request)
        print(k)
        if k['staff']:
            print('yes')
            return True
        else:
            print('nope')
            return False
    except:
        return False


def is_auth_admin(request):
    k = is_auth_jwt(request)
    if k['superuser']:
        print('yes')
        return True
