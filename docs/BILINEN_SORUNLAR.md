# Bilinen Sorunlar ve Hata Kaydı

Bu dosya, kod incelemesinde bulunan hataları ve olası bozuklukları kaydeder.
**Düzeltilenler** hangi sürümde giderildiğiyle birlikte listelenir. **Açık** olanlar yol haritasında takip edilir.

> Yeni bir hata bulursan [GitHub Issues](https://github.com/11R5/cosmos-productivity-hub/issues) üzerinden bildir ve buraya da ekle.

Önem dereceleri:
- 🔴 **Kritik:** veri kaybı veya uygulama kullanılamaz hale gelir.
- 🟠 **Yüksek:** önemli bir özellik bozulur.
- 🟡 **Orta:** yanlış sonuç gösterilir veya can sıkar.
- 🟢 **Düşük:** kozmetik sorun.

---

## ✅ v2.1.1'de düzeltilenler

| # | Önem | Sorun | Neden | Çözüm |
|---|---|---|---|---|
| D1 | 🔴 | **Yeni proje veya kart oluştururken (özellikle 2. denemede) metin kutularına yazı yazılamıyordu, ekran "donuyordu".** | Uyarı ve onaylar için tarayıcının yerleşik `alert()`/`confirm()` pencereleri kullanılıyordu. Electron'un Windows'ta bilinen bir hatası var: bu pencere kapandıktan sonra sayfadaki metin kutuları klavye girişini almıyor. Ad boş bırakılıp **Oluştur**'a basınca çıkan uyarı bu durumu tetikliyordu. | Hiç native pencere kullanılmıyor. Zorunlu alan boşsa kutu kırmızı çerçeveyle işaretleniyor ve küçük bir bildirim çıkıyor. Silme onayları uygulamanın kendi penceresinde soruluyor. |
| D2 | 🟠 | Pencereler açıkken yazarken takılma; genel GPU yükü | Yıldız animasyonu saniyede 60 kez çiziliyordu ve her karede bulanık cam panellerin hepsi yeniden hesaplanıyordu. | Animasyon saniyede 24 kareye indirildi. Pencere açıkken, uygulama arka plandayken veya sistemde "hareketi azalt" açıkken tamamen duruyor. |
| D3 | 🟠 | Pencereler açılınca imleç ilk kutuda olmuyordu; Enter ve Esc çalışmıyordu | — | Pencere açılınca ilk kutu otomatik seçiliyor. Enter kaydediyor, Esc kapatıyor. |
| D4 | 🟠 | İçinde `'` geçen bir kategori silinemiyordu (ör. *Ev'de Spor*). `<` veya `"` içeren isimler arayüzü bozuyordu. | Kullanıcı metni `innerHTML` içine kaçışsız (escape edilmeden) yazılıyordu. | Tüm kullanıcı metinleri `esc()` ile kaçışlanıyor. Butonlar artık isim yerine sıra numarasıyla çalışıyor. |
| D5 | 🔴 | Eksik bir yedek yüklenince (ör. içinde proje olmayan) uygulama yarım çiziliyordu. **Yeni Görev Kartı Ekle** hiçbir şey yapmıyordu. | Yedek dosyasının yalnızca `habits` alanı kontrol ediliyordu. | `normalizeState()` her açılışta ve her yedek yüklemede eksik veya bozuk alanları onarıyor. |
| D6 | 🟡 | Aynı yedek dosyası ikinci kez seçilince hiçbir şey olmuyordu | Dosya seçici sıfırlanmıyordu. | Seçici her seferinde sıfırlanıyor. Yükleme öncesinde "mevcut veriler değişecek" onayı soruluyor. |
| D7 | 🟠 | Kart, onay sorulmadan siliniyordu | — | Silmeden önce onay soruluyor. |
| D8 | 🟡 | Silinen kategorideki alışkanlıklar sahipsiz kalıyordu. Böyle bir alışkanlık düzenlenince kategorisi sessizce değişiyordu. | — | Kategori silinirken bu alışkanlıklar kalan ilk kategoriye taşınıyor ve bu konuda uyarı veriliyor. Düzenleme penceresi listede olmayan kategoriyi de koruyor. |
| D9 | 🟡 | Haftalık hedefte plan dışı günler de sayılıyordu (ör. `4/3`) | — | Hedefe yalnızca planlanan günler sayılıyor. |
| D10 | 🟡 | Haftalık başarı, haftalık grafik ve aylık raporlarda **henüz gelmemiş günler** başarısız sayılıyordu. Ay ortasında oranlar düşük, eğri de %0'a çakılmış görünüyordu. | — | Gelecek günler oranlara katılmıyor. Grafikte bu günler boşluk olarak gösteriliyor. |
| D11 | 🟡 | Geçersiz kart rengi (ör. `mavi`) kaydedilebiliyordu | — | Renk kodu `#RRGGBB` biçiminde değilse kaydedilmiyor ve uyarı gösteriliyor. |
| D12 | 🔴 | Uygulama iki kez açılırsa iki pencere birbirinin verisinin üzerine yazabiliyordu | — | Aynı anda tek pencere açılabiliyor. İkinci açılışta mevcut pencere öne geliyor. |
| D13 | 🟠 | Pencereye bir dosya sürüklenince uygulama o dosyaya geçiyordu ve ekran boş kalıyordu | — | Sayfa dışına geçiş ve yeni pencere açma engellendi. Sandbox ve CSP güvenlik ayarları eklendi. |
| D14 | 🟢 | Kartı sürüklerken sütun vurgusu yanıp sönüyordu | Kartın üzerinden geçerken de `dragleave` olayı tetikleniyordu. | Bu durum yok sayılıyor. |
| D15 | 🟢 | Aynı kategori farklı büyük/küçük harfle iki kez eklenebiliyordu | — | Engellendi. |
| D16 | 🟠 | Kayıt başarısız olursa (ör. disk dolu) hiçbir uyarı çıkmıyordu | — | Kayıt başarısız olunca kullanıcıya bildirim gösteriliyor. |

Bu düzeltmelerin hepsi otomatik testle doğrulanıyor: `npm test` (34 kontrol, [`scripts/smoke-test.js`](../scripts/smoke-test.js)).

---

## 🔓 Açık sorunlar

| # | Önem | Sorun | Not / Plan |
|---|---|---|---|
| A1 | 🟠 | **Electron 30 artık güvenlik güncellemesi almıyor.** | Desteklenen bir Electron sürümüne geçilecek. Planlanan sürüm v2.2; bkz. [Proje Planı](PROJE_PLANI.md). |
| A2 | 🟠 | Dosyalar dijital olarak imzalı değil. Bu yüzden Windows SmartScreen ve macOS Gatekeeper uyarı veriyor. Apple Silicon'da *"hasarlı"* uyarısı çıkabiliyor. | Kod imzalama sertifikası alınması gerekiyor. Şimdilik geçici çözüm README'de anlatılıyor. |
| A3 | 🟡 | Alışkanlık **oluşturulmadan önceki** günler raporlarda "kaçırılmış" sayılıyor. | Alışkanlıklara `createdAt` alanı eklenecek; rapor hesapları o tarihten başlayacak. |
| A4 | 🟡 | Tüm veri tek bir `localStorage` anahtarında duruyor; otomatik yedek yok. | Dosya tabanlı kayıt ve günlük otomatik yedek planlanıyor (v2.3). |
| A5 | 🟡 | Seri (streak) hesabı en fazla 365 gün geriye bakıyor. | Gerekirse sınır kaldırılacak. |
| A6 | 🟡 | Her tıklamada tüm arayüz ve grafikler yeniden çiziliyor. Büyük veride yavaşlama olabilir. | Yalnızca değişen bölümü güncelleyen bir yapıya geçilecek. |
| A7 | 🟢 | Uygulama açıkken gece yarısı geçerse "bugün" vurgusu ancak bir sonraki tıklamada güncelleniyor. | Gün değişince otomatik yenileme eklenecek. |
| A8 | 🟢 | Butonlar inline `onclick` ile bağlı. Bu yüzden CSP'de `'unsafe-inline'` gerekiyor. | Olay dinleyicilerine (`addEventListener`) geçilecek. |
| A9 | 🟢 | `npm audit` derleme araçlarında (electron-builder 24) açıklar gösteriyor. Bunlar kullanıcıya giden uygulamaya dahil değil. | electron-builder güncellenecek. |
| A10 | 🟢 | Arayüz yalnızca Türkçe. | i18n (İngilizce) planlanıyor. |
| A11 | 🟢 | Kanban kartları yalnızca fareyle sürüklenebiliyor; pencerelerde ekran okuyucu desteği eksik. | Erişilebilirlik iyileştirmesi planlanıyor. |
| A12 | 🟢 | Hafta her zaman Pazartesi başlıyor. | Ayarlardan seçilebilir hale getirilecek. |
