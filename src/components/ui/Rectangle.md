# Rectangle Component

A reusable UI component for creating decorative background rectangles with customizable properties.

## Features

1. **Customizable Color** - Any valid CSS color value
2. **Adjustable Dimensions** - Width and height in pixels
3. **Responsive Positioning** - Fixed position that maintains rotation on screen resize
4. **Rotation** - Rotate at any angle
5. **Responsive Visibility** - Show/hide on mobile or desktop

## Usage Examples

### Basic Rectangle

```tsx
import { Rectangle } from '@/components/ui/Rectangle';

<Rectangle
  color="#F7DBA7"
  width={500}
  height={500}
  rotation={25}
/>
```

### Positioned Rectangle

```tsx
<Rectangle
  color="#003459"
  width={635}
  height={635}
  rotation={14}
  top={349}
  right={109}
  borderRadius={99}
/>
```

### Mobile-Only Rectangle

```tsx
<Rectangle
  color="#F7DBA7"
  width={529}
  height={529}
  rotation={16}
  top={620}
  left={-11}
  opacity={0.4}
  blendMode="multiply"
  hideOnDesktop={true}
/>
```

### Desktop-Only Rectangle

```tsx
<Rectangle
  color="#003459"
  width={635}
  height={635}
  rotation={25.23}
  top={-601}
  left={-251}
  hideOnMobile={true}
/>
```

### Animated Rectangle (Continuous Rotation)

```tsx
<Rectangle
  color="#F7DBA7"
  width={500}
  height={500}
  rotation={0}
  top={100}
  left={100}
  animate={true}
  animationDuration={20}
  animationDirection="normal"
/>
```

### Animated Rectangle (Reverse Rotation)

```tsx
<Rectangle
  color="#003459"
  width={500}
  height={500}
  rotation={0}
  top={100}
  right={100}
  animate={true}
  animationDuration={15}
  animationDirection="reverse"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `#F7DBA7` | Background color (hex, rgb, named color, etc.) |
| `width` | `number` | `635` | Width in pixels |
| `height` | `number` | `635` | Height in pixels |
| `rotation` | `number` | `0` | Initial rotation angle in degrees |
| `borderRadius` | `number` | `99` | Border radius in pixels |
| `top` | `string \| number` | - | Position from top (px or %) |
| `left` | `string \| number` | - | Position from left (px or %) |
| `right` | `string \| number` | - | Position from right (px or %) |
| `bottom` | `string \| number` | - | Position from bottom (px or %) |
| `opacity` | `number` | `1` | Opacity (0 to 1) |
| `blendMode` | `string` | `normal` | CSS mix-blend-mode |
| `zIndex` | `number` | `0` | z-index value |
| `hideOnMobile` | `boolean` | `false` | Hide on screens < lg breakpoint |
| `hideOnDesktop` | `boolean` | `false` | Hide on screens >= lg breakpoint |
| `animate` | `boolean` | `false` | Enable continuous rotation animation |
| `animationDuration` | `number` | `20` | Animation duration in seconds |
| `animationDirection` | `'normal' \| 'reverse'` | `'normal'` | Rotation direction (clockwise/counter-clockwise) |
| `className` | `string` | - | Additional CSS classes |

## Responsive Behavior

The Rectangle component maintains its rotation and position relative to its anchor point when the screen is resized. This means:

- If positioned with `top` and `left`, it rotates from the top-left corner
- If positioned with `bottom` and `right`, it rotates from the bottom-right corner
- The rotation angle remains constant across all screen sizes
- Use `hideOnMobile` or `hideOnDesktop` for responsive visibility

## Example: HeroBanner Implementation

See [HeroBanner.tsx](file:///var/www/html/monito/src/components/HeroBanner.tsx) for a complete implementation using multiple Rectangle components to create decorative background elements.
