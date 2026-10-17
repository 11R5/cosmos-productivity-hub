# 🪐 Cosmos — Productivity Hub

**Alışkanlık takibi, Trello tarzı proje panoları ve uzun vadeli analizler: hepsi uzay temalı tek bir masaüstü uygulamasında.**

Cosmos, günlük rutinlerinle projelerini bir araya getirir. Alışkanlıklarını işaretleyebilir, işlerini Kanban panosunda planlayabilir ve aylar öncesine kadar geçmişine bakabilirsin. Hepsi internete ihtiyaç duymadan çalışan tek bir pencerede. Verilerin kendi bilgisayarında kalır.

> 🇬🇧 [English README](README.md)

---

## ✨ Özellikler

### 🔁 Alışkanlık Takibi
- **Haftalık işaretleme tablosu.** Her alışkanlığı her gün için tek tıkla işaretleyebilirsin.
- **Alışkanlığa özel gün planı.** Her alışkanlığın haftanın hangi günleri tekrar edeceğini seçebilirsin (ör. Pzt/Çar/Cum). *Her gün*, *Hafta içi* ve *Hafta sonu* kısayolları da var.
- **Akıllı seri (streak).** Plan dışı günler seriyi bozmaz. Bugünü henüz işaretlemediysen dünkü serin sıfırlanmaz.
- **Zaman yolculuğu.** Geçmiş ve gelecek haftalara gidip düzenleme yapabilirsin. *Bugüne Dön* butonu seni içinde bulunduğun haftaya geri getirir.
- **Seri liderliği** ve 🔥 rozetleri.
- **Özel kategoriler.** İstediğin kadar kategori ekleyip silebilirsin.
- **Sınırsız renk.** Neon paletten veya renk seçiciden seçebilir ya da doğrudan `#RRGGBB` HEX kodu yazabilirsin.
- **3D haftalık grafik.** Sütun ve dalga görünümleri arasında geçiş yapabilirsin.

### 📋 Projeler & Kanban
- **Birden fazla proje.** Her projenin kendi rengi, kart sayısı ve tamamlanma yüzdesi var.
- **Üç sütun: TODO → IN PROGRESS → DONE.** Kartları sürükle-bırak ile veya hızlı taşıma butonlarıyla taşıyabilirsin.
- **Trello tarzı kartlar:**
  - kapak rengi
  - çok renkli etiketler
  - **isteğe bağlı alt görev listesi (checklist)** ve canlı ilerleme çubuğu (ör. `2/3 · %67`)

### 📊 Raporlar & Analiz
- **Aylık disiplin eğrisi.** Seçtiğin ayın gün gün tamamlama oranını gösterir.
- **Kategori dengesi radar grafiği.** Hayatının hangi alanlarına daha çok emek verdiğini gösterir.
- **Aylık alışkanlık karnesi.** Her alışkanlık için planlanan ve tamamlanan gün sayısını gösterir.
- **Kanban raporu.** Tüm projelerdeki TODO / IN PROGRESS / DONE dağılımını gösterir.
- **Yıllık aktivite ısı haritası.** Son 52 haftayı GitHub tarzı bir tabloda gösterir.

### 🔒 Gizlilik & Veri
- **%100 yerel.** Hesap, sunucu veya veri toplama yok.
- **Tek tıkla JSON yedekleme ve geri yükleme.** Verilerini başka bir bilgisayara taşıyabilir veya güvenlik kopyası tutabilirsin.
- **v1 verisi ve v1 yedeklerinden otomatik geçiş.**

### 🌌 Arayüz
- Canlı yıldız alanı animasyonu ve nebula arka planı.
- Neon vurgulu cam (glassmorphism) paneller.
- Üzerine gelince düzleşen 3D perspektifli grafik kartları.

---

## 🛠️ Teknolojiler

| Katman | Teknoloji |
|---|---|
| Masaüstü çatısı | Electron 30 |
| Paketleme | electron-builder 24 |
| Arayüz | HTML5 + Vanilla JavaScript (tek dosya uygulama) |
| Stil | Tailwind CSS (CDN), özel CSS (glassmorphism, 3D perspektif) |
| Grafikler | Chart.js + özel 3D gölge eklentisi |
| İkonlar | Lucide |
| Yazı tipleri | Space Grotesk, Inter |
| Arka plan | HTML5 Canvas yıldız animasyonu |
| Veri | `localStorage` (diskte Chromium LevelDB) |

---

## 🚀 Kurulum

### Kurulumsuz (tarayıcıda)
[`Cosmos_Aliskanlik_Kanban_v2_Windows/AliskanlikTakip.html`](Cosmos_Aliskanlik_Kanban_v2_Windows/AliskanlikTakip.html) dosyasını herhangi bir tarayıcıda açman yeterli.

> Tarayıcıda açtığında veriler o tarayıcıya kaydedilir. Masaüstü uygulamasının verileriyle ortak değildir.

### Masaüstü uygulaması
[Node.js](https://nodejs.org/) 18 veya üzeri gerekir.

```bash
git clone https://github.com/11R5/cosmos-productivity-hub.git
cd cosmos-productivity-hub/Cosmos_Aliskanlik_Kanban_v2_Windows/electron_project
npm install
npm start
```

### Windows için taşınabilir `.exe`

```bash
npm run build:win
```

Oluşan `.exe` dosyasını `electron_project/dist/` klasöründe bulabilirsin.

> **İpucu:** Derleme sırasında `Cannot create symbolic link` hatası alırsan terminali Yönetici olarak aç veya **Geliştirici Modu**'nu aç (Ayarlar → Sistem → Geliştiriciler için).

---

## 💾 Verilerim nerede?

| İşletim sistemi | Konum |
|---|---|
| Windows | `%APPDATA%\aliskanlik-takip-paneli\` |
| macOS | `~/Library/Application Support/aliskanlik-takip-paneli/` |
| Linux | `~/.config/aliskanlik-takip-paneli/` |

Verilerin bilgisayarı yeniden başlatınca, uygulamayı güncelleyince ya da `.exe` dosyasını taşıyıp silince kaybolmaz. Yalnızca bu klasörü silersen veya bilgisayara format atarsan gider. Sağ üstteki **Yedek İndir / Yedek Yükle** butonlarıyla verilerinin taşınabilir bir `.json` kopyasını alabilirsin.

---

## 🗺️ Yol Haritası

- [ ] **macOS (`.dmg`) ve Linux (`AppImage` / `.deb`) sürümleri**
- [ ] Tailwind, Chart.js ve Lucide'ı projeye dahil ederek **tamamen çevrimdışı** çalışma
- [ ] Uygulama ikonu ve marka kimliği
- [ ] GitHub Releases üzerinden indirilebilir kurulum dosyaları
- [ ] İngilizce dil desteği
- [ ] Otomatik güncelleme
- [ ] Dosya tabanlı kalıcı veri ve otomatik yedekleme

Öneri ve isteklerini [issue](https://github.com/11R5/cosmos-productivity-hub/issues) olarak açabilirsin.

---

## 📄 Lisans

[Apache License 2.0](LICENSE)
