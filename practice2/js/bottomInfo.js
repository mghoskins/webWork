document.addEventListener('DOMContentLoaded', function() {
    var div = document.createElement('div');
    div.id = 'container';
    div.innerHTML = 'Hi there!';
    div.className = 'border pad';

    document.body.appendChild(div);
}, true);

// This is not the final product
// This is testing to figure out how to setup a div that will appear on multiple html pages to take up less space and code
