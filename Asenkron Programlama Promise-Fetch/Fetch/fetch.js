// Ajax yerine kullanılabilecek asenkron veri gönderme ve alma işlemi yapar

// text işlemi

function getTextFile(){

    fetch("example.txt")
    .then(response => response.text())
    .then(response => console.log(response))
    .catch(err => console.log(err));
}

getTextFile();

// json işlemi
