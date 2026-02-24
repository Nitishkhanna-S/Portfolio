# 🌟 Neon Glow Effects - Quick Reference

## Available Neon Classes

### `.neon-glow` - Blue Cyan Glow ⚡
- **Color:** Bright cyan/blue
- **Animation:** Flickering effect
- **Best For:** Hero titles, main headings
- **Usage:** `<h1 class="neon-glow">Title</h1>`

### `.neon-purple` - Purple Pulse 💜
- **Color:** Purple gradient
- **Animation:** Smooth pulsating
- **Best For:** Section headings
- **Usage:** `<h2 class="neon-purple">Heading</h2>`

### `.neon-pink` - Pink Flicker 💗
- **Color:** Hot pink
- **Animation:** Fast flickering
- **Best For:** Call-to-action headings
- **Usage:** `<h2 class="neon-pink">CTA</h2>`

### `.neon-rainbow` - Rainbow Shift 🌈
- **Color:** Multi-color gradient
- **Animation:** Color shifting
- **Best For:** Hero sections, special titles
- **Usage:** `<h1 class="neon-rainbow">Amazing</h1>`

### `.neon-outline` - Outline Glow 🔲
- **Color:** Transparent fill, glowing outline
- **Animation:** Blinking
- **Best For:** Decorative headings
- **Usage:** `<h2 class="neon-outline">Outline</h2>`

### `.neon-subtle` - Soft Glow ✨
- **Color:** Light blue
- **Animation:** None (static)
- **Best For:** Body text, descriptions
- **Usage:** `<p class="neon-subtle">Text</p>`

---

## Dark Mode (Theme Toggle)

### Theme Toggle Button
```html
<button class="theme-toggle" id="themeToggle">
  <span class="moon">🌙</span>
  <span class="sun">☀️</span>
</button>
```

### Features
- ✅ Fixed position (top-right)
- ✅ Glassmorphism background
- ✅ Rotation animation on click
- ✅ LocalStorage persistence
- ✅ Smooth 0.6s transitions

### Manual Toggle (JavaScript)
```javascript
document.body.classList.toggle('dark-mode');
```

---

## Customization

### Change Neon Colors
Edit CSS variables in `:root`:
```css
:root {
    --neon-blue: #00f2fe;
    --neon-purple: #667eea;
    --neon-pink: #f093fb;
    --neon-cyan: #4facfe;
}
```

### Adjust Animation Speed
Modify animation duration:
```css
.neon-glow {
    animation: neonFlicker 2s infinite alternate;
    /* Change 2s to desired duration */
}
```

### Disable Animations
For accessibility or preference:
```css
.neon-glow {
    animation: none;
}
```

---

## Combinations

### Neon + Glassmorphism
```html
<div class="glass-card">
  <h2 class="neon-purple">Glowing Card</h2>
  <p class="neon-subtle">Description</p>
</div>
```

### Neon + 3D Tilt
```html
<div class="glass-card tilt-card">
  <h2 class="neon-glow">Interactive</h2>
</div>
```

### Neon + Animations
```html
<h1 class="neon-rainbow animate-fade-in-up">
  Animated Title
</h1>
```

---

## Performance Tips

1. **Limit Usage:** Use neon effects sparingly (3-5 per page max)
2. **Priority:** Hero titles and section headings
3. **Mobile:** Effects are optimized for all devices
4. **Accessibility:** All animations respect `prefers-reduced-motion`

---

## Browser Support

- ✅ Chrome/Edge (full support)
- ✅ Firefox (full support)
- ✅ Safari (full support)
- ✅ Mobile browsers (full support)
- ✅ Fallback for older browsers (no glow, plain text)

---

## Examples in the Wild

### Hero Section
```html
<section class="hero-section">
  <h1 class="neon-rainbow">Welcome</h1>
  <p class="neon-subtle">Full Stack Developer</p>
</section>
```

### About Section
```html
<section>
  <h2 class="neon-glow">About Me</h2>
  <p>Regular paragraph text</p>
</section>
```

### Projects Section
```html
<section>
  <h2 class="neon-purple">Featured Work</h2>
  <div class="portfolio-grid">
    <div class="glass-card">
      <h3 class="neon-pink">Project Title</h3>
      <p class="neon-subtle">Project description</p>
    </div>
  </div>
</section>
```

### Contact Section
```html
<section>
  <h2 class="neon-outline">Get In Touch</h2>
  <p class="neon-subtle">Let's connect!</p>
</section>
```

---

## Troubleshooting

### Neon not showing?
- ✅ Check if CSS file is linked
- ✅ Verify class spelling
- ✅ Check browser developer tools for errors

### Animation not working?
- ✅ Check if `prefers-reduced-motion` is enabled
- ✅ Verify GPU acceleration is enabled
- ✅ Test in different browser

### Dark mode not persisting?
- ✅ Check LocalStorage is enabled
- ✅ Verify JavaScript is running
- ✅ Check browser console for errors

---

## Testing Checklist

- [ ] Test neon effects in light mode
- [ ] Test neon effects in dark mode
- [ ] Test theme toggle button
- [ ] Verify smooth transitions (0.6s)
- [ ] Test on mobile devices
- [ ] Check in different browsers
- [ ] Verify LocalStorage persistence
- [ ] Test with reduced motion preference

---

**View Live Demo:** Open `neon-demo.html` in your browser!

**Full Documentation:** See `README.md` for complete guide.
