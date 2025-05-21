function filterByColor(color) {
    const products = document.querySelectorAll('.product'); // حدد جميع المنتجات
    products.forEach(product => {
        if (color === 'all' || product.dataset.color === color) {
            product.style.display = 'block'; // عرض المنتج إذا كان اللون متطابقاً
        } else {
            product.style.display = 'none'; // إخفاء المنتج إذا لم يكن اللون متطابقاً
        }
    });
}
