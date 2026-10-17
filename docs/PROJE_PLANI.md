# Cosmos — Proje Planı

> İlgili belgeler: [Teknik Doküman](TEKNIK_DOKUMAN.md) · [İş Akışları](IS_AKISLARI.md) · [Bilinen Sorunlar](BILINEN_SORUNLAR.md) · [Değişiklik Günlüğü](../CHANGELOG.md)

## 1. Vizyon

Cosmos; alışkanlık takibini, proje/görev yönetimini ve kişisel analizleri **tek bir masaüstü uygulamasında** birleştirir. Uygulama hesap gerektirmez ve **tamamen çevrimdışı** çalışır.

Temel ilkeler:
1. **Gizlilik önce gelir.** Veri kullanıcının bilgisayarından çıkmaz; bulut yok, veri toplama yok.
2. **Sade ve hızlı.** Kurulumdan sonra ilk alışkanlığı eklemek bir dakikadan az sürmeli.
3. **Keyifli arayüz.** Uzay teması, motivasyonu artıran bir deneyim sunar.
4. **Açık kaynak.** Apache 2.0 lisanslı; herkes katkı verebilir.

## 2. Hedef kitle

- Günlük rutinlerini (spor, okuma, dil öğrenme vb.) düzenli takip etmek isteyen bireyler
- Kişisel veya küçük projelerini Trello benzeri bir panoda yöneten öğrenciler, serbest çalışanlar ve geliştiriciler
- Verisini buluta vermek istemeyen, gizliliğe önem veren kullanıcılar

## 3. Kapsam

| Kapsamda | Kapsam dışında (şimdilik) |
|---|---|
| Alışkanlık takibi, seriler, gün planı | Çok kullanıcılı ekip çalışması |
| Proje + Kanban (TODO / IN PROGRESS / DONE) | Bulut senkronizasyonu (ileride isteğe bağlı) |
| Aylık/yıllık raporlar, ısı haritası | Mobil uygulama (v3.0 değerlendirmesi) |
| JSON yedekleme ve geri yükleme | Takvim entegrasyonları |
| Windows, macOS, Linux | Web (SaaS) sürümü |

## 4. Sürüm geçmişi

| Sürüm | Tarih | Öne çıkanlar |
|---|---|---|
| v1.0 | 2026 | Haftalık alışkanlık tablosu, temel grafik (yalnızca Windows) |
| v2.0 | 2026 | Uzay teması, Kanban projeleri, aylık/yıllık raporlar, gün planı, HEX renkler |
| v2.1.0 | 2026-10-17 | Windows, macOS ve Linux sürümleri, çevrimdışı çalışma, logo, dokümantasyon, otomatik sürüm yayınlama |
| v2.1.1 | 2026-10-17 | Donma hatası ve 15 başka hata düzeltildi, otomatik test, teknik dokümanlar |

## 5. Yol haritası

### v2.2 — Sağlamlık ve güvenlik
- [ ] Electron'u desteklenen bir sürüme yükseltmek (A1)
- [ ] electron-builder'ı güncellemek ve `npm audit` uyarılarını temizlemek (A9)
- [ ] Alışkanlıklara `createdAt` alanı eklemek; raporlarda oluşturulma öncesini saymamak (A3)
- [ ] Gün değişiminde otomatik yenileme (A7)
- [ ] Inline `onclick` yerine olay dinleyicileri; daha sıkı CSP (A8)
- [ ] Testleri macOS ve Linux CI'da da çalıştırmak

### v2.3 — Veri güvenliği
- [ ] Dosya tabanlı kayıt: `userData/cosmos-data.json`
- [ ] Günlük otomatik yedek; son 7 yedeğin saklanması
- [ ] "Yedek klasörünü aç" ve "otomatik yedekten geri yükle" seçenekleri
- [ ] Veri şeması sürüm numarası (`schemaVersion`) ve geçiş (migration) altyapısı

### v2.4 — Kullanım kolaylığı
- [ ] İngilizce arayüz (i18n altyapısı) (A10)
- [ ] Karta son tarih (due date) ve öncelik ekleme
- [ ] Alışkanlık hatırlatıcıları (masaüstü bildirimi)
- [ ] Arşiv: tamamlanan kartları ve eski alışkanlıkları gizleme
- [ ] Klavye kısayolları ve erişilebilirlik iyileştirmeleri (A11)
- [ ] Haftanın başlangıç gününü seçebilme (A12)

### v3.0 — Büyüme
- [ ] Otomatik güncelleme (electron-updater + GitHub Releases)
- [ ] Windows ve macOS için kod imzalama (A2)
- [ ] Microsoft Store / Mac App Store / Flathub / Snap dağıtımı
- [ ] İsteğe bağlı, uçtan uca şifreli senkronizasyon (değerlendirme)
- [ ] Mobil eşlik uygulaması (değerlendirme)

## 6. Dağıtım planı

| Kanal | Durum | Not |
|---|---|---|
| GitHub Releases | ✅ Aktif | Her `v*` etiketinde otomatik yayınlanır |
| Microsoft Store | Planlandı | MSIX paketi ve geliştirici hesabı gerekiyor |
| Mac App Store / notarization | Planlandı | Apple Developer hesabı gerekiyor |
| Flathub / Snap Store | Planlandı | Linux kullanıcılarına kolay kurulum sağlar |
| Fiziksel dağıtım (USB / kutulu sürüm) | Değerlendirme | Taşınabilir `.exe` ve AppImage kurulumsuz çalıştığı için USB'den dağıtıma uygun. Kutulu sürüm için imzalı paketler, basılı hızlı başlangıç kılavuzu ve lisans/marka kontrolü gerekir. |

## 7. Riskler

| Risk | Etki | Önlem |
|---|---|---|
| Veri kaybı (silinen klasör, bozuk kayıt) | Yüksek | Otomatik yedek (v2.3), yedekleme hatırlatıcısı |
| Eski Electron'daki güvenlik açıkları | Orta | Düzenli yükseltme (v2.2), CSP ve sandbox |
| İmzasız dosyaların kullanıcıyı ürkütmesi | Orta | Kod imzalama (v3.0), README'de açık talimat |
| Tek dosyalık kodun büyümesi | Orta | Kodu modüllere bölmek (v2.4 sonrası) |
| Marka/isim çakışması | Düşük | Fiziksel dağıtımdan önce marka araştırması |

## 8. Başarı ölçütleri

- Tüm platformlarda derleme ve testlerin her sürümde başarıyla geçmesi
- Kritik (🔴) açık hata sayısının 0 olması
- Yeni bir kullanıcının ilk alışkanlığını 1 dakikadan kısa sürede ekleyebilmesi
- GitHub'da yıldız, indirme sayısı ve issue geri bildirimleri
