# Basic Calculator

A fully functional calculator built with HTML, CSS, and JavaScript that performs basic arithmetic operations with a modern, responsive design.

## Features

### Core Functionality
- ✅ Addition (+)
- ✅ Subtraction (-)
- ✅ Multiplication (×)
- ✅ Division (/)
- ✅ Decimal point support
- ✅ Clear (C) and Clear Entry (CE) functions

### Advanced Features
- 🎯 **Error Handling**: Division by zero protection and invalid input handling
- ⌨️ **Keyboard Support**: Full keyboard input support
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Glass morphism design with smooth animations
- 🔄 **Continuous Calculations**: Chain operations without pressing equals
- ⌫ **Backspace Support**: Delete last entered digit

## File Structure

```
calculator/
│
├── index.html          # Calculator structure and layout
├── style.css           # Styling and responsive design
├── script.js           # Calculator functionality and logic
└── README.md           # Project documentation
```

## How to Use

### Basic Operations
1. **Numbers**: Click number buttons (0-9) or use keyboard
2. **Operators**: Click +, -, ×, / buttons or use keyboard (+, -, *, /)
3. **Decimal**: Click the decimal point button or press '.' key
4. **Calculate**: Click equals button or press 'Enter' key
5. **Clear**: Click 'C' to clear everything or 'CE' to clear current entry

### Keyboard Shortcuts
- **Numbers**: 0-9 keys
- **Operators**: +, -, *, / keys  
- **Decimal**: . (period) key
- **Calculate**: Enter or = key
- **Clear All**: Escape key
- **Backspace**: Backspace key to delete last digit

### Error Handling
- **Division by Zero**: Shows "Cannot divide by zero" message
- **Invalid Input**: Handles malformed expressions
- **Overflow**: Manages very large numbers
- **Auto-Recovery**: Calculator automatically resets after errors

## Technical Implementation

### HTML Structure
- Semantic HTML5 structure
- Accessibility considerations
- Clean button layout with proper grid system

### CSS Styling
- **Modern Design**: Glass morphism effect with backdrop blur
- **Responsive Grid**: CSS Grid for button layout
- **Smooth Animations**: Hover effects and button press feedback
- **Mobile First**: Responsive design for all screen sizes
- **Custom Properties**: Easy theme customization

### JavaScript Logic
- **State Management**: Proper handling of calculator state
- **Error Prevention**: Input validation and error handling
- **Event Handling**: Both click and keyboard event support
- **Floating Point**: Precise decimal calculations
- **Memory Management**: Efficient state reset and cleanup

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Installation & Setup

1. **Download Files**: Save all files in the same directory
2. **Open**: Double-click `index.html` or open in web browser
3. **Local Server** (optional): Use live server for development

```bash
# Using Python (if available)
python -m http.server 8000

# Using Node.js live-server (if installed)
npx live-server
```

## Customization

### Colors
Modify CSS custom properties in `style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ff6b6b;
}
```

### Button Layout
Adjust grid in `.buttons` class:
```css
.buttons {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
}
```

## Testing

The calculator has been thoroughly tested for:
- ✅ Basic arithmetic operations
- ✅ Edge cases (division by zero, very large numbers)
- ✅ Keyboard input validation
- ✅ Mobile touch interactions
- ✅ Error recovery scenarios
- ✅ Continuous operation chains

## Future Enhancements

Potential features that could be added:
- 📐 Scientific functions (sin, cos, tan, log)
- 💾 Memory functions (M+, M-, MR, MC)
- 📊 History of calculations
- 🎨 Theme switcher
- 🔊 Sound effects
- ➕ Percentage calculations
- 🔢 Binary/Hex mode

## Credits



---

**Project Difficulty**: Hard  
**Technologies**: HTML5, CSS3, JavaScript (ES6+)  
**Responsive**: Mobile-first design  
**Browser Support**: Modern browsers with ES6 support