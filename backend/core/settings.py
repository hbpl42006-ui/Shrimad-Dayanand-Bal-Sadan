import os
CSRF_TRUSTED_ORIGINS = [
    origin.strip()
    for origin in os.environ.get("CSRF_TRUSTED_ORIGINS", "").split(",")
    if origin.strip()
]

SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")

SECURE_SSL_REDIRECT = os.environ.get(
    "SECURE_SSL_REDIRECT", "False"
).lower() in ("true", "1", "yes")

SESSION_COOKIE_SECURE = os.environ.get(
    "SESSION_COOKIE_SECURE", "False"
).lower() in ("true", "1", "yes")

CSRF_COOKIE_SECURE = os.environ.get(
    "CSRF_COOKIE_SECURE", "False"
).lower() in ("true", "1", "yes")
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Load environment variables from .env file if python-dotenv is installed
try:
    from dotenv import load_dotenv
    # override=False ensures variables already set in OS/systemd environment take priority
    load_dotenv(BASE_DIR / '.env', override=False)
except ImportError:
    pass


# Core Security & Debug Settings
DEBUG = os.environ.get("DEBUG", "True").lower() in ("true", "1", "yes")

# Secret Key (supports both DJANGO_SECRET_KEY and SECRET_KEY)
SECRET_KEY = os.environ.get("DJANGO_SECRET_KEY") or os.environ.get("SECRET_KEY")
if not SECRET_KEY:
    if DEBUG:
        SECRET_KEY = "django-insecure-shrimad-dayanand-bal-sadan-dev-key-change-in-prod"
    else:
        raise ValueError(
            "CRITICAL: DJANGO_SECRET_KEY environment variable is not set. "
            "A secure secret key must be provided in production when DEBUG=False."
        )

# Allowed Hosts (Explicit whitelist - never use ['*'] in production)
_DEFAULT_ALLOWED_HOSTS = [
    "api.shrimaddayanandbalsadan.online",
    "api.shrimaddayanandbalsadan.online:443",
    ".shrimaddayanandbalsadan.online",
    "shrimaddayanandbalsadan.online",
    "130.210.22.215",
    "130.210.22.215:443",
    "130.210.22.215:8000",
    "localhost",
    "127.0.0.1",
    "0.0.0.0",
    "[::1]",
    "testserver",
]

_env_hosts = [
    host.strip().strip('"').strip("'")
    for host in os.environ.get(
        "ALLOWED_HOSTS",
        ""
    ).split(",")
    if host.strip().strip('"').strip("'")
]

ALLOWED_HOSTS = list(dict.fromkeys(_DEFAULT_ALLOWED_HOSTS + _env_hosts))

# Reverse Proxy & SSL Configuration (For Nginx terminating HTTPS in front of Gunicorn)
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
USE_X_FORWARDED_HOST = True
USE_X_FORWARDED_PORT = True

# SSL & Cookie Security Flags
SECURE_SSL_REDIRECT = os.environ.get(
    "SECURE_SSL_REDIRECT",
    "False"
).lower() in ("true", "1", "yes")

SESSION_COOKIE_SECURE = os.environ.get(
    "SESSION_COOKIE_SECURE",
    "False"
).lower() in ("true", "1", "yes")

CSRF_COOKIE_SECURE = os.environ.get(
    "CSRF_COOKIE_SECURE",
    "False"
).lower() in ("true", "1", "yes")

# HTTP Strict Transport Security (HSTS)
SECURE_HSTS_SECONDS = int(os.environ.get("SECURE_HSTS_SECONDS", "31536000" if not DEBUG else "0"))
SECURE_HSTS_INCLUDE_SUBDOMAINS = os.environ.get(
    "SECURE_HSTS_INCLUDE_SUBDOMAINS",
    "True" if not DEBUG else "False"
).lower() in ("true", "1", "yes")
SECURE_HSTS_PRELOAD = os.environ.get(
    "SECURE_HSTS_PRELOAD",
    "False"
).lower() in ("true", "1", "yes")

# Additional security headers
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = "DENY"

# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third party apps
    'corsheaders',
    'rest_framework',
    'django_filters',

    # Local apps
    'sadan.apps.SadanConfig',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'

# Database configuration: PostgreSQL via DATABASE_URL, fallback gracefully to SQLite3
DATABASE_URL = os.environ.get('DATABASE_URL')
if DATABASE_URL:
    try:
        import dj_database_url
        DATABASES = {
            'default': dj_database_url.config(
                default=DATABASE_URL,
                conn_max_age=600,
                conn_health_checks=True
            )
        }
    except Exception:
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': BASE_DIR / 'db.sqlite3',
            }
        }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Asia/Kolkata'
USE_I18N = True
USE_TZ = True

# Static files (CSS, JavaScript, Images)
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Media files
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# REST Framework settings
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.SearchFilter',
        'rest_framework.filters.OrderingFilter',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 50,
}

# ------------------------------------------------------------------------------
# CORS & CSRF Configuration
_DEFAULT_CORS_ORIGINS = [
    "https://shrimaddayanandbalsadan.online",
    "https://www.shrimaddayanandbalsadan.online",
    "https://shrimad-dayanand-bal-sadan.vercel.app",
]

_env_cors = [
    origin.strip().strip('"').strip("'")
    for origin in os.environ.get(
        "CORS_ALLOWED_ORIGINS",
        ""
    ).split(",")
    if origin.strip().strip('"').strip("'")
]

CORS_ALLOWED_ORIGINS = list(dict.fromkeys(_DEFAULT_CORS_ORIGINS + _env_cors))

if DEBUG and not CORS_ALLOWED_ORIGINS:
    CORS_ALLOW_ALL_ORIGINS = True
else:
    CORS_ALLOW_ALL_ORIGINS = False

CORS_ALLOW_CREDENTIALS = True

# CSRF Trusted Origins (required in Django 4+ for cross-origin forms/APIs and reverse proxies)
_DEFAULT_CSRF_ORIGINS = [
    "https://api.shrimaddayanandbalsadan.online",
    "https://shrimaddayanandbalsadan.online",
    "https://www.shrimaddayanandbalsadan.online",
    "https://shrimad-dayanand-bal-sadan.vercel.app",
]

_env_csrf = [
    origin.strip().strip('"').strip("'")
    for origin in os.environ.get(
        "CSRF_TRUSTED_ORIGINS",
        ""
    ).split(",")
    if origin.strip().strip('"').strip("'")
]

CSRF_TRUSTED_ORIGINS = list(dict.fromkeys(_DEFAULT_CSRF_ORIGINS + _env_csrf))
if DEBUG:
    CSRF_TRUSTED_ORIGINS.extend(["http://localhost:3000", "http://127.0.0.1:3000"])
    CSRF_TRUSTED_ORIGINS = list(dict.fromkeys(CSRF_TRUSTED_ORIGINS))
