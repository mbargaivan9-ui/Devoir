function verif() {
    
    const emailInput = document.querySelector('input[type="email"]');
    const nomInput = document.querySelector('input[type="text"]');
    const messageInput = document.querySelector('textarea');
    
    
    emailInput.style.borderColor = 'initial';
    nomInput.style.borderColor = 'initial';
    messageInput.style.borderColor = 'initial';
    
    let isValid = true;
    
    
    if (emailInput.value.trim() === '') {
        emailInput.style.border = '2px solid red';
        isValid = false;
    }
    
    if (nomInput.value.trim() === '') {
        nomInput.style.border = '2px solid red';
        isValid = false;
    }
    
    if (messageInput.value.trim() === '') {
        messageInput.style.border = '2px solid red';
        isValid = false;
    }
    
    
    if (!isValid) {
        alert('Veuillez remplir tous les champs.');
        return false;
    }
    
    
    const email = emailInput.value.trim();
    if (!email.includes('@') || !email.includes('.')) {
        emailInput.style.border = '2px solid red';
        alert('Veuillez remplir tous les champs.');
        return false;
    }
    

    const message = messageInput.value.trim();
    if (message.length < 150) {
        messageInput.style.border = '2px solid red';
        alert('Veuillez remplir tous les champs.');
        return false;
    }
    
    
    alert('Formulaire envoyé avec succès!');
    return false; // false pour éviter le rechargement de la page
}
