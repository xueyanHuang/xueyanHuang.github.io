document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('christmas-tree-container');

    // 创建雪花和星星
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = (Math.random() * 5 + 2) + 's';
        container.appendChild(snowflake);
        setTimeout(() => {
            snowflake.remove(); // 移除雪花元素，避免内存泄漏
        }, 6000); // 6秒后移除雪花
    }

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.top = Math.random() * window.innerHeight + 'px';
        container.appendChild(star);
    }

    // 创建雪花和星星的定时器
    setInterval(createSnowflake, 500); // 创建雪花的频率
    setInterval(createStar, 1000); // 创建星星的频率
});

// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const messagesContainer = document.getElementById('messages');

    sendButton.addEventListener('click', () => {
        const messageText = messageInput.value;
        if (messageText.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.textContent = messageText;
            messageElement.style.color = getRandomColor();
            messagesContainer.appendChild(messageElement);
            messageInput.value = '';
            animateMessage(messageElement);
        }
    });

    function animateMessage(messageElement) {
        const animationDuration = 80; // 滚动动画持续时间（秒）
        const messageWidth = messageElement.offsetWidth + window.innerWidth; // 增大滚动距离
        messageElement.style.transition = `transform ${animationDuration}s linear`;

        // 触发动画
        setTimeout(() => {
            messageElement.style.transform = `translateX(-${messageWidth}px)`;
        }, 0);

        // 监听动画结束事件
        messageElement.addEventListener('transitionend', () => {
            // 移除消息元素，以防止页面变得过于拥挤
            messageElement.remove();
        });

        // 在下一帧中触发动画
        requestAnimationFrame(() => {
            messageElement.style.transform = `translateX(-${messageWidth}px)`;
        });
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});