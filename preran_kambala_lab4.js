(function() {
    // Venkata Srinivas Kambala
    // ITMD 541-01 Graduate Student

    console.log('Executing Lab 4 script for Venkata Srinivas Kambala');

    // 1. Update hero headline
    const heroTitle = document.querySelector('#hero h1');
    if (heroTitle !== null) {
        heroTitle.innerText = 'Uplift Your Brand with Stellar Marketing';
    }

    // 2. Modify hero subtext with bold and italic
    const heroDescription = document.querySelector('#hero p');
    if (heroDescription) {
        heroDescription.innerHTML = 'Utilize cutting-edge strategies from <strong><em>Stellar Marketing</em></strong> to help your business thrive and excel.';
    }

    // 3. Set hero background image
    const heroBg = document.getElementById('hero');
    if (heroBg) {
        Object.assign(heroBg.style, {
            backgroundImage: "url('https://picsum.photos/id/683/1280/720')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        });
    }

    // 4. Sync navbar color with footer
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header && footer) {
        const footerColor = getComputedStyle(footer).backgroundColor;
        header.style.backgroundColor = footerColor;
    }

    // 5. Remove CTA button
    document.querySelector('#hero a')?.remove();

    // 6. Center align section headings
    document.querySelectorAll('#services h2, #solutions h2, #contact h2').forEach(el => {
        el.style.textAlign = 'center';
    });

    // 7. Change service icons color
    document.querySelectorAll('#services .material-symbols-outlined').forEach(icon => {
        icon.style.color = '#47C714';
    });

    // 8. Change digital marketing icon
    const firstIcon = document.querySelector('#services .material-symbols-outlined');
    if (firstIcon) {
        firstIcon.textContent = 'ads_click';
    }

    // 9. Adjust solutions layout
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @media (min-width: 1024px) {
            #solutions [data-section="product_cards"] {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 20px;
            }
        }
    `;
    document.head.appendChild(styleSheet);

    // 10. Replace Musicians image
    const musiciansImage = document.querySelector('#solutions [data-section="product_cards"] div:nth-child(4) img');
    if (musiciansImage) {
        musiciansImage.src = 'https://picsum.photos/id/453/400/300';
    }

    // Graduate Requirement: Form validation
    const form = document.querySelector('#contact form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const nameField = form.querySelector('input[name="name"]');
            const emailField = form.querySelector('input[name="email"]');
            const name = nameField ? nameField.value.trim() : '';
            const email = emailField ? emailField.value.trim() : '';
            if (name && email) {
                alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
            } else {
                alert('Please provide a name and email.');
            }
        });
    }

    console.log('Lab 4 script executed successfully.');
})();
