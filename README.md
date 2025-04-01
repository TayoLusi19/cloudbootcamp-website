# CloudBootcamp.ai Website

This repository contains the CloudBootcamp.ai website code. The website is automatically deployed to AWS using GitHub Actions.

## Development

To make changes to the website:

1. Clone the repository:
```bash
git clone https://github.com/your-username/cloudbootcamp-website.git
cd cloudbootcamp-website
```

2. Make your changes to the files:
- `index.html` - Main HTML file
- `styles.css` - Styling
- `script.js` - JavaScript functionality
- `components/` - Website components

3. Test locally:
- Open `index.html` in your browser to preview changes
- Use a local server if needed: `python -m http.server 8000`

4. Commit and push your changes:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

The changes will be automatically deployed to:
- Website: https://cloudbootcamp.ai
- S3 Bucket: s3://cloudbootcamp-website
- CloudFront Distribution: (Your CloudFront URL)

## Manual Deployment

If needed, you can deploy manually:

```bash
# Deploy to S3
aws s3 sync . s3://cloudbootcamp-website --delete --exclude ".git/*" --exclude ".github/*"

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## Infrastructure

- S3 Bucket: cloudbootcamp-website
- CloudFront Distribution: (Your distribution ID)
- Domain: cloudbootcamp.ai
- SSL Certificate: Managed by AWS Certificate Manager