export const cardAPI = async () => {
    try {
        const response = await fetch('http://leopolddagorn.fr/api/cards?populate=*', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('La réponse du réseau n\'était pas valide');
        }

        const data = await response.json();
        return { success: true, data };
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
        return { success: false, error };
    }
}

export const logoAPI = async () => {

    try {
        const response = await fetch('http://leopolddagorn.fr/api/logos?populate=*', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',       
            }
        })
        
        if (!response.ok) {
        throw new Error ('La réponse du réseau n\'était pas valide')

        }    
        
        const data = await response.json();       

        return data ;
    }
    catch(error) {
        throw error
    }
}
