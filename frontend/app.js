// Navigation Manager between steps
function navigateTo(stepId) {
    document.querySelectorAll('.card').forEach(card => card.classList.remove('active'));
    document.getElementById(stepId).classList.add('active');
    
    // Automatically load medical facility routing database if matching step
    if(stepId === 'step-results') {
        fetchFacilities();
    }
}

// Symptom Processing Trigger
function evaluateSymptom(response) {
    if(response === 'YES') {
        navigateTo('step-results');
    } else {
        alert("Proceeding to Next Automated Diagnostic Framework Question...");
    }
}

// Emulated Voice Interface Framework
function simulateSpeech() {
    alert("Microphone Listening Device Activated... Recording Dialect String: 'Chhati me tej dard ho raha hai'");
    setTimeout(() => {
        navigateTo('step-results');
    }, 1500);
}

// Care Coordination Endpoint Logic Execution
function fetchFacilities() {
    const container = document.getElementById('facilities-container');
    container.innerHTML = `<p style="color: #94a3b8; text-align: center;">Fetching secure GPS tracking metrics...</p>`;

    // Access local backend API deployment route
    fetch('/api/facilities')
        .then(res => res.json())
        .then(data => {
            container.innerHTML = '';
            data.forEach(fac => {
                const html = `
                    <div class="facility-card">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <h4>${fac.name}</h4>
                            <span class="facility-badge">${fac.distance}</span>
                        </div>
                        <p style="font-size: 0.85rem; color: #94a3b8; margin: 4px 0 10px 0;">${fac.address}</p>
                        <div class="facility-meta">
                            <span><i class="fa-solid fa-bed"></i> Beds Available: <strong style="color: #4ade80;">${fac.beds}</strong></span>
                            <span style="color: #f87171;"><i class="fa-solid fa-truck-medical"></i> ${fac.emergency}</span>
                        </div>
                        <div class="facility-tags">
                            ${fac.services.map(s => `<span class="f-tag">\${s}</span>`).join('')}
                        </div>
                    </div>
                `;
                container.innerHTML += html;
            });
        })
        .catch(err => {
            container.innerHTML = `<p style="color: #f87171;">Fallback Mode Enabled. Connect to Local Server API Module.</p>`;
        });
}
