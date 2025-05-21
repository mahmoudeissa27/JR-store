document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const paypalButton = document.querySelector('button[name="paypal"]');
    const applePayButton = document.querySelector('button[name="apple-pay"]');
  
    // التحقق من أن طريقة دفع تم اختيارها
    let paymentOption = null;
    paypalButton.addEventListener('click', () => {
      paymentOption = 'paypal';
      alert('تم اختيار PayPal كطريقة دفع');
    });
  
    applePayButton.addEventListener('click', () => {
      paymentOption = 'apple-pay';
      alert('تم اختيار Apple Pay كطريقة دفع');
    });
  
    // التحقق عند إرسال النموذج
    form.addEventListener('submit', (event) => {
      // منع الإرسال الافتراضي للنموذج
      event.preventDefault();
  
      // التحقق من اختيار طريقة الدفع
      if (!paymentOption) {
        alert('يرجى اختيار طريقة دفع!');
        return;
      }
  
      // إذا كانت جميع التحقق من المدخلات ناجحة
      alert('تم إرسال النموذج بنجاح! الطريقة المختارة: ' + paymentOption);
      // يمكن إضافة كود للإرسال هنا
    });
  });
  