export const cardAPI = async () => {
    try {
        const response = await fetch('http://localhost:1337/api/cards?populate=*', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('La réponse du réseau n\'était pas valide');
        }

        const data = await response.json();
        console.log('apidata', data.data);
        return { success: true, data }; // Indiquer que la requête a réussi
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
        return { success: false, error }; // Indiquer qu'une erreur s'est produite
    }
}
