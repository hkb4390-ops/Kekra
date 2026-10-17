HRRY+ FINAL WEBSITE — VERCEL JSON ENVIRONMENT VERSION

Files:
- index.html
- api/config.js

SETUP
1. Upload/extract these files into your website repository, preserving api/config.js.
2. Open Vercel Dashboard -> your project -> Settings -> Environment Variables.
3. Add a variable:
   Name: PLATFORMS_JSON
   Value: paste the COMPLETE JSON array directly, starting with [ and ending with ].
4. Select the environments you use (Production, Preview, and/or Development), save, then redeploy.
5. Open the deployed website and press Refresh if needed.

IMPORTANT
- You do NOT need to upload the JSON to GitHub or host it at a URL.
- Do not use PLATFORMS_JSON_URL for this version.
- Paste valid JSON only; do not wrap it in quotes or Markdown code fences.
- Each item should contain title, logo, and link. id is recommended. type is optional; if present, use "web".
- The Vercel serverless API parses the environment variable and supplies the records to the website. The browser does not fetch a separate JSON URL, so external JSON CORS is not required.
- Environment variable changes apply after a new deployment/redeploy.
- Do not place secrets in this public website data; platform entries are displayed to visitors.
