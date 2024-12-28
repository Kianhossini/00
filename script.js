async function sendMessage() {
  const message = document.getElementById('message').value;
  const botToken = '6961831922:AAEtp09j-SX-jg9xRgHlTUVulsK8XXo12k4'; // توکن ربات تلگرامی خود را جایگزین کنید
  const chatId = '5403370300'; // شناسه چت ربات تلگرامی خود را جایگزین کنید

  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  try {
    const response = await fetch(url, { method: 'POST' });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log('پیام با موفقیت ارسال شد.');
  } catch (error) {
    console.error('خطا در ارسال پیام:', error);
  }
}