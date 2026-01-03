# Electric Vehicle Technology Explorer

An interactive 3D educational experience exploring the core components of electric vehicles.

![Electric Vehicle Explorer](https://img.shields.io/badge/Model--Viewer-3.3.0-00f0ff)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚗 Overview

This interactive web application allows users to explore the key technologies that power modern electric vehicles through engaging 3D visualizations. Click on hotspots overlaid on an EV cutaway diagram to dive deep into each component.

## ✨ Features

- **Interactive Hotspots**: Click on glowing markers to explore individual components
- **3D Model Viewing**: Rotate, zoom, and examine each component in detail
- **Technical Specifications**: Detailed specs for each technology
- **Responsive Design**: Works on desktop and mobile devices
- **Keyboard Navigation**: Press 1, 2, or 3 to quickly access components

## 🔋 Components Explored

1. **Lithium-Ion Battery Pack** - The energy storage heart of the EV
2. **Electric Motor** - High-efficiency permanent magnet motor
3. **Regenerative Braking System** - Energy recovery during deceleration

## 🛠️ Technologies Used

- [Google Model-Viewer](https://modelviewer.dev/) - 3D model rendering
- HTML5, CSS3, JavaScript (Vanilla)
- SVG for the EV cutaway illustration
- Google Fonts (Orbitron, Rajdhani)

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/electric-vehicle.git
   ```

2. Open `index.html` in a modern web browser

3. Click on the glowing hotspots to explore components

## 📁 Project Structure

```
electric-vehicle/
├── index.html          # Main HTML file
├── styles.css          # Cyberpunk-themed styles
├── script.js           # Interactive functionality
├── assets/
│   └── ev-cutaway.svg  # EV illustration with hotspot areas
└── README.md           # This file
```

## 🎨 Design

The interface features a cyberpunk/high-tech aesthetic with:
- Dark theme with cyan (#00f0ff) and magenta (#ff006e) accents
- Animated circuit board background
- Glowing effects and smooth transitions
- Orbitron font for a futuristic feel

## 📝 Customization

### Adding Your Own 3D Models

Replace the placeholder model URLs in `script.js` with your own `.glb` or `.gltf` files:

```javascript
const componentData = {
    battery: {
        model: 'path/to/your/battery-model.glb',
        // ...
    }
};
```

### Free 3D Model Sources

- [Sketchfab](https://sketchfab.com) - Many free CC-licensed models
- [TurboSquid](https://turbosquid.com) - Free section available
- [Free3D](https://free3d.com) - Various free models
- [CGTrader](https://cgtrader.com) - Free models section

## 📄 License

MIT License - feel free to use this for educational purposes.

## 🙏 Credits

- 3D Models: Placeholder models from [Model-Viewer Examples](https://modelviewer.dev/)
- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: Custom SVG

