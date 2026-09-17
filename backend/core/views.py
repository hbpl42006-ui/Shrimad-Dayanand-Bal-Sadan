from django.http import HttpResponse

def index_view(request):
    html_content = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Shrimad Dayanand Bal Sadan | Backend API & Admin</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                background-color: #FFF9EF;
                color: #222222;
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                align-items: center;
                justify-content: center;
                padding: 24px;
            }
            .card {
                background: #ffffff;
                max-width: 640px;
                width: 100%;
                border-radius: 20px;
                padding: 40px;
                box-shadow: 0 10px 30px rgba(122, 31, 43, 0.08);
                border: 2px solid #D6A43B;
                text-align: center;
            }
            .badge {
                display: inline-block;
                background: #FDF2F3;
                color: #7A1F2B;
                border: 1px solid #7A1F2B;
                padding: 4px 14px;
                border-radius: 9999px;
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 1px;
                text-transform: uppercase;
                margin-bottom: 16px;
            }
            h1 {
                color: #7A1F2B;
                font-size: 26px;
                font-weight: 800;
                margin-bottom: 8px;
            }
            .slogan {
                color: #E98B18;
                font-size: 14px;
                font-weight: 600;
                margin-bottom: 16px;
            }
            p {
                color: #555555;
                font-size: 14px;
                line-height: 1.6;
                margin-bottom: 24px;
            }
            .status-box {
                background: #F6EFE4;
                border-radius: 12px;
                padding: 16px;
                margin-bottom: 28px;
                text-align: left;
                font-size: 13px;
            }
            .status-box strong {
                color: #7A1F2B;
            }
            .button-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;
            }
            .btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 12px 20px;
                border-radius: 9999px;
                font-size: 14px;
                font-weight: 600;
                text-decoration: none;
                transition: all 0.2s;
            }
            .btn-primary {
                background: #7A1F2B;
                color: #ffffff;
            }
            .btn-primary:hover {
                background: #621922;
            }
            .btn-secondary {
                background: #E98B18;
                color: #222222;
            }
            .btn-secondary:hover {
                background: #cf720e;
                color: #ffffff;
            }
            .btn-outline {
                grid-column: span 2;
                border: 1px solid #D6A43B;
                color: #7A1F2B;
                background: transparent;
            }
            .btn-outline:hover {
                background: #FFF9EF;
            }
            .footer-note {
                margin-top: 24px;
                font-size: 12px;
                color: #888888;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <span class="badge">ESTD. 1915 • LUCKNOW</span>
            <h1>Shrimad Dayanand Bal Sadan</h1>
            <div class="slogan">Backend REST API & Administration Portal</div>
            
            <p>
                The Django backend server is running smoothly! This server provides the REST APIs (`/api/v1/`) and the administrative CMS portal.
            </p>

            <div class="status-box">
                <p style="margin-bottom: 8px;"><strong>🌐 Website Frontend:</strong> Run <code>npm run dev</code> in <code>frontend/</code> to view the full website at <a href="http://localhost:3000" target="_blank" style="color: #7A1F2B; font-weight: bold;">http://localhost:3000</a></p>
                <p style="margin-bottom: 0;"><strong>⚙️ Server Status:</strong> Operational • 15 CMS models active • Seed data loaded</p>
            </div>

            <div class="button-grid">
                <a href="http://localhost:3000" target="_blank" class="btn btn-secondary">Open Website (Port 3000)</a>
                <a href="/admin/" class="btn btn-primary">Django Admin Portal</a>
                <a href="/api/v1/home/" class="btn btn-outline">Explore REST API (/api/v1/home/)</a>
            </div>

            <div class="footer-note">
                Shrimad Dayanand Bal Sadan, Moti Nagar, Lucknow, UP • Admin credentials: <code>admin</code> / <code>admin12345</code>
            </div>
        </div>
    </body>
    </html>
    """
    return HttpResponse(html_content)
