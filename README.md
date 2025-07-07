# 🧩 Microfrontend Dashboard Uygulaması

Bu proje, **React**, **Webpack Module Federation**, ve **styled-components** kullanılarak oluşturulmuş bir microfrontend tabanlı dashboard uygulamasıdır. Proje, farklı UI modüllerinin (`user-card`, `content-bar`) birbirinden bağımsız olarak geliştirilebilmesini ve shell uygulaması üzerinden dinamik olarak yüklenmesini sağlar.

---

## 🚀 Özellikler

- 🎯 Microfrontend mimarisi (Webpack 5 Module Federation)
- 🔥 Dinamik modül yükleme (`React.lazy` + `Suspense`)
- 🎨 `styled-components` ile temalı ve responsive tasarım
- 🧑‍💼 Kullanıcı kartı bileşeni (`user-card`)
  - İstatistik gösterimi (slider destekli)
  - Modal tabanlı bildirim drawer yapısı
- 📚 İçerik bar bileşeni (`content-bar`)
- 🧱 Ana Shell layout yapısı
  - TopBar (Dashboard Shell başlığı)
  - Grid bazlı responsive içerik yerleşimi
- 📱 Mobil ve tablet uyumlu arayüz

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji         | Açıklama                                 |
|-------------------|-------------------------------------------|
| React             | UI bileşenleri                            |
| Webpack 5         | Microfrontend mimarisi                    |
| Module Federation | Remote bileşen entegrasyonu               |
| Styled-components | CSS-in-JS ile tema uyumlu stiller         |
| JavaScript (ES6+) | Modern JavaScript                         |
| HTML5 / CSS3      | Temel yapı ve stil düzenlemeleri          |

---

## ERİŞİM

Shell: http://localhost:3000

User Card: http://localhost:3001

Content Bar: http://localhost:3002

📬 Hazırlayan: Burak Kılıç
📅 Tarih: 07.07.2025