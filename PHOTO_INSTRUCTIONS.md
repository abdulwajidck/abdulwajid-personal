# Photo Setup Instructions

## Adding Your Photo

To replace the "W" placeholder in the About section with your photo:

1. **Save your photo** as `abdul-wajid-photo.jpg` in the `public/` directory
2. **Recommended specifications:**
   - Format: JPG or PNG
   - Aspect ratio: 4:5 (portrait orientation works best)
   - Recommended size: 800x1000px or larger
   - File size: Keep under 500KB for optimal performance

3. **File location:** `/public/abdul-wajid-photo.jpg`

The photo will automatically appear in the About section (second section) of the homepage, replacing the "W" placeholder.

## Alternative File Names

If you prefer a different filename, update the `src` attribute in `src/components/About.tsx`:
```tsx
<Image
  src="/your-filename.jpg"  // Change this
  alt="Abdul Wajid CK"
  fill
  className={styles.photo}
  priority
/>
```

