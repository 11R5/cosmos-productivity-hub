# 🪐 COSMOS OS // Alışkanlık & Proje Üssü v2.0

**COSMOS OS**, günlük alışkanlıklarınızı (rutinlerinizi), geriye dönük disiplin istatistiklerinizi ve projelerinizi tek bir uzay üssü temasında yönetmenizi sağlayan **açık kaynaklı** bir masaüstü uygulamasıdır.

> **Gizlilik Odaklı:** Verileriniz hiçbir bulut sunucusuna gönderilmez; tamamen bilgisayarınızda yerel olarak (`LocalStorage`) saklanır ve tek tıkla `.json` olarak yedeklenebilir.

---

## ✨ Öne Çıkan Özellikler

* **🌌 Modern Uzay Teması:** Canlı yıldız alanı (`Starfield`) animasyonu, neon cam (`glassmorphism`) arayüz ve 3D perspektifli grafik kartları.
* **📅 Esnek Gün & Rutin Planlama:** Alışkanlıklarınızı haftanın sadece belirli günleri (Örn: Pzt, Çar, Cum veya Hafta İçi) tekrar edecek şekilde ayarlayabilme. Plan dışı günlerde zinciriniz (streak) kırılmaz!
* **🎨 Tam Renk & Kategori Özelleştirmesi:** Dinamik kategori yönetimi ve 16'lık HEX (`#RRGGBB`) renk kodu desteği.
* **📋 Trello Tarzı Proje & Kanban Panosu:**
  * Birden fazla proje oluşturabilme.
  * Sürükle-bırak (`Drag & Drop`) destekli **TODO**, **IN PROGRESS** ve **DONE** sütunları.
  * Kart içine isteğe bağlı **Alt Görev Listesi (Checklist)** ve özel renkli **Etiketler (Tags)** ekleyebilme.
* **📊 Aylık, Yıllık ve Geriye Dönük Raporlar:**
  * Haftalar arası zaman yolculuğu ile geçmiş günleri düzenleyebilme.
  * Aylık disiplin eğrisi, Kategori Dengesi Radar Grafiği ve Proje Dağılım Raporu.
  * Son 52 haftayı (364 gün) gösteren **Yıllık Galaksi Aktivite Isı Haritası (Heatmap)**.

---

## 🚀 Kurulum ve Çalıştırma

### Seçenek 1: Kurulumsuz Hızlı Kullanım
Herhangi bir geliştirici aracına ihtiyaç duymadan doğrudan `AliskanlikTakip.html` dosyasını tarayıcınızda açabilir veya `Baslat_Masaustu_App.bat` dosyasına çift tıklayarak bağımsız masaüstü penceresi modunda çalıştırabilirsiniz.

### Seçenek 2: Electron ile Geliştirme ve `.exe` Derleme
Bilgisayarınızda [Node.js](https://nodejs.org/) yüklü olmalıdır.

```bash
# 1. Repoyu klonlayın
git clone [https://github.com/KULLANICI_ADINIZ/cosmos-os-tracker.git](https://github.com/KULLANICI_ADINIZ/cosmos-os-tracker.git)

# 2. Electron proje klasörüne girin
cd cosmos-os-tracker/electron_project

# 3. Bağımlılıkları yükleyin
npm install

# 4. Uygulamayı başlatın
npm start

# 5. Taşınabilir Windows (.exe) çıktısı alın
npm run build:win