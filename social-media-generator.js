var LinkedIn = {
    name: 'LinkedIn',
    username: 'Yanting Chen',
    link: 'https://www.linkedin.com/in/yanting-chen-b63a6422b',
    picture: 'images/LinkedIn-photo.png',
}

var Github = {
    name: 'Github',
    username: 'mmmmino',
    link: 'https://github.com/mmmmino',
    picture: 'images/Github-photo.png',
}

var Leetcode = {
    name: 'LeetCode',
    username: 'mmmmino',
    link: 'https://leetcode.com/mmmmino/',
    picture: 'images/Leetcode-photo.png',
}

var Google = {
    name: 'Google',
    username: 'harper.chenyt@gmail.com',
    link: 'https://www.google.ca/',
    picture: 'images/Gmail-photo.png',
}

var Instagram = {
    name: 'Instagram',
    username: 'cccyt024',
    link: 'https://www.instagram.com/cccyt024/',
    picture: 'images/Instagram-photo.png',
}

var social_media_list = [Github, LinkedIn, Leetcode, Instagram, Google]

document.write('<div class="parent-social-media-container">');
for (let j = 0; j < social_media_list.length; j++) {
    if (j == 0) {
        document.write('<p class="info-title">Contact Information</p>');
    }
    document.write('<div class="social-media-container" onclick="window.open(`' + social_media_list[j].link + '`, `_blank`)" style="cursor: pointer;">');
    document.write('<div class="flex-parent jc-center">');
    document.write('<p class="social-media-text">' + social_media_list[j].name + '</p>');
    document.write("</div>");
    document.write('<img class="social-media-images" src=' + social_media_list[j].picture + ' alt="social media logos">');
    document.write('<div class="flex-parent jc-center">');
    document.write('<p class="social-media-text social-media-text-small">' + social_media_list[j].username + '</p>');
    document.write("</div>");
    document.write("</div>");
}
document.write('</div>');