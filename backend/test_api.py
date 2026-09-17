import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from rest_framework.test import APIClient

client = APIClient()

endpoints = [
    '/api/v1/site-settings/',
    '/api/v1/home/',
    '/api/v1/impact-stats/',
    '/api/v1/history/',
    '/api/v1/programs/',
    '/api/v1/facilities/',
    '/api/v1/daily-routines/',
    '/api/v1/gallery/',
    '/api/v1/events/',
    '/api/v1/donation-info/',
    '/api/v1/documents/',
    '/api/v1/seo-settings/',
]

for ep in endpoints:
    res = client.get(ep)
    print(f"{ep}: status={res.status_code}")
    assert res.status_code == 200, f"Failed at {ep}"

# Test contact POST
res = client.post('/api/v1/contact/', {
    'name': 'Test Visitor',
    'email': 'test@example.com',
    'phone': '+91 9876543210',
    'subject': 'Inquiry about Bal Sadan',
    'message': 'We would like to visit Bal Sadan and sponsor dinner for children.'
})
print(f"/api/v1/contact/ (POST): status={res.status_code}, data={res.json()}")
assert res.status_code == 201, "Contact form POST failed"

print("ALL REST API ENDPOINTS TESTED AND VERIFIED SUCCESSFULLY!")
