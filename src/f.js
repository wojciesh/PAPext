if (typeof jQuery === 'undefined') {
    location.reload();
} else {
    window.location.href = jQuery(".field--name-field-link > .field--item").text().replace('http://','https://');
}
