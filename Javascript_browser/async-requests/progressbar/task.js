const progress = document.getElementById( 'progress' );
const form = document.getElementById( 'form' );

const URL = 'https://students.netoservices.ru/nestjs-backend/upload';



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest(); 

    xhr.addEventListener('progress', () => {
        if (xhr.readyState === xhr.DONE) {
            progress.value = e.total/e.loaded;
        }
    });
    xhr.open('POST', URL);

    const formData = new FormData(form)

    xhr.send(formData);
});



