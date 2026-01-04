/**
 * Electric Vehicle Technology Explorer
 * Interactive 3D component viewer
 */

// Component data with 3D models and information
const componentData = {
    battery: {
        number: '01',
        title: 'Lithium-Ion Battery Pack',
        model: './models/battery.glb', // Place your battery GLB model in the models/ folder
        description: 'The battery pack is the heart of every electric vehicle, storing the electrical energy that powers the motor. Modern EV batteries use lithium-ion technology arranged in thousands of individual cells, connected in series and parallel to achieve the desired voltage and capacity.',
        specs: [
            'Capacity: 75-100 kWh (typical long-range EV)',
            'Voltage: 350-800V nominal',
            'Chemistry: NMC (Nickel Manganese Cobalt) or LFP (Lithium Iron Phosphate)',
            'Weight: 400-700 kg',
            'Thermal Management: Liquid cooling system',
            'Cycle Life: 1,500-3,000 full charge cycles'
        ],
        facts: [
            { value: '300+', label: 'Mile Range' },
            { value: '8yr', label: 'Warranty' },
            { value: '15min', label: 'Fast Charge' },
            { value: '97%', label: 'Efficiency' }
        ]
    },
    motor: {
        number: '02',
        title: 'Electric Motor',
        model: './models/3d-electric-motor.glb',
        description: 'Electric motors convert electrical energy into mechanical rotation with remarkable efficiency. Unlike combustion engines with hundreds of moving parts, electric motors have just one moving component—the rotor. This simplicity means fewer maintenance requirements and instant torque delivery.',
        specs: [
            'Type: Permanent Magnet Synchronous Motor (PMSM)',
            'Power Output: 150-400 kW peak',
            'Torque: 300-600 Nm instant',
            'Efficiency: 95-97%',
            'RPM Range: 0-18,000 rpm',
            'Cooling: Integrated liquid cooling'
        ],
        facts: [
            { value: '0-60', label: '3.5 seconds' },
            { value: '1', label: 'Moving Part' },
            { value: '95%', label: 'Efficiency' },
            { value: '∞', label: 'Instant Torque' }
        ]
    },
    braking: {
        number: '03',
        title: 'EV Tires',
        model: './models/3d-tire.glb',
        description: 'Electric vehicle tires are specifically engineered to handle the unique demands of EVs. They must support heavier vehicle weights due to battery packs, provide low rolling resistance for maximum range, and deliver exceptional grip for instant torque delivery. Advanced compounds and tread patterns optimize efficiency while maintaining safety and performance.',
        specs: [
            'Low Rolling Resistance: 20-30% better than standard tires',
            'Load Capacity: Designed for heavier EV weight distribution',
            'Tread Pattern: Optimized for efficiency and wet grip',
            'Compound: Specialized rubber for reduced energy loss',
            'Noise Reduction: Quieter operation for silent EV experience',
            'Durability: Extended lifespan despite higher torque loads'
        ],
        facts: [
            { value: '30%', label: 'Less Resistance' },
            { value: '+5%', label: 'Range Boost' },
            { value: '50K', label: 'Miles Lifespan' },
            { value: 'EV', label: 'Optimized' }
        ]
    }
};

// DOM Elements
const modal = document.getElementById('componentModal');
const modalClose = document.querySelector('.modal-close');
const viewer = document.getElementById('componentViewer');
const hotspots = document.querySelectorAll('.hotspot');
const rotateToggle = document.getElementById('rotateToggle');
const resetViewBtn = document.getElementById('resetView');

// Current state
let currentComponent = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupHotspots();
    setupModalControls();
    setupViewerControls();
});

// Setup hotspot click handlers
function setupHotspots() {
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', () => {
            const componentId = hotspot.dataset.component;
            openComponentModal(componentId);
        });
    });
}

// Open modal with component details
function openComponentModal(componentId) {
    const data = componentData[componentId];
    if (!data) return;
    
    currentComponent = componentId;
    
    // Update modal content
    document.getElementById('componentNumber').textContent = data.number;
    document.getElementById('componentTitle').textContent = data.title;
    document.getElementById('componentDescription').textContent = data.description;
    
    // Update specs
    const specsList = document.getElementById('componentSpecs');
    specsList.innerHTML = data.specs.map(spec => `<li>${spec}</li>`).join('');
    
    // Update facts
    const factsGrid = document.getElementById('componentFacts');
    factsGrid.innerHTML = data.facts.map(fact => `
        <div class="fact-card">
            <span class="fact-value">${fact.value}</span>
            <span class="fact-label">${fact.label}</span>
        </div>
    `).join('');
    
    // Show loading indicator
    const loadingIndicator = viewer.querySelector('.model-loading');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'block';
    }
    
    // Load 3D model
    viewer.src = data.model;
    
    // Ensure auto-rotate is enabled with no delay
    viewer.setAttribute('auto-rotate', '');
    viewer.setAttribute('auto-rotate-delay', '0');
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentComponent = null;
}

// Setup modal close handlers
function setupModalControls() {
    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Setup 3D viewer controls
function setupViewerControls() {
    // Toggle auto-rotate
    rotateToggle.addEventListener('click', () => {
        const isRotating = viewer.hasAttribute('auto-rotate');
        if (isRotating) {
            viewer.removeAttribute('auto-rotate');
            viewer.removeAttribute('auto-rotate-delay');
            rotateToggle.classList.remove('active');
        } else {
            viewer.setAttribute('auto-rotate', '');
            viewer.setAttribute('auto-rotate-delay', '0');
            rotateToggle.classList.add('active');
        }
    });
    
    // Set initial state
    rotateToggle.classList.add('active');
    
    // Reset view
    resetViewBtn.addEventListener('click', () => {
        viewer.cameraOrbit = 'auto auto auto';
        viewer.cameraTarget = 'auto auto auto';
        viewer.fieldOfView = 'auto';
    });
    
    // Handle model load events
    viewer.addEventListener('load', () => {
        console.log('Model loaded successfully');
        // Hide loading indicator
        const loadingIndicator = viewer.querySelector('.model-loading');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
        // Ensure model-viewer is visible
        viewer.style.display = 'block';
        viewer.style.opacity = '1';
    });
    
    viewer.addEventListener('error', (e) => {
        console.error('Error loading model:', e);
        console.error('Model path:', viewer.src);
        // Hide loading indicator even on error
        const loadingIndicator = viewer.querySelector('.model-loading');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
        // Show error message
        const errorMsg = document.createElement('div');
        errorMsg.className = 'model-error';
        errorMsg.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: var(--secondary); text-align: center;';
        errorMsg.innerHTML = '<p>Error loading model</p><p style="font-size: 0.8rem;">Check console for details</p>';
        viewer.parentElement.appendChild(errorMsg);
    });
}

// Add keyboard navigation for hotspots
document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('active')) return;
    
    const keys = ['1', '2', '3'];
    const components = ['battery', 'motor', 'braking'];
    
    const index = keys.indexOf(e.key);
    if (index !== -1) {
        openComponentModal(components[index]);
    }
});

