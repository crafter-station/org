# Crafter Station Visual Style Reference

## 1. Core Aesthetic

**Bold Minimalist Tech**

Design philosophy: High-impact typography on dark canvas with strategic yellow accents that signal energy and innovation.

Key influences:
- Vercel/Linear dark mode aesthetic
- Developer tool branding (GitHub, Raycast)
- Modern startup landing pages
- Open source community visual language

---

## 2. Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Crafter Yellow** | `#FFD800` | Primary accent, "STATION" text, links, active states, dots |
| **Pure White** | `#FFFFFF` | Headlines ("CRAFTER"), primary CTAs, icons |
| **Off-White** | `#E5E5E5` | Body text, secondary navigation |
| **Muted Gray** | `#A3A3A3` | Inactive nav items, descriptions |
| **Dark Background** | `#0A0A0A` | Primary background |
| **Card Dark** | `#171717` | Card backgrounds, secondary surfaces |
| **Border Gray** | `#262626` | Subtle borders, dividers |

**Total: 7 core colors** (dark-first palette)

### Color Usage Rules
- Yellow is reserved for: active states, important links, brand wordmark ("STATION")
- White for primary headlines and CTAs
- Gray scale for supporting content
- Never use yellow for large text blocks

---

## 3. Typography System

### Headlines
- **Family**: Sans-serif, likely Inter or custom geometric sans
- **Weight**: 900 (Black/Heavy)
- **Style**: All caps, extreme boldness
- **Scale**: Massive (hero text dominates viewport)
- **Tracking**: Slightly tight (-0.02em to -0.04em)

### Body/Secondary
- **Family**: Same sans-serif family
- **Weight**: 400-500 (Regular to Medium)
- **Size**: 16-18px for body, 14px for small text
- **Color**: Off-white (#E5E5E5) or muted gray

### Navigation
- **Weight**: 500 (Medium)
- **Size**: 14-16px
- **Active state**: White with yellow left border accent
- **Inactive**: Muted gray

### Hierarchy Structure
```
Level 1: MASSIVE CAPS (Hero) - 900 weight
Level 2: Large sentence case - 600-700 weight
Level 3: Body text - 400-500 weight
Level 4: Small/caption - 400 weight, muted
```

### Special Considerations
- Bilingual ready (Spanish/English)
- Monospace for code/technical elements
- Yellow highlights for emphasis within body text

---

## 4. Key Design Elements

### Layout Structure
- **Full-bleed dark canvas**
- **Centered hero content**
- **Fixed left navigation** (vertical stack)
- **Fixed right social icons** (vertical stack)
- **Asymmetric balance**: Nav left, content center-right

### Grid System
- Content max-width: ~1200px
- Generous whitespace (80-120px vertical rhythm)
- Left nav: Fixed ~200px
- Right icons: Fixed ~60px

### Graphic Elements

**Logo**
- Yellow infinity/knot symbol
- Contained in subtle rounded square
- Represents continuous crafting/building

**Status Indicators**
- Yellow dot + text badge for announcements
- Pill-shaped with subtle border

**Buttons**
- Primary: White background, dark text, no border
- Secondary: Transparent, white border, white text
- Border radius: 4-6px (subtle rounding)
- Horizontal icon + text layout

**Cards**
- Dark background (#171717)
- Subtle border
- Yellow accent for "What's new" label
- Arrow indicators for links

**Social Icons**
- Monochrome white
- Circular or contained shapes
- Vertical stack with consistent spacing

### Textures & Treatments
- **No gradients** (flat colors only)
- **No shadows** on dark mode (use borders instead)
- **Subtle hover states** (opacity or color shift)
- **Clean edges** (no blur effects)

### Distinctive Choices
- Split wordmark: "CRAFTER" white, "STATION" yellow
- Extreme type scale contrast (hero vs body)
- Vertical navigation (uncommon, distinctive)
- Dense social proof sidebar

---

## 5. Visual Concept

### Conceptual Bridge
The design bridges **developer tool professionalism** with **community warmth**. The dark canvas signals technical credibility (like terminal/IDE), while the yellow accent adds approachability and energy that distinguishes it from cold corporate tech.

### Element Relationships
- **Dark + Yellow**: Night coding sessions / creative energy
- **Massive type + Minimal UI**: Confidence without clutter
- **Left nav + Right social**: Community surrounds the mission
- **"CRAFTER" + "STATION"**: The act (craft) meets the place (station)

### Ideal Use Cases
- Developer tool landing pages
- Open source project showcases
- Technical community platforms
- Hackathon/event sites
- Portfolio for technical creators

---

## 6. Implementation Notes for Org Chart

### Apply to Org Chart
```css
/* Background */
--bg-primary: #0A0A0A;
--bg-card: #171717;

/* Accent */
--accent: #FFD800;
--accent-muted: rgba(255, 216, 0, 0.15);

/* Text */
--text-primary: #FFFFFF;
--text-secondary: #A3A3A3;

/* Borders */
--border: #262626;
--border-accent: #FFD800;
```

### Node Styling
- Org node: Yellow background, dark text (inverted for emphasis)
- Founder node: Dark bg, yellow border (highlighted)
- Member nodes: Dark bg, subtle border (consistent)
- Hover: Yellow border glow

### Edge Styling
- Color: Yellow at 50% opacity
- Style: Smoothstep (professional, clean angles)
- No animation or subtle pulse

### Light Mode Adaptation
- Background: #F5F5F5 (warm gray)
- Cards: #FFFFFF with subtle shadow
- Keep yellow accent unchanged
- Text: #171717 (near black)
