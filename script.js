document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('event-form');
    const giftInput = document.getElementById('gift');
    const addGiftButton = document.getElementById('add-gift');
    const giftList = document.getElementById('gift-list');

    addGiftButton.addEventListener('click', () => {
        const gift = giftInput.value.trim();
        if (gift) {
            const listItem = document.createElement('li');
            listItem.textContent = gift;
            giftList.appendChild(listItem);
            giftInput.value = '';
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const eventDetails = {
            title: form.title.value,
            date: form.date.value,
            time: form.time.value,
            location: form.location.value,
            description: form.description.value
        };

        const gifts = Array.from(giftList.children).map(li => li.textContent);

        console.log('Event Details:', eventDetails);
        console.log('Gift List:', gifts);

        // Here you would typically send this data to your backend
    });
});