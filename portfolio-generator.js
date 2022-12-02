var piano_video = {
    name: 'Generating Audio for Muted Piano-Playing Video using Computer Vision',
    video_source: 'assets/CV_Believer.m4v',
    description: 'In this project, we record several piano playing videos and generate sound track for them using computer vision.',
}

var portfolio_allocation = {
    name: 'Deep Reinforcement Learning for Stock Trading from Scratch: Portfolio Allocation',
    video_source:'assets/DRL.mp4',
    description: 'In this project, we reveal a deep reinforcement learning scheme that automatically learns a stock trading strategy by maximizing investment return.',
}

portfolio_list = [piano_video, portfolio_allocation]

for (let i = 0; i < portfolio_list.length; i++) {
    document.write('<div class="info-container">');
    if (i == 0) {
        document.write('<p class="info-title">Project</p>');
        document.write('<p class="info-title smaller-font"><a href="piano.html" class="portfolio-list">' + portfolio_list[i].name + '</a></p>');
    }
    else {
        document.write('<p class="info-title smaller-font">' + portfolio_list[i].name + '</p>');
    }
    document.write('<div class="video-container">');
    document.write('<iframe class="video-format" src="' + portfolio_list[i].video_source + '" title="Video"></iframe>');
    document.write('<p class="video-text">' + portfolio_list[i].description + '</p>');
    document.write('</div>');
    document.write('</div>');
}