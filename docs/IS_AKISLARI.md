# Cosmos — İş Akışları

Bu belge, kullanıcı akışlarını ve projeyi geliştirme, test ve yayınlama süreçlerini anlatır.

> İlgili belgeler: [Proje Planı](PROJE_PLANI.md) · [Teknik Doküman](TEKNIK_DOKUMAN.md) · [Bilinen Sorunlar](BILINEN_SORUNLAR.md)

---

## A. Kullanıcı akışları

### A1. İlk kurulum ve açılış

```mermaid
flowchart TD
  A[Releases sayfasından dosyayı indir] --> B{İşletim sistemi}
  B -->|Windows| C[setup.exe ile kur veya portable.exe'yi çalıştır]
  B -->|macOS| D[.dmg'yi aç, Uygulamalar'a sürükle, sağ tık > Aç]
  B -->|Linux| E[.deb kur veya AppImage'ı chmod +x ile çalıştır]
  C & D & E --> F[Cosmos açılır]
  F --> G{Kayıtlı veri var mı?}
  G -->|Evet| H[Veriler yüklenir ve onarılır]
  G -->|v1 verisi var| I[v2 biçimine dönüştürülür]
  G -->|Hayır| J[Örnek alışkanlık ve projelerle başlar]
```

### A2. Günlük alışkanlık takibi

```mermaid
flowchart LR
  A[Alışkanlık Üssü] --> B[Bugünün kutusuna tıkla]
  B --> C[Kayıt + seri güncellenir]
  A --> D["‹ / › ile geçmiş haftaya git"]
  D --> E[Unutulan günü işaretle]
  A --> F[Yeni Rutin / Hedef Ekle]
  F --> G[Ad, kategori, günler, renk] --> H{Ad boş mu?}
  H -->|Evet| I[Kutu kırmızı çerçevelenir, yazmaya devam edilir]
  H -->|Hayır| J[Kaydedilir, tablo yenilenir]
```

### A3. Proje ve görev yönetimi (Kanban)

```mermaid
flowchart LR
  P[Yeni Proje Ekle] --> Q[Ad + renk → Enter]
  Q --> K[Yeni Görev Kartı Ekle]
  K --> L[Başlık, açıklama, etiket, alt görevler → Kaydet]
  L --> T[TODO]
  T -->|sürükle veya SÜRÜYOR| IP[IN PROGRESS]
  IP -->|sürükle veya BİTTİ ✓| DN[DONE]
  DN --> R[Raporlar: Kanban grafiği]
```

Kartı silmek: kartın düzenle ikonu → **Kartı Sil** → onay.

### A4. Yedekleme ve taşıma

```mermaid
sequenceDiagram
  actor U as Kullanıcı
  participant A as Eski bilgisayar
  participant B as Yeni bilgisayar
  U->>A: Yedek İndir
  A-->>U: cosmos_yedek_YYYY-MM-DD.json
  U->>B: Cosmos'u kur, Yedek Yükle
  B->>U: "Mevcut veriler değişecek" onayı
  U->>B: Yedeği Yükle
  B->>B: normalizeState() + kaydet
  B-->>U: "Yedek başarıyla yüklendi"
```

---

## B. Geliştirme akışı

### B1. Ortamı hazırlama

```bash
git clone https://github.com/11R5/cosmos-productivity-hub.git
cd cosmos-productivity-hub
npm install
npm start
```

### B2. Bir değişiklik yapma

```mermaid
flowchart TD
  A[Issue aç veya seç] --> B[main'den dal aç: feature/... veya fix/...]
  B --> C[src/index.html'de değişikliği yap]
  C --> D{Tailwind sınıfı değişti mi?}
  D -->|Evet| E[npm run build:css]
  D -->|Hayır| F
  E --> F[npm start ile elle dene]
  F --> G[npm test]
  G -->|Hata| C
  G -->|Geçti| H{Arayüz değişti mi?}
  H -->|Evet| I[npm run screenshots + README/kılavuz güncelle]
  H -->|Hayır| J
  I --> J[CHANGELOG.md'ye ekle]
  J --> K[Commit + Pull Request]
  K --> L[CI: test + 3 platform derleme]
  L -->|Yeşil| M[İnceleme ve main'e birleştirme]
```

Commit mesajı kuralı: kısa ve emir kipinde bir başlık (ör. `Fix category delete with apostrophe`), gerekirse altına madde madde açıklama.

### B3. Kontrol listesi (PR öncesi)

- [ ] `npm test` geçiyor
- [ ] `npm start` ile ilgili ekran elle denendi
- [ ] Kullanıcı metni `innerHTML`'e yazılıyorsa `esc()` kullanıldı
- [ ] `alert`, `confirm` veya `prompt` kullanılmadı
- [ ] Şema değiştiyse `normalizeState()` güncellendi ve eski verilerle denendi
- [ ] Gerekiyorsa `src/vendor/tailwind.css` yeniden derlendi
- [ ] CHANGELOG ve ilgili dokümanlar güncellendi

---

## C. Sürüm yayınlama akışı

```mermaid
flowchart TD
  A[main güncel ve CI yeşil] --> B[package.json version'u artır]
  B --> C[CHANGELOG.md'de yeni sürüm başlığı]
  C --> D[Commit + push]
  D --> E["git tag vX.Y.Z && git push origin vX.Y.Z"]
  E --> F[GitHub Actions]
  F --> G[Windows: test + setup.exe + portable.exe]
  F --> H[macOS: x64 + arm64 .dmg]
  F --> I[Linux: AppImage + .deb]
  G & H & I --> J[GitHub Release otomatik oluşur]
  J --> K[Release notlarını düzenle, indirmeleri kontrol et]
```

Sürüm numarası ([SemVer](https://semver.org/)):
- **Yama (`2.1.1`):** hata düzeltmesi
- **Küçük (`2.2.0`):** geriye uyumlu yeni özellik
- **Büyük (`3.0.0`):** veri biçimini veya kullanımı bozan değişiklik

---

## D. Hata bildirimi ve takip akışı

```mermaid
flowchart LR
  A[Kullanıcı hata bulur] --> B[GitHub Issue: adımlar, beklenen, olan, sürüm, işletim sistemi]
  B --> C[Önem belirlenir 🔴🟠🟡🟢]
  C --> D[docs/BILINEN_SORUNLAR.md'ye eklenir]
  D --> E[Düzeltme dalı + mümkünse test kontrolü]
  E --> F[Sürümle yayınlanır, tabloya 'düzeltildi' yazılır]
```
