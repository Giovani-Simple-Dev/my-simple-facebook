document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const postContent = document.getElementById('postContent').value;
    if (postContent.trim() !== '') {
        const post = document.createElement('div');
        post.className = 'post';
        post.textContent = postContent;
        document.getElementById('postList').appendChild(post);
        document.getElementById('postContent').value = '';
    }
});

function previewImage(event) {
    var input = event.target;
    var preview = document.getElementById('preview-image');
    var circlePreview = document.getElementById('circle-preview');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';

            var img = new Image();
            img.onload = function() {
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                canvas.width = 150;
                canvas.height = 150;
                ctx.drawImage(img, 0, 0, 150, 150);
                circlePreview.innerHTML = '';
                circlePreview.appendChild(canvas);
            };
            img.src = e.target.result;

            circlePreview.style.display = 'block';
        }

        reader.readAsDataURL(input.files[0]);
    }
};
var profilePicture = localStorage.getItem('profilePicture');
    if (profilePicture) {
        document.getElementById('profile-picture').src = profilePicture;
    };