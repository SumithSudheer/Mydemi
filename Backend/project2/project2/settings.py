"""
Django settings for project2 project.

Generated by 'django-admin startproject' using Django 4.1.4.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""

from datetime import timedelta
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-k_hjmkm0-kap2bp6z9=n3_1o$12sx%upmwqc5ga3ap+=cb1r_&'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    "corsheaders",

    'user',
    'tutor',
    # 'djoser',
    # "rest_framework.authtoken",
    # 'oauth2_provider',
    # 'social_django',
    # 'drf_social_oauth2',



    # 'allauth',
    # 'allauth.account',
    # 'allauth.socialaccount',
    # 'allauth.socialaccount.providers.google',


 

]

AUTH_USER_MODEL = 'user.User'

# DJOSER = {
#     'LOGIN_FIELD': 'email',
#     'SOCIAL_AUTH_TOKEN_STRATEGY': 'djoser.social.token.jwt.TokenStrategy',
#     'SOCIAL_AUTH_ALLOWED_REDIRECT_URIS': ['http://127.0.0.1:3000', 'http://127.0.0.1:3000/home','http://127.0.0.1:3000/newlogin','http://localhost:3000','http://localhost:3000/home','http://localhost:3000/newlogin'],
#     'SERIALIZERS': {},
# }


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    "corsheaders.middleware.CorsMiddleware",
    # 'social_django.middleware.SocialAuthExceptionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# REST_FRAMEWORK = {
#     # Use Django's standard `django.contrib.auth` permissions,
#     # or allow read-only access for unauthenticated users.
#     'DEFAULT_PERMISSION_CLASSES': [
#         'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
#     ]
# }
# REST_FRAMEWORK = {

#     'DEFAULT_AUTHENTICATION_CLASSES': (
#         'rest_framework_simplejwt.authentication.JWTAuthentication',
#     )
# }

# REST_FRAMEWORK = {
#      'DEFAULT_PERMISSION_CLASSES': [
#          'rest_framework.permissions.IsAuthenticated',
#          'rest_framework.permissions.IsAdminUser',
#          ],
#     'DEFAULT_AUTHENTICATION_CLASSES': (
#      'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
#      )
# }
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',

    'DEFAULT_AUTHENTICATION_CLASSES': (

        # django-oauth-toolkit >= 1.0.0
        # 'oauth2_provider.contrib.rest_framework.OAuth2Authentication',
        # 'drf_social_oauth2.authentication.SocialAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )

}

ROOT_URLCONF = 'project2.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                # 'social_django.context_processors.backends',
                # 'social_django.context_processors.login_redirect',

            ],
        },
    },
]

WSGI_APPLICATION = 'project2.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "project2",
        "USER": "postgres",
        "PASSWORD": "admin",
        "HOST": "127.0.0.1",
        "PORT": "5432",
    }
}

# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=30),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': False,
    'UPDATE_LAST_LOGIN': False,

    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUDIENCE': None,
    'ISSUER': None,
    'JWK_URL': None,
    'LEEWAY': 0,

    'AUTH_HEADER_TYPES': ('Bearer', ),
    'AUTH_HEADER_NAME': 'HTTP_AUTHORIZATION',
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'USER_AUTHENTICATION_RULE': 'rest_framework_simplejwt.authentication.default_user_authentication_rule',

    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',
    'TOKEN_USER_CLASS': 'rest_framework_simplejwt.models.TokenUser',

    'JTI_CLAIM': 'jti',

    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': timedelta(minutes=5),
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=1),
}


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOW_METHODS = (
        'GET',
        'POST',
        'PUT',
        'PATCH',
        'DELETE',
        'OPTIONS'
    )

# CORS_ALLOW_CREDENTIALS = True
# CORS_ORIGIN_WHITELIST = [
#      "http://localhost:3000",
#      "http://127.0.0.1:3000", 
# ]

# Access-Control-Allow-Origin : '*'
AUTHENTICATION_BACKENDS = (


    # Facebook OAuth2
    # 'social_core.backends.facebook.FacebookAppOAuth2',
    # 'social_core.backends.facebook.FacebookOAuth2',


    # 'social_core.backends.google.GoogleOAuth2',

    # drf-social-oauth2
    # 'drf_social_oauth2.backends.DjangoOAuth2',

    # Django
    'django.contrib.auth.backends.ModelBackend',
    # 'drf_social_oauth2.backends.DjangoOAuth2',
   
)


SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = '121176681845-0a44sp8pe1r383bm29un16tq1lah24hl.apps.googleusercontent.com'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = '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'

# SOCIAL_AUTH_GOOGLE_OAUTH2_SCOPE = [
#     'https://www.googleapis.com/auth/userinfo.email',
#     'https://www.googleapis.com/auth/userinfo.profile',
# ]

# SOCIAL_AUTH_URL_NAMESPACE = 'social'

# Facebook configuration
# SOCIAL_AUTH_FACEBOOK_KEY = '3363573760579318'
# SOCIAL_AUTH_FACEBOOK_SECRET = '3c6f691d3ed3dcf059b40e81bd080bf2'

# Define SOCIAL_AUTH_FACEBOOK_SCOPE to get extra permissions from Facebook.
# Email is not sent by default, to get it, you must request the email permission.
# SOCIAL_AUTH_FACEBOOK_SCOPE = ['email']
# SOCIAL_AUTH_FACEBOOK_PROFILE_EXTRA_PARAMS = {
#     'fields': 'id, name, email'
# }

# SOCIAL_AUTH_USER_FIELDS = ['email', 'username', 'first_name', 'password']


# CORS_ORIGIN_WHITELIST = [
#      "http://localhost:3000",
#      "http://127.0.0.1:3000", 
# ]

# ROOT_URLCONF = 'project2.urls'

# SITE_ID = 1


# # Provider specific settings
# SOCIALACCOUNT_PROVIDERS = {
#     'google': {
#         # For each OAuth based provider, either add a ``SocialApp``
#         # (``socialaccount`` app) containing the required client
#         # credentials, or list them here:
#         'APP': {
#             'client_id': '121176681845-0a44sp8pe1r383bm29un16tq1lah24hl.apps.googleusercontent.com',
#             'secret': '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',
#             'key': ''
#         },
#         'SCOPE': [
#             'profile',
#             'email',
#         ],
#         'AUTH_PARAMS': {
#             'access_type': 'online',
#         },
#         'OAUTH_PKCE_ENABLED': True,
#     }
# }


# ACCOUNT_USER_MODEL_USERNAME_FIELD = None
# ACCOUNT_EMAIL_REQUIRED = True
# ACCOUNT_USERNAME_REQUIRED = False
# ACCOUNT_AUTHENTICATION_METHOD = 'email'