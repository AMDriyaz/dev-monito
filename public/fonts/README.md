# SVN-Gilroy Font Setup

## Font Files Required

Place your SVN-Gilroy font files in the `/public/fonts/` directory with the following naming convention:

### Required Font Files:

1. **Regular (400)**
   - `SVN-Gilroy-Regular.woff2`
   - `SVN-Gilroy-Regular.woff`
   - `SVN-Gilroy-Regular.ttf`

2. **Medium (500)**
   - `SVN-Gilroy-Medium.woff2`
   - `SVN-Gilroy-Medium.woff`
   - `SVN-Gilroy-Medium.ttf`

3. **SemiBold (600)**
   - `SVN-Gilroy-SemiBold.woff2`
   - `SVN-Gilroy-SemiBold.woff`
   - `SVN-Gilroy-SemiBold.ttf`

4. **Bold (700)**
   - `SVN-Gilroy-Bold.woff2`
   - `SVN-Gilroy-Bold.woff`
   - `SVN-Gilroy-Bold.ttf`

5. **Black (900)**
   - `SVN-Gilroy-Black.woff2`
   - `SVN-Gilroy-Black.woff`
   - `SVN-Gilroy-Black.ttf`

## Directory Structure

```
/var/www/html/monito/
└── public/
    └── fonts/
        ├── SVN-Gilroy-Regular.woff2
        ├── SVN-Gilroy-Regular.woff
        ├── SVN-Gilroy-Regular.ttf
        ├── SVN-Gilroy-Medium.woff2
        ├── SVN-Gilroy-Medium.woff
        ├── SVN-Gilroy-Medium.ttf
        ├── SVN-Gilroy-SemiBold.woff2
        ├── SVN-Gilroy-SemiBold.woff
        ├── SVN-Gilroy-SemiBold.ttf
        ├── SVN-Gilroy-Bold.woff2
        ├── SVN-Gilroy-Bold.woff
        ├── SVN-Gilroy-Bold.ttf
        ├── SVN-Gilroy-Black.woff2
        ├── SVN-Gilroy-Black.woff
        └── SVN-Gilroy-Black.ttf
```

## What Has Been Configured

✅ Created `/public/fonts/` directory
✅ Added @font-face declarations in `globals.css`
✅ Configured font-family as 'SVN-Gilroy' in theme
✅ Set up font-weight mapping:
   - 400 = Regular
   - 500 = Medium
   - 600 = SemiBold
   - 700 = Bold
   - 900 = Black

## Next Steps

1. Copy your downloaded SVN-Gilroy font files to `/public/fonts/`
2. Ensure the file names match exactly as listed above
3. Restart the development server: `npm run dev`
4. The font will automatically be applied to the entire application

## Font Conversion (Optional)

If you only have `.ttf` files, you can convert them to `.woff` and `.woff2` for better web performance using online tools like:
- https://cloudconvert.com/ttf-to-woff2
- https://transfonter.org/

## Verification

After placing the fonts, you can verify they're loading by:
1. Opening the browser DevTools (F12)
2. Going to the Network tab
3. Filtering by "Font"
4. Refreshing the page
5. You should see the SVN-Gilroy font files loading
