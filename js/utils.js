document.getElementById('avis-trigger').addEventListener('click', function () {
    document.getElementById('avis-legal').style.display = 'block';
});

document.getElementById('tancar-avis').addEventListener('click', function () {
    document.getElementById('avis-legal').style.display = 'none';
});

document.getElementById('politica-trigger').addEventListener('click', function () {
    document.getElementById('politica-privacitat').style.display = 'block';
});

document.getElementById('tancar-politica').addEventListener('click', function () {
    document.getElementById('politica-privacitat').style.display = 'none';
});
