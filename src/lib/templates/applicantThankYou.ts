export function getApplicantThankYouTemplate(name: string, program: string, origin: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Received - DCT.TECH</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #f8fafc;
      color: #334155;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #f8fafc;
      padding: 48px 24px;
      box-sizing: border-box;
    }
    .container {
      max-width: 580px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
    }
    .header {
      padding: 32px 40px 24px 40px;
      border-bottom: 1px solid #f1f5f9;
      text-align: left;
    }
    .content {
      padding: 40px 40px 32px 40px;
    }
    .greeting {
      font-size: 20px;
      font-weight: 700;
      color: #0f172a;
      margin-top: 0;
      margin-bottom: 16px;
      letter-spacing: -0.01em;
    }
    .text {
      font-size: 15px;
      line-height: 1.6;
      color: #475569;
      margin-top: 0;
      margin-bottom: 24px;
    }
    .highlight-card {
      background: #f0f7ff;
      border: 1px solid #e0f2fe;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 28px;
    }
    .highlight-title {
      font-size: 14px;
      font-weight: 700;
      color: #0369a1;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 0;
      margin-bottom: 8px;
    }
    .highlight-text {
      font-size: 14px;
      line-height: 1.5;
      color: #0c4a6e;
      margin: 0;
    }
    .features-list {
      margin: 0 0 28px 0;
      padding: 0;
      list-style: none;
    }
    .feature-item {
      font-size: 14px;
      color: #475569;
      margin-bottom: 12px;
      padding-left: 24px;
      position: relative;
    }
    .feature-item::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #2563eb;
      font-weight: bold;
    }
    .button-container {
      text-align: left;
      margin-top: 32px;
      margin-bottom: 8px;
    }
    .cta-button {
      display: inline-block;
      background-color: #2563eb;
      color: #ffffff !important;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 14px;
      text-align: center;
      transition: background-color 0.2s;
    }
    .footer {
      padding: 32px 40px;
      border-top: 1px solid #f1f5f9;
      background-color: #fafafa;
    }
    .footer-text {
      margin: 0;
      font-size: 12px;
      color: #94a3b8;
      line-height: 1.5;
    }
    .footer-links {
      margin-top: 12px;
      font-size: 12px;
    }
    .footer-links a {
      color: #64748b;
      text-decoration: none;
      margin-right: 16px;
    }
    .footer-links a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header" style="display: flex; align-items: center; gap: 12px;">
        <img src="${origin}/images/image.png" alt="DCT Logo" width="40" height="40" style="display: block; border: 0; outline: none; text-decoration: none;" />
        <span style="font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 22px; font-weight: bold; letter-spacing: -0.05em; color: #0f172a;">
          DCT<span style="color: #10b981;">.</span>TECH
        </span>
      </div>
      <div class="content">
        <h2 class="greeting">Hi ${name},</h2>
        <p class="text">
          Thank you for applying for the <strong>${program}</strong> internship program. We've successfully received your details and appreciate your interest in joining our engineering team.
        </p>
        
        <div class="highlight-card">
          <div class="highlight-title">What Happens Next?</div>
          <p class="highlight-text">
            Our mentorship panel is reviewing your application. If your profile aligns with our criteria, we will reach out to you within <strong>1&ndash;2 working days</strong> to set up an introductory discussion.
          </p>
        </div>

        <p class="text" style="margin-bottom: 12px;">
          <strong>Why build your career with DCT?</strong>
        </p>
        <ul class="features-list">
          <li class="feature-item">Hands-on work within real, active production-grade projects.</li>
          <li class="feature-item">Daily mentorship and sync-ups with seasoned developers.</li>
          <li class="feature-item">Structured feedback loops designed to accelerate your growth.</li>
        </ul>

        <div class="button-container">
          <a href="https://dctinfotech.com" class="cta-button" target="_blank">Explore Our Programs</a>
        </div>
      </div>
      <div class="footer">
        <p class="footer-text">
          &copy; ${new Date().getFullYear()} DCT Technology Pvt. Ltd. All rights reserved.<br>
          India · Hybrid + Remote Developer Internships.
        </p>
        <div class="footer-links">
          <a href="mailto:hr@dctinfotech.com">Contact Support</a>
          <a href="https://dctinfotech.com">Visit Website</a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
}
