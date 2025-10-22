// Konfigurasi WhatsApp - Ganti nomor ini dengan nomor bisnis Anda
const WHATSAPP_NUMBER = "6289531741090"; // Ganti dengan nomor WhatsApp bisnis Anda

// Data games
const games = [
    {
        title: "Mobile Legends",
        description: "Rank boost dari Warrior sampai Mythical Glory",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop",
        tags: ["MOBA", "Popular"],
        startingPrice: "15K"
    },
    {
        title: "PUBG Mobile",
        description: "Push rank Classic dan Arena mode",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop",
        tags: ["Battle Royale", "Trending"],
        startingPrice: "20K"
    },
    {
        title: "Free Fire",
        description: "Rank Heroic hingga Grandmaster",
        image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=300&h=200&fit=crop",
        tags: ["Battle Royale"],
        startingPrice: "12K"
    },
    {
        title: "Call of Duty Mobile",
        description: "Multiplayer dan Battle Royale rank",
        image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=300&h=200&fit=crop",
        tags: ["FPS", "Action"],
        startingPrice: "18K"
    },
    {
        title: "Genshin Impact",
        description: "Abyss clear, quest completion, farming",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
        tags: ["RPG", "Adventure"],
        startingPrice: "25K"
    },
    {
        title: "Valorant",
        description: "Competitive rank boost Iron to Radiant",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop",
        tags: ["FPS", "Tactical"],
        startingPrice: "30K"
    }
];

// Data paket harga
const packages = [
    {
        name: "Basic",
        price: "50K",
        duration: "1-3 hari",
        description: "Paket hemat untuk naik 1-2 tier",
        features: [
            "1-2 tier rank up",
            "Account safety guarantee",
            "24/7 progress update",
            "Basic support"
        ],
        popular: false
    },
    {
        name: "Premium",
        price: "120K",
        duration: "3-7 hari", 
        description: "Paket terpopuler untuk rank signifikan",
        features: [
            "3-5 tier rank up",
            "Account safety guarantee",
            "Real-time progress tracking",
            "Priority support",
            "Free coaching session"
        ],
        popular: true
    },
    {
        name: "Pro",
        price: "250K",
        duration: "7-14 hari",
        description: "Paket ultimate untuk target tinggi",
        features: [
            "5+ tier rank up",
            "Account safety guarantee", 
            "Dedicated pro player",
            "24/7 VIP support",
            "Free coaching sessions",
            "Achievement boost"
        ],
        popular: false
    }
];

