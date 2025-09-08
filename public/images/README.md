# Images Directory

This directory contains all static images used in the Family Hub application.

## Structure

```
public/images/
├── README.md              # This file
├── babysitting.jpg        # Babysitting service image
├── party.jpg              # Party planning service image
├── tutoring.jpg           # Tutoring service image
└── family/                # Family member images
    ├── father.jpg         # Father profile image
    ├── mother.jpg         # Mother profile image
    ├── daughter.jpg       # Daughter profile image
    └── son.jpg            # Son profile image
```

## Image References

All images are referenced in JSON data files:

- **Services**: `data/services.json` - Service images
- **Family**: `data/family.json` - Family member images

## Image Formats

Currently using SVG placeholders encoded as data URIs for development. In production, these should be replaced with actual JPG/PNG images.

## Usage

Images are served statically from the `/images/` path:

```html
<img src="/images/babysitting.jpg" alt="Babysitting Service" />
<img src="/images/family/father.jpg" alt="Father" />
```

## Adding New Images

1. Add the image file to the appropriate directory
2. Update the corresponding JSON data file with the new image path
3. Ensure the image path starts with `/images/`
