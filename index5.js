document.addEventListener("DOMContentLoaded", () => {
    const books = document.querySelectorAll(".book"); // 获取所有书籍元素

    // 点击书籍显示弹窗
    books.forEach(book => {
        book.addEventListener("click", () => {
            const bookName = book.querySelector("h3").textContent;
            const rating = book.querySelector(".rating").textContent;
            alert(`你点击了：${bookName} - 评分：${rating}`);
        });

        // 鼠标悬停时改变背景颜色
        book.addEventListener("mouseenter", () => {
            book.style.backgroundColor = "#ffe4b5"; // 浅橙色
        });

        // 鼠标离开时恢复背景颜色
        book.addEventListener("mouseleave", () => {
            book.style.backgroundColor = "white";
        });
    });

    // 输出当前日期和时间
    setInterval(() => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // 月份从 0 开始
        const date = now.getDate();
        const day = now.getDay();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        console.clear(); // 清屏防止信息重复
        console.log(`今天是：${year}年 ${month}月 ${date}日 星期${day}`);
        console.log(`时间是：${hours}时 ${minutes}分 ${seconds}秒`);

        // 分针到 20 或 50 时提示活动
        if (minutes === 20 || minutes === 50) {
            console.log("站起来活动一下吧！");
        }
    }, 1000); // 每秒刷新时间

    // 输出点击位置的坐标值
    document.addEventListener("click", event => {
        console.log(`点击位置：x=${event.clientX}, y=${event.clientY}`);
    });

    // 实时输出屏幕和窗口尺寸
    const outputScreenSize = () => {
        const screenWidth = screen.width;
        const screenHeight = screen.height;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        console.log(`屏幕最大值：宽=${screenWidth}, 高=${screenHeight}`);
        console.log(`实时窗口大小：宽=${windowWidth}, 高=${windowHeight}`);
    };

    window.addEventListener("resize", outputScreenSize);
    outputScreenSize(); // 页面加载时输出一次

    // 输出网页最后更新时间
    console.log(`本网页最后更新时间：${document.lastModified}`);
});