// Data testimoni
const testimonials = [
    {
        name: "Ahmad S.",
        game: "Mobile Legends",
        rating: 5,
        review: "Pelayanan sangat memuaskan! Dari Epic ke Legend cuma 2 hari. Pro playernya skill nya gila banget!",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
        name: "Sari M.",
        game: "PUBG Mobile",
        rating: 5,
        review: "Udah langganan di sini 3 bulan. Selalu puas dengan hasilnya. Rank Crown ke Ace gak pernah gagal.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    {
        name: "Rio P.",
        game: "Free Fire",
        rating: 5,
        review: "Fast response, hasil memuaskan. Dari Gold ke Diamond cuma butuh 1 hari. Recommended banget!",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face"
    },
    {
        name: "Maya K.", 
        game: "Valorant",
        rating: 5,
        review: "Pro player nya bener-bener pro! Iron ke Gold dalam seminggu. Komunikasi juga bagus banget.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    },
    {
        name: "Dedi A.",
        game: "Call of Duty Mobile",
        rating: 5,
        review: "Harga terjangkau, kualitas premium. Akun aman, rank naik sesuai target. Top markotop!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
        name: "Lisa T.",
        game: "Genshin Impact",
        rating: 5,
        review: "Abyss floor 12 akhirnya 36 stars! Team building nya juga dikasih tips. Thank you!",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face"
    }
];

// Data FAQ
const faqs = [
    {
        question: "Apakah akun saya aman?",
        answer: "Ya, keamanan akun adalah prioritas utama kami. Kami menggunakan VPN premium, tidak menggunakan cheat/hack, dan bermain secara manual. Tim kami sudah berpengalaman lebih dari 3 tahun tanpa ada kasus akun banned."
    },
    {
        question: "Berapa lama proses joki selesai?",
        answer: "Waktu pengerjaan bervariasi tergantung game dan target rank. Umumnya 1-14 hari kerja. Kami akan memberikan estimasi waktu yang akurat setelah konsultasi awal."
    },
    {
        question: "Bagaimana cara pembayaran?",
        answer: "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BRI, BNI), e-wallet (Dana, OVO, GoPay), dan pulsa. Pembayaran bisa dilakukan secara bertahap (50% DP, 50% setelah selesai)."
    },
    {
        question: "Apakah ada garansi?",
        answer: "Ya, kami memberikan garansi 100% uang kembali jika target tidak tercapai dalam waktu yang disepakati. Kami juga memberikan garansi rank tidak turun selama 7 hari setelah pengerjaan selesai."
    },
    {
        question: "Bisakah saya memantau progress?",
        answer: "Tentu! Kami akan memberikan update progress harian melalui WhatsApp, termasuk screenshot rank dan statistik. Untuk paket premium, Anda bisa memantau secara real-time."
    },
    {
        question: "Apakah data pribadi saya aman?",
        answer: "Sangat aman. Kami tidak menyimpan data login pelanggan setelah pengerjaan selesai. Semua komunikasi menggunakan enkripsi dan tim kami terikat kontrak kerahasiaan."
    },
    {
        question: "Game apa saja yang dilayani?",
        answer: "Kami melayani Mobile Legends, PUBG Mobile, Free Fire, Call of Duty Mobile, Valorant, Genshin Impact, dan game populer lainnya. Hubungi kami untuk game yang tidak ada di list."
    },
    {
        question: "Apakah bisa cancel di tengah jalan?",
        answer: "Bisa, tetapi ada ketentuan khusus. Jika pembatalan dilakukan sebelum pengerjaan dimulai, refund 100%. Jika sudah dimulai, refund disesuaikan dengan progress yang telah dicapai."
    }
];

// Variabel untuk tracking validasi
let isWhatsAppValid = false;
let isNamaValid = false;

// Fungsi untuk scroll ke section tertentu
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Fungsi untuk buka WhatsApp umum
function orderNow() {
    const message = "Halo! Saya tertarik dengan layanan joki game. Mohon info paket dan harganya. Terima kasih! 🎮";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Fungsi untuk buka WhatsApp langsung
function openWhatsApp() {
    const message = "Halo, saya tertarik dengan layanan joki game. Mohon info lengkapnya.";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Fungsi untuk pesan game tertentu
function orderGame(gameTitle, startingPrice) {
    const message = `🎮 *PEMESANAN JOKI GAME* 🎮

Halo! Saya tertarik dengan layanan joki untuk:
🎯 *Game:* ${gameTitle}
💰 *Harga mulai:* ${startingPrice}

Mohon informasi lebih lanjut mengenai:
- Paket yang tersedia
- Estimasi waktu pengerjaan  
- Proses pemesanan

Terima kasih! 🙏`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Fungsi untuk pesan paket tertentu
function orderPackage(packageData) {
    const featuresText = packageData.features.map(feature => `✅ ${feature}`).join('\n');
    
    const message = `🎮 *PEMESANAN PAKET JOKI GAME* 🎮

Saya tertarik dengan paket:
📦 *Paket:* ${packageData.name}
💰 *Harga:* ${packageData.price}
⏱️ *Estimasi:* ${packageData.duration}

📋 *Fitur yang didapat:*
${featuresText}

Mohon informasi lebih lanjut mengenai:
- Game yang ingin di-joki
- Proses pemesanan
- Metode pembayaran

Terima kasih! 🙏`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Fungsi validasi nama
function validateNama(nama) {
    const hasNumbers = /\d/.test(nama);
    const isLongEnough = nama.trim().length >= 2;
    
    isNamaValid = !hasNumbers && isLongEnough && nama.trim().length > 0;
    return isNamaValid;
}

// Fungsi validasi WhatsApp
function validateWhatsApp(whatsapp) {
    const cleanNumber = whatsapp.replace(/\D/g, '');
    
    if (cleanNumber.length < 12) {
        isWhatsAppValid = false;
        return false;
    }
    
    const isValidFormat = 
        /^08\d{10,11}$/.test(cleanNumber) ||
        /^628\d{9,12}$/.test(cleanNumber);
    
    const isValidLength = cleanNumber.length >= 12 && cleanNumber.length <= 15;
    
    isWhatsAppValid = isValidFormat && isValidLength;
    return isWhatsAppValid;
}

// Fungsi untuk submit form contact
function submitForm() {
    const nama = document.getElementById('nama').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const game = document.getElementById('game').value;
    const rankSekarang = document.getElementById('rank-sekarang').value;
    const targetRank = document.getElementById('target-rank').value;
    const catatan = document.getElementById('catatan').value;

    // Validasi nama
    if (!nama.trim()) {
        alert("Nama lengkap harus diisi!");
        return;
    }
    
    if (/\d/.test(nama)) {
        alert("Nama tidak boleh mengandung angka!");
        return;
    }
    
    if (nama.trim().length < 2) {
        alert("Nama terlalu pendek (minimal 2 karakter)!");
        return;
    }

    // Validasi WhatsApp
    if (!whatsapp.trim()) {
        alert("Nomor WhatsApp harus diisi!");
        return;
    }
    
    const cleanWhatsApp = whatsapp.replace(/\D/g, '');
    if (cleanWhatsApp.length < 12) {
        alert(`Nomor WhatsApp terlalu pendek! Minimal 12 digit (saat ini ${cleanWhatsApp.length} digit)`);
        return;
    }
    
    if (!validateWhatsApp(whatsapp)) {
        alert("Format nomor WhatsApp tidak valid! Gunakan format: 08xxxxxxxxxx atau 628xxxxxxxxxx");
        return;
    }

    // Validasi game
    if (!game) {
        alert("Mohon pilih game terlebih dahulu!");
        return;
    }

    // Format WhatsApp number untuk display
    let formattedWhatsApp = cleanWhatsApp;
    if (cleanWhatsApp.startsWith('08')) {
        formattedWhatsApp = '62' + cleanWhatsApp.slice(1);
    }

    // Format pesan WhatsApp
    const message = `🎮 *PEMESANAN JOKI GAME* 🎮

👤 *Nama:* ${nama}
📱 *WhatsApp:* ${formattedWhatsApp}
🎯 *Game:* ${game}
📊 *Rank Sekarang:* ${rankSekarang || "Belum diisi"}
🚀 *Target Rank:* ${targetRank || "Belum diisi"}
📝 *Catatan:* ${catatan || "Tidak ada"}

---
Mohon berikan informasi lengkap mengenai paket dan harga untuk permintaan di atas. Terima kasih! 🙏`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Fungsi untuk toggle FAQ
function toggleFAQ(index) {
    const content = document.getElementById(`faq-content-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
    }
}

// Fungsi untuk render games
function renderGames() {
    const gamesGrid = document.getElementById('games-grid');
    gamesGrid.innerHTML = '';

    games.forEach((game, index) => {
        const tagsHTML = game.tags.map(tag => 
            `<span class="bg-white/90 text-black text-xs px-2 py-1 rounded">${tag}</span>`
        ).join(' ');

        const gameCard = `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="relative">
                    <img src="${game.image}" alt="${game.title}" class="w-full h-48 object-cover">
                    <div class="absolute top-4 left-4 flex gap-2">
                        ${tagsHTML}
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-xl font-semibold">${game.title}</h3>
                        <span class="text-purple-600 font-semibold">Mulai ${game.startingPrice}</span>
                    </div>
                    <p class="text-gray-600 mb-4">${game.description}</p>
                    <button onclick="orderGame('${game.title}', '${game.startingPrice}')" 
                            class="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors flex items-center justify-center gap-2">
                        <i class="fab fa-whatsapp"></i>
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        `;
        gamesGrid.innerHTML += gameCard;
    });
}

// Fungsi untuk render pricing
function renderPricing() {
    const pricingGrid = document.getElementById('pricing-grid');
    pricingGrid.innerHTML = '';

    packages.forEach((pkg, index) => {
        const featuresHTML = pkg.features.map(feature => 
            `<li class="flex items-center gap-3">
                <i class="fas fa-check text-green-500"></i>
                <span>${feature}</span>
            </li>`
        ).join('');

        const popularBadge = pkg.popular ? 
            `<span class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-3 py-1 rounded text-sm">
                Terpopuler
            </span>` : '';

        const packageCard = `
            <div class="bg-white rounded-lg shadow-lg p-6 relative ${pkg.popular ? 'border-2 border-purple-500' : ''}">
                ${popularBadge}
                
                <div class="text-center mb-6">
                    <h3 class="text-2xl font-semibold mb-2">${pkg.name}</h3>
                    <p class="text-gray-600 mb-4">${pkg.description}</p>
                    <div class="mb-4">
                        <span class="text-4xl font-bold text-purple-600">${pkg.price}</span>
                        <p class="text-gray-600 mt-2">Estimasi: ${pkg.duration}</p>
                    </div>
                </div>
                
                <ul class="space-y-3 mb-6">
                    ${featuresHTML}
                </ul>
                
                <button onclick='orderPackage(${JSON.stringify(pkg)})' 
                        class="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded transition-colors flex items-center justify-center gap-2">
                    <i class="fab fa-whatsapp"></i>
                    Pilih Paket
                </button>
            </div>
        `;
        pricingGrid.innerHTML += packageCard;
    });
}

// Fungsi untuk render testimonials
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonials-grid');
    testimonialsGrid.innerHTML = '';

    testimonials.forEach((testimonial, index) => {
        const starsHTML = Array(testimonial.rating).fill().map(() => 
            '<i class="fas fa-star text-yellow-400"></i>'
        ).join('');

        const testimonialCard = `
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div class="flex items-center gap-4 mb-4">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}" 
                         class="w-12 h-12 rounded-full object-cover">
                    <div>
                        <h4 class="font-semibold">${testimonial.name}</h4>
                        <p class="text-sm text-gray-600">${testimonial.game}</p>
                    </div>
                </div>
                
                <div class="flex gap-1 mb-4">
                    ${starsHTML}
                </div>
                
                <p class="text-gray-700 italic">"${testimonial.review}"</p>
            </div>
        `;
        testimonialsGrid.innerHTML += testimonialCard;
    });
}

// Fungsi untuk render FAQ
function renderFAQ() {
    const faqContainer = document.getElementById('faq-container');
    faqContainer.innerHTML = '';

    faqs.forEach((faq, index) => {
        const faqItem = `
            <div class="bg-white rounded-lg shadow border">
                <div class="p-6 cursor-pointer flex justify-between items-center" onclick="toggleFAQ(${index})">
                    <h3 class="text-left font-medium">${faq.question}</h3>
                    <i id="faq-icon-${index}" class="fas fa-chevron-down transition-transform"></i>
                </div>
                <div id="faq-content-${index}" class="px-6 pb-4 text-gray-600" style="display: none;">
                    ${faq.answer}
                </div>
            </div>
        `;
        faqContainer.innerHTML += faqItem;
    });
}

// Event listeners untuk validasi real-time
document.addEventListener('DOMContentLoaded', function() {
    renderGames();
    renderPricing();
    renderTestimonials();
    renderFAQ();
    
    // Add event listeners untuk validasi real-time
    const namaInput = document.getElementById('nama');
    const whatsappInput = document.getElementById('whatsapp');
    
    if (namaInput) {
        namaInput.addEventListener('input', function(e) {
            // Remove numbers from nama input
            this.value = this.value.replace(/[0-9]/g, '');
            validateNama(this.value);
        });
    }
    
    if (whatsappInput) {
        whatsappInput.addEventListener('input', function(e) {
            // Only allow numbers, spaces, hyphens, and plus
            this.value = this.value.replace(/[^0-9\s\-\+]/g, '');
            validateWhatsApp(this.value);
        });
    }
});