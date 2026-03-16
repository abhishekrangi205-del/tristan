# Change Points for Tristan Ritchie

This document outlines the locations and types of changes required to rebrand the "Selling Sudbury / Parikshit Patel" application for **Tristan Ritchie**.

## 1. Metadata & SEO
Changes required in `index.html` to update page titles, descriptions, and schema data.

- [x] **File**: `index.html`
    - [x] Update `<title>` (line 6)
    - [x] Update `<meta name="description">` (line 7)
    - [x] Update `<meta name="author">` (line 8)
    - [x] Update `<meta name="copyright">` (line 9)
    - [x] Update Open Graph tags (`og:title`, `og:description`, `og:site_name`) (lines 14-21)
    - [x] Update Twitter tags (lines 26-27)
    - [x] Update JSON-LD schema (lines 40-53)

## 2. Branding & Content
The client's name and location appear in several components.

- [ ] **File**: `src/components/Navigation.tsx`
    - Update logo/brand name.
- [ ] **File**: `src/components/HeroSection.tsx`
    - Update main heading and subtext.
- [ ] **File**: `src/components/AboutSection.tsx`
    - Update bio and profile text.
- [ ] **File**: `src/components/ContactSection.tsx`
    - Update contact details and location.
- [ ] **File**: `src/components/Footer.tsx`
    - Update copyright and branding.
- [ ] **File**: `src/components/Testimonials.tsx`
    - Update occurrences of the agent's name.
- [ ] **File**: `src/components/PropertySearch.tsx`
    - Update search context (if location specific).

## 3. Visual Identity (Theme)
Update the primary color scheme and fonts.

- [ ] **File**: `src/index.css`
    - [ ] Update CSS variables for colors (Lines 18-35). Current accent is `--accent: 43 54% 55%` (a gold/brown).
    - [ ] Update Fonts (Lines 1, 97, 102). Currently uses 'Public Sans' and 'Hanken Grotesk'.
- [ ] **File**: `tailwind.config.ts`
    - [ ] Review any hardcoded theme extensions if any.
- [ ] **File**: `index.html`
    - [ ] Update `<meta name="theme-color">` (line 11).

## 4. Assets
Replace image files in the `public` folder.

- [ ] **favicon.ico**: Update to new branding.
- [ ] **og-image.png**: Create new social share image.
- [ ] **parikshit-patel-about.png**: Replace with Tristan Ritchie's profile photo.
