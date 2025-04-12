export function formatDate(date: Date | string | number, format: 'full' | 'short' | 'time' = 'full'): string {
    const d = new Date(date);
    
    const options: { [key: string]: Intl.DateTimeFormatOptions } = {
        'full': {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        },
        'short': {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        },
        'time': {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }
    };

    return d.toLocaleDateString('fr-FR', options[format]);
}

// Exemples d'utilisation
// formatDate(new Date(), 'full') // "9 avril 2025 à 22:25:26"
// formatDate(new Date(), 'short') // "9 avr. 2025"
// formatDate(new Date(), 'time') // "22:25:26"