function verif() {
    // Récupérer les éléments du formulaire
    const emailInput = document.querySelector('input[type="email"]');
    const nomInput = document.querySelector('input[type="text"]');
    const messageInput = document.querySelector('textarea');
    
    // Réinitialiser les bordures
    emailInput.style.borderColor = 'initial';
    nomInput.style.borderColor = 'initial';
    messageInput.style.borderColor = 'initial';
    
    let isValid = true;
    
    // Vérifier si tous les champs sont remplis
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
    
    // Si des champs sont vides, afficher le message d'erreur
    if (!isValid) {
        alert('Veuillez remplir tous les champs.');
        return false;
    }
    
    // Vérifier que l'email contient @ et .
    const email = emailInput.value.trim();
    if (!email.includes('@') || !email.includes('.')) {
        emailInput.style.border = '2px solid red';
        alert('Veuillez remplir tous les champs.');
        return false;
    }
    
    // Vérifier que le message a au moins 150 caractères
    const message = messageInput.value.trim();
    if (message.length < 150) {
        messageInput.style.border = '2px solid red';
        alert('Veuillez remplir tous les champs.');
        return false;
    }
    
    // Si tout est valide, vous pouvez soumettre le formulaire
    alert('Formulaire envoyé avec succès!');
    return false; // false pour éviter le rechargement de la page
}
