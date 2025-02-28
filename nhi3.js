function startAnimation() {
    const button = document.getElementById('button');
    const fireworksContainer = document.getElementById('fireworks');
    const starsContainer = document.getElementById('stars');
    const loveMessage = document.getElementById('loveMessage');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const bigheart = document.getElementById('bigheart');
    const earth = document.getElementById('earth');

    // Phát nhạc
    backgroundMusic.play();

    // Ẩn nút và chuyển nền thành màu hồng tối trước, rồi sang đen
    button.style.display = 'none';
    document.body.style.backgroundColor = '#d63384';

    setTimeout(() => {
        document.body.style.backgroundColor = 'black';

        // Hiển thị các ngôi sao sau 1 giây
        setTimeout(() => {
            starsContainer.style.display = 'block';
            createStars();
        }, 1000);

        // Hiệu ứng pháo hoa sau 4 giây (kéo dài 8 giây)
        setTimeout(() => {
            fireworksContainer.style.display = 'block';
            createFireworks();
        }, 4000);

        // Trái đất xuất hiện sau khi pháo hoa kết thúc (12 giây), tồn tại trong 5 giây rồi mờ dần
        setTimeout(() => {
            createEarth();
        }, 12000);

        // Hiệu ứng bắn tim diễn ra ở giây thứ 17 (kéo dài 5 giây)
        setTimeout(() => {
            createHearts();
        }, 15000);

        // Trái tim to sẽ xuất hiện ở giây thứ 23 (kéo dài 7 giây)
        setTimeout(() => {
            bigheart.style.display = 'block';
        }, 21000);

        // Hiệu ứng Love Message xuất hiện ở giây thứ 31
        setTimeout(() => {
            showLoveMessage();
        }, 29000);

        // Mèo chạy xuất hiện ở giây thứ 32
        setTimeout(() => {
            showCatGif();
        }, 32000);

    }, 2000);
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;
        starsContainer.appendChild(star);
    }
}

function createFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    const colors = ['#f20044', '#9B37ED', '#FFFFFF'];
    let count = 1000;

    const interval = setInterval(() => {
        if (count > 0) {
            const dot = document.createElement('div');
            const size = Math.random() * 10 + 5;
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;

            dot.style.position = 'absolute';
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            dot.style.borderRadius = '50%';
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
            dot.classList.add('sparkle');
            fireworksContainer.appendChild(dot);

            setTimeout(() => {
                dot.remove();
            }, 1000);

            count--;
        } else {
            clearInterval(interval);
        }
    }, 7);

    // Tự động ẩn pháo hoa sau 8 giây
    setTimeout(() => {
        fireworksContainer.style.display = 'none';
    }, 8000);
}

function createEarth() {
    const earth = document.getElementById('earth');

    // Đặt sẵn opacity = 0 trước khi hiển thị
    earth.style.opacity = 0;
    earth.style.display = 'block';

    // Thêm hiệu ứng hiện dần bằng transition
    setTimeout(() => {
        earth.style.transition = 'opacity 2s'; // Hiện dần trong 2 giây
        earth.style.opacity = 1;
    }, 10); // Delay nhỏ để đảm bảo transition hoạt động

    // Mờ dần biến mất sau 5 giây
    setTimeout(() => {
        earth.style.opacity = 0;

        // Ẩn hoàn toàn Trái Đất sau khi mờ đi
        setTimeout(() => {
            earth.style.display = 'none';
        }, 2000);
    }, 5000);
}

function createHearts() {
    const heartIcons = ['🐨', '️🎶', '🌎', '🌸', '🍀', '♥️', '🔥']; // Danh sách icon
    let count = 160;

    const interval = setInterval(() => {
        if (count > 0) {
            heartIcons.forEach(icon => { // Lặp qua tất cả icon để tạo chúng cùng lúc
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = icon;

                const x = Math.random() * window.innerWidth; // Vị trí ngẫu nhiên theo chiều ngang

                heart.style.left = `${x}px`;
                heart.style.top = `-30px`;
                document.body.appendChild(heart);

                setTimeout(() => {
                    heart.style.transform = `translateY(${window.innerHeight + 30}px)`;
                    heart.style.opacity = 0;
                }, 10);

                setTimeout(() => {
                    heart.remove();
                }, 5100);
            });

            count--;
        } else {
            clearInterval(interval);
        }
    }, 15);
}



function showLoveMessage() {
    const loveMessage = document.getElementById('loveMessage');
    const bigheart = document.getElementById('bigheart');

    // Hiển thị love message
    loveMessage.style.opacity = 1;

    // Di chuyển trái tim lên 150px sau khi love message xuất hiện
    bigheart.style.transition = 'top 5s ease';
    bigheart.style.top = `${parseInt(window.getComputedStyle(bigheart).top, 10) - 150}px`;

    // Chèn ảnh We.png bên trái
    let weImageLeft = document.createElement('img');
    weImageLeft.src = 'We.png';
    weImageLeft.className = 'weImage'; // Gán class chung
    weImageLeft.style.left = `${loveMessage.offsetLeft - 220}px`; // Cách loveMessage một khoảng

    // Chèn ảnh We.png bên phải
    let weImageRight = document.createElement('img');
    weImageRight.src = 'We.png';
    weImageRight.className = 'weImage';
    weImageRight.style.left = `${loveMessage.offsetLeft + loveMessage.offsetWidth + 20}px`; // Cách loveMessage một khoảng

    // Cài đặt chung cho cả hai ảnh
    [weImageLeft, weImageRight].forEach(img => {
        img.style.position = 'absolute';
        img.style.width = '200px';
        img.style.height = 'auto';
        img.style.top = `${loveMessage.offsetTop - 80}px`; // Đẩy ảnh lên 50px
        img.style.opacity = 0;
        img.style.transition = 'opacity 4s';
        document.body.appendChild(img);
    });

    // Hiển thị ảnh từ từ
    setTimeout(() => {
        weImageLeft.style.opacity = 1;
        weImageRight.style.opacity = 1;
    }, 7000); // Trì hoãn 7 giây (10000ms)
    
}


