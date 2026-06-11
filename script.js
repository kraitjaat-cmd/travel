// script.js

// 1. Full Database of 250 Locations
const locationsData = [
    // WINTER (Dec-Mar)
    { name: "Kedarkantha", days: "5D", diff: "EM" },
    { name: "Brahmatal", days: "6D", diff: "M" },
    { name: "Nag Tibba", days: "2D", diff: "E" },
    { name: "Tungnath", days: "3D", diff: "E" },
    { name: "Deoriatal", days: "2D", diff: "E" },
    { name: "Dayara", days: "4D", diff: "E" },
    { name: "Kuari Pass", days: "6D", diff: "M" },
    { name: "Gorson Bugyal", days: "2D", diff: "E" },
    { name: "Surkanda Devi", days: "1D", diff: "E" },
    { name: "Har Ki Dun", days: "7D", diff: "M" },
    // SUMMER (Apr-June)
    { name: "Gulabi Kantha", days: "5D", diff: "EM" },
    { name: "Surya Top", days: "5D", diff: "M" },
    { name: "Phulara Ridge", days: "6D", diff: "M" },
    { name: "Gidara Bugyal", days: "7D", diff: "M" },
    { name: "Ali Bedni", days: "6D", diff: "M" },
    { name: "Dodital", days: "5D", diff: "E" },
    { name: "Bali Pass", days: "8D", diff: "H" },
    { name: "Buran Ghati", days: "7D", diff: "H" },
    { name: "Rupin Pass", days: "8D", diff: "H" },
    { name: "Borasu Pass", days: "8D", diff: "H" },
    { name: "Sarutal", days: "5D", diff: "M" },
    { name: "Kwani Bugyal", days: "5D", diff: "M" },
    { name: "Fachukandi Pass", days: "7D", diff: "H" },
    { name: "Baraadsar Lake", days: "8D", diff: "H" },
    { name: "Dev Kyara", days: "7D", diff: "M" },
    // MONSOON (July-Sept)
    { name: "Valley of Flowers", days: "6D", diff: "M" },
    { name: "Hemkund Sahib", days: "6D", diff: "M" },
    { name: "Kagbhusandi", days: "8D", diff: "H" },
    { name: "Adi Kailash", days: "10D", diff: "M" },
    { name: "Om Parvat", days: "9D", diff: "M" },
    { name: "Darma Valley", days: "7D", diff: "E" },
    { name: "Jolingkong", days: "8D", diff: "M" },
    { name: "Nandikund", days: "10D", diff: "H" },
    { name: "Rudranath", days: "5D", diff: "M+" },
    { name: "Panwali Kantha", days: "6D", diff: "M" },
    // AUTUMN (Oct-Nov)
    { name: "Gaumukh Tapovan", days: "7D", diff: "M" },
    { name: "Kedartal", days: "7D", diff: "H" },
    { name: "Satopanth Lake", days: "8D", diff: "H" },
    { name: "Pindari Glacier", days: "7D", diff: "M" },
    { name: "Kafni Glacier", days: "8D", diff: "M" },
    { name: "Milam Glacier", days: "10D", diff: "M" },
    { name: "Namik Glacier", days: "10D", diff: "H" },
    { name: "Sunderdhunga", days: "9D", diff: "H" },
    { name: "Maiktoli Base", days: "9D", diff: "H" },
    { name: "Ralam Glacier", days: "10D", diff: "H" },
    { name: "Panchachuli Base", days: "8D", diff: "M" },
    { name: "Khaliya Top", days: "3D", diff: "E" },
    { name: "Auden's Col", days: "12D", diff: "Exp" },
    { name: "Mayali Pass", days: "9D", diff: "H" },
    { name: "Kartik Swami", days: "2D", diff: "E" },
    // TRENDING & OFFBEAT (2-10 Days)
    { name: "Mukta Top", days: "5D", diff: "EM" },
    { name: "Ranthan Kharak", days: "6D", diff: "M" },
    { name: "Bisurital", days: "6D", diff: "H" },
    { name: "Panwali Kantha", days: "6D", diff: "M" },
    { name: "Masar Tal", days: "8D", diff: "H" },
    { name: "Sahastra Tal", days: "9D", diff: "H" },
    { name: "Dhumdhar Kandi", days: "10D", diff: "Exp" },
    { name: "Lamkhaga Pass", days: "9D", diff: "H" },
    { name: "Ruinsara Tal", days: "6D", diff: "M" },
    { name: "Benog Tibba", days: "1D", diff: "E" },
    { name: "George Everest", days: "1D", diff: "E" },
    { name: "Bhadraj Temple", days: "1D", diff: "E" },
    { name: "Deoban", days: "2D", diff: "E" },
    { name: "Budher Caves", days: "1D", diff: "E" },
    { name: "Moila Top", days: "2D", diff: "E" },
    { name: "Tiger Falls", days: "1D", diff: "E" },
    { name: "Kunjapuri", days: "1D", diff: "E" },
    { name: "Neer Garh", days: "1D", diff: "E" },
    { name: "Patna Falls", days: "1D", diff: "E" },
    { name: "Nachiketa Tal", days: "1D", diff: "E" },
    { name: "Harsil 7 Lakes", days: "2D", diff: "M" },
    { name: "Urgam Valley", days: "3D", diff: "E" },
    { name: "Tarkeshwar", days: "2D", diff: "E" },
    { name: "Pangot Birding", days: "2D", diff: "E" },
    { name: "Lariakanta", days: "1D", diff: "E" },
    { name: "Karkotaka Peak", days: "1D", diff: "E" },
    { name: "Damayanti Tal", days: "1D", diff: "E" },
    { name: "Vanasur Fort", days: "1D", diff: "E" },
    { name: "Champawat Walk", days: "3D", diff: "E" },
    { name: "Lohaghat Ridge", days: "1D", diff: "E" },
    { name: "Thal Kedar", days: "2D", diff: "M" },
    { name: "Chipla Kedar", days: "7D", diff: "H" },
    { name: "Martoli Village", days: "7D", diff: "M" },
    { name: "Bagini Glacier", days: "8D", diff: "H" },
    { name: "Changbang Base", days: "9D", diff: "H" },
    { name: "Dunagiri Trail", days: "8D", diff: "H" },
    { name: "Niti Valley Loop", days: "5D", diff: "M" },
    { name: "Vasudhara Falls", days: "1D", diff: "E" },
    { name: "Bansi Narayan", days: "4D", diff: "M" },
    { name: "Chenap Bugyal", days: "5D", diff: "M" },
    { name: "Vishnuprayag", days: "6D", diff: "H" },
    { name: "Senatoli", days: "4D", diff: "M" },
    { name: "Narayan Ashram", days: "2D", diff: "E" },
    { name: "Galgad Trail", days: "3D", diff: "E" },
    { name: "Chiyalekh", days: "2D", diff: "E" },
    { name: "Thamri Kund", days: "1D", diff: "E" },
    { name: "Birthi Falls", days: "1D", diff: "E" },
    { name: "Pariya Top", days: "4D", diff: "E" },
    { name: "Laspa Village", days: "7D", diff: "M" },
    { name: "Siyari Bugyal", days: "6D", diff: "M" },
    // DEEP WILDERNESS (5-10 Days)
    { name: "Dev Kyara (Wilderness)", days: "7D", diff: "M" },
    { name: "Chainsheel Bugyal", days: "6D", diff: "M" },
    { name: "Borasu Pass (Wilderness)", days: "8D", diff: "H" },
    { name: "Sarutal (Wilderness)", days: "5D", diff: "M" },
    { name: "Dodital-Yamunotri", days: "6D", diff: "M" },
    { name: "Dhakuri-Dhur", days: "3D", diff: "E" },
    { name: "Binsar Loop", days: "2D", diff: "E" },
    { name: "Jageshwar Forest", days: "2D", diff: "E" },
    { name: "Mukteshwar Ridge", days: "1D", diff: "E" },
    { name: "Peora-Almora", days: "2D", diff: "E" },
    { name: "Kasar Devi", days: "1D", diff: "E" },
    { name: "Abbott Mount", days: "1D", diff: "E" },
    { name: "Purnagiri", days: "1D", diff: "E" },
    { name: "Haat Kalika", days: "1D", diff: "E" },
    { name: "Gangolihat Caves", days: "2D", diff: "E" },
    { name: "Chaukori", days: "1D", diff: "E" },
    { name: "Berinag", days: "1D", diff: "E" },
    { name: "Maheshwari Kund", days: "1D", diff: "E" },
    { name: "Loharkhet", days: "2D", diff: "E" },
    { name: "Phurkia", days: "1D", diff: "M" },
    { name: "Lohajung-Wan", days: "1D", diff: "E" },
    { name: "Mandani Valley", days: "10D", diff: "Exp" },
    { name: "Pandav Shera", days: "10D", diff: "H" },
    { name: "Nandikund (Wilderness)", days: "10D", diff: "H" },
    { name: "Talla Johar", days: "5D", diff: "M" },
    { name: "Swargarohini Base", days: "7D", diff: "M" },
    { name: "Nilkanth Base", days: "7D", diff: "M" },
    { name: "Chaturangi Glacier", days: "9D", diff: "Exp" },
    { name: "Bhyundar Khal", days: "9D", diff: "H" },
    { name: "Gupt Khal", days: "10D", diff: "Exp" },
    { name: "Patangana-Rudranath", days: "3D", diff: "M" },
    { name: "Mandal-Anusuya", days: "1D", diff: "E" },
    { name: "Ukhimath-Deoriatal", days: "1D", diff: "E" },
    { name: "Sari-Chopta", days: "1D", diff: "E" },
    { name: "Baniyakund-Tungnath", days: "1D", diff: "E" },
    { name: "Ransi-Madmaheshwar", days: "2D", diff: "M" },
    { name: "Helang-Kalpeshwar", days: "1D", diff: "E" },
    { name: "Dumak-Kalpeshwar", days: "2D", diff: "M" },
    { name: "Bansi Narayan-Devgram", days: "3D", diff: "M" },
    { name: "Kwani Bugyal (Wilderness)", days: "4D", diff: "M" },
    { name: "Vridha Badri", days: "1D", diff: "E" },
    { name: "Lata Village", days: "1D", diff: "E" },
    { name: "Suraithota-Tolma", days: "2D", diff: "E" },
    { name: "Tolma-Dharansi", days: "5D", diff: "H" },
    { name: "Khati-Dwali", days: "1D", diff: "E" },
    { name: "Dwali-Kafni", days: "2D", diff: "M" },
    { name: "Munsiyari-Lilam", days: "2D", diff: "E" },
    { name: "Bogudiyar-Rialkot", days: "3D", diff: "M" },
    // THE 2026 EXPEDITION LIST (8-30 Days)
    { name: "Mt. Kamet", days: "Expedition", diff: "Exp" },
    { name: "Nanda Devi East", days: "Expedition", diff: "Exp" },
    { name: "Mt. Shivling", days: "Expedition", diff: "Exp" },
    { name: "Satopanth Peak", days: "Expedition", diff: "Exp" },
    { name: "Chaukhamba", days: "Expedition", diff: "Exp" },
    { name: "Trishul", days: "Expedition", diff: "Exp" },
    { name: "Changabang", days: "Expedition", diff: "Exp" },
    { name: "Neelkanth", days: "Expedition", diff: "Exp" },
    { name: "Bandarpunch", days: "Expedition", diff: "Exp" },
    { name: "Mana Peak", days: "Expedition", diff: "Exp" },
    { name: "Dronagiri", days: "Expedition", diff: "Exp" },
    { name: "Sudarshan Parvat", days: "Expedition", diff: "Exp" },
    { name: "Abi Gamin", days: "Expedition", diff: "Exp" },
    { name: "Mukut Parvat", days: "Expedition", diff: "Exp" },
    { name: "Rishi Pahar", days: "Expedition", diff: "Exp" },
    { name: "Hardeol", days: "Expedition", diff: "Exp" },
    { name: "Tirsuli", days: "Expedition", diff: "Exp" },
    { name: "Mrigthuni", days: "Expedition", diff: "Exp" },
    { name: "Devtoli", days: "Expedition", diff: "Exp" },
    { name: "Maiktoli Peak", days: "Expedition", diff: "Exp" },
    { name: "Tharkot", days: "Expedition", diff: "Exp" },
    { name: "Panwali Dwar", days: "Expedition", diff: "Exp" },
    { name: "Nanda Kot", days: "Expedition", diff: "Exp" },
    { name: "Nanda Khat", days: "Expedition", diff: "Exp" },
    { name: "Changuch", days: "Expedition", diff: "Exp" },
    { name: "Traill's Pass", days: "Expedition", diff: "Exp" },
    { name: "Avalanche Peak", days: "Expedition", diff: "Exp" },
    { name: "Chandra Parvat", days: "Expedition", diff: "Exp" },
    { name: "Indrasan", days: "Expedition", diff: "Exp" },
    { name: "Tent Peak", days: "Expedition", diff: "Exp" },
    { name: "Pyramid Peak", days: "Expedition", diff: "Exp" },
    { name: "Flat Top", days: "Expedition", diff: "Exp" },
    { name: "Cathedral", days: "Expedition", diff: "Exp" },
    { name: "The Fortress", days: "Expedition", diff: "Exp" },
    { name: "Bhagirathi I", days: "Expedition", diff: "Exp" },
    { name: "Bhagirathi II", days: "Expedition", diff: "Exp" },
    { name: "Bhagirathi III", days: "Expedition", diff: "Exp" },
    { name: "Vasuki Peak", days: "Expedition", diff: "Exp" },
    { name: "Manda Peak", days: "Expedition", diff: "Exp" },
    { name: "Bhrigupanth", days: "Expedition", diff: "Exp" },
    { name: "Kalindi Peak", days: "Expedition", diff: "Exp" },
    { name: "Jogin I", days: "Expedition", diff: "Exp" },
    { name: "Jogin II", days: "Expedition", diff: "Exp" },
    { name: "Jogin III", days: "Expedition", diff: "Exp" },
    { name: "Gangotri I", days: "Expedition", diff: "Exp" },
    { name: "Gangotri II", days: "Expedition", diff: "Exp" },
    { name: "Gangotri III", days: "Expedition", diff: "Exp" },
    { name: "Meru Peak", days: "Expedition", diff: "Exp" },
    { name: "Thalay Sagar", days: "Expedition", diff: "Exp" },
    { name: "Kedardome", days: "Expedition", diff: "Exp" },
    { name: "Kedar Peak", days: "Expedition", diff: "Exp" },
    { name: "Bhartekunta", days: "Expedition", diff: "Exp" },
    { name: "Kharchakunda", days: "Expedition", diff: "Exp" },
    { name: "Sumeru Parvat", days: "Expedition", diff: "Exp" },
    { name: "Swachhand", days: "Expedition", diff: "Exp" },
    { name: "Koteshwar", days: "Expedition", diff: "Exp" },
    { name: "Jaonli", days: "Expedition", diff: "Exp" },
    { name: "Draupadi Ka Danda", days: "Expedition", diff: "Exp" },
    { name: "Srikantha", days: "Expedition", diff: "Exp" },
    { name: "Matri", days: "Expedition", diff: "Exp" },
    // VILLAGE & ECO-TRAILS (1-5 Days)
    { name: "Malla Johar", days: "8D", diff: "M" },
    { name: "Laspa-Milam", days: "2D", diff: "M" },
    { name: "Ralam-Tola", days: "4D", diff: "H" },
    { name: "Gori Ganga", days: "3D", diff: "E" },
    { name: "Kali Valley", days: "5D", diff: "M" },
    { name: "Gunji-Kalapani", days: "2D", diff: "M" },
    { name: "Navidhang View", days: "2D", diff: "M" },
    { name: "Kuti-Jolingkong", days: "3D", diff: "M" },
    { name: "Bageshwar-Baijnath", days: "3D", diff: "E" },
    { name: "Katarmal Temple", days: "1D", diff: "E" },
    { name: "Tip-in-Top", days: "1D", diff: "E" },
    { name: "Tarkeshwar-Kotdwar", days: "3D", diff: "E" },
    { name: "Kanvashram", days: "1D", diff: "E" },
    { name: "Deoban Winter", days: "1D", diff: "E" },
    { name: "Mori-Hanol", days: "2D", diff: "E" },
    { name: "Purola-Kedarkantha", days: "4D", diff: "M" },
    { name: "Barkot-Yamunotri", days: "1D", diff: "E" },
    { name: "Govind Loop", days: "5D", diff: "M" },
    { name: "Tehri Lake Rim", days: "2D", diff: "E" },
    { name: "Majua Top", days: "3D", diff: "E" },
    { name: "Pankhu Top", days: "4D", diff: "M" },
    { name: "Dhakuri Pass", days: "5D", diff: "E" },
    { name: "Lohajung-Bedni", days: "4D", diff: "M" },
    { name: "Juda Ka Talab", days: "2D", diff: "E" },
    { name: "Hargaon Trail", days: "2D", diff: "E" },
    { name: "Mandal Village Loop", days: "2D", diff: "E" },
    { name: "Gopeshwar Ridge", days: "1D", diff: "E" },
    { name: "Tehri Rim Trail", days: "3D", diff: "M" },
    { name: "Kanvashram Loop", days: "1D", diff: "E" },
    { name: "Lansdowne View", days: "1D", diff: "E" },
    { name: "Mukteshwar Orchard", days: "1D", diff: "E" },
    { name: "Peora Heritage", days: "2D", diff: "E" },
    { name: "Kasar Devi Loop", days: "1D", diff: "E" },
    { name: "Abbott Mount Walk", days: "1D", diff: "E" },
    { name: "Purnagiri Ridge", days: "1D", diff: "E" },
    { name: "Jageshwar-Binsar", days: "3D", diff: "M" },
    { name: "Munsiyari-Birthi", days: "2D", diff: "M" },
    { name: "Joshimath-Niti", days: "Drive+Walk", diff: "M" },
    { name: "Mana-Vasudhara", days: "1D", diff: "E" },
    { name: "Rishikesh-Kunjapuri Ridge", days: "1D", diff: "E" }
];

// 2. 13 Quiz Questions 
const questions = [
    {
        text: "Select an element to guide your path.",
        options: ["Crimson Embers", "Glacial Wind", "Deep Earth", "Silent Tide"]
    },
    {
        text: "Which time of day calls to you?",
        options: ["The Indigo Hour", "High Noon", "Golden Dusk", "Midnight"]
    },
    {
        text: "Choose a talisman for the journey.",
        options: ["Silver Compass", "Woven Rope", "Iron Lantern", "Stellar Map"]
    },
    {
        text: "What terrain resonates with your soul?",
        options: ["Jagged Peaks", "Dense Ancient Forests", "Endless White Snow", "Hidden Valleys"]
    },
    {
        text: "Choose your celestial guide.",
        options: ["The North Star", "A Meteor Shower", "The Full Moon", "The Milky Way"]
    },
    {
        text: "What sound brings you peace?",
        options: ["A Crackling Fire", "The Howling Wind", "Rushing Glacial Water", "Absolute Silence"]
    },
    {
        text: "Select an ancient artifact.",
        options: ["The Obsidian Dagger", "The Jade Compass", "The Bronze Chalice", "The Crystal Prism"]
    },
    {
        text: "Which weather pattern energizes you?",
        options: ["A Rolling Thunderstorm", "Crisp Morning Frost", "Gentle Sunbeams", "Thick Enveloping Fog"]
    },
    {
        text: "Choose a companion for the trail.",
        options: ["A Solitary Falcon", "A Loyal Hound", "A Silent Guide", "Just My Shadow"]
    },
    {
        text: "What is your ultimate reward?",
        options: ["Conquering the Summit", "Uncovering a Secret", "Finding Inner Peace", "The Journey Itself"]
    },
    {
        text: "Select a color of the Aurora.",
        options: ["Electric Azure", "Midnight Violet", "Emerald Green", "Crimson Red"]
    },
    {
        text: "At the crossroads, which path do you take?",
        options: ["The Steep Ascent", "The Overgrown Trail", "The Winding Riverbank", "The Bridge Above the Clouds"]
    },
    {
        text: "What memory do you wish to forge?",
        options: ["A Story of Survival", "A Moment of Awe", "A Deep Connection", "A Test of Limits"]
    }
];

// Sarcastic Cat Messages
const catMessages = [
    "Oh look, you got a destination. Please don't feed the bears. Or do. I don't care.",
    "Congratulations on clicking a button. The universe is truly in awe of your effort.",
    "Destiny has spoken. And it says you're going to freeze. Have fun.",
    "Magnificent. A high-altitude expedition. I'll stay here on this warm keyboard, thanks.",
    "Wow. Such luck. Much expedition. Try not to get lost.",
    "You survived the 60-second loading screen for this? Impressive patience.",
    "I'd go with you, but I'm scheduled to sleep for the next 18 hours.",
    "Great choice. Just remember, nature doesn't have room service."
];

// 3. DOM Elements
const heroSection = document.getElementById('hero-section');
const quizSection = document.getElementById('quiz-section');
const loadingSection = document.getElementById('loading-section');
const resultSection = document.getElementById('result-section');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const resultLocation = document.getElementById('result-location');
const resultDuration = document.getElementById('result-duration');
const resultDifficulty = document.getElementById('result-difficulty');
const catMessageElement = document.getElementById('cat-message');

let currentQuestionIndex = 0;

// 4. Core Functions
function switchSection(hideElem, showElem) {
    hideElem.classList.remove('active-section');
    hideElem.classList.add('hidden-section');
    
    setTimeout(() => {
        showElem.classList.remove('hidden-section');
        showElem.classList.add('active-section');
    }, 800);
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        calculateResult();
        return;
    }

    const q = questions[currentQuestionIndex];
    questionText.textContent = q.text;
    optionsContainer.innerHTML = '';

    q.options.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'option-card';
        div.textContent = opt;
        div.onclick = () => {
            currentQuestionIndex++;
            optionsContainer.style.opacity = '0';
            setTimeout(() => {
                loadQuestion();
                optionsContainer.style.opacity = '1';
            }, 300);
        };
        optionsContainer.appendChild(div);
    });
}

function calculateResult() {
    switchSection(quizSection, loadingSection);
    
    const loadingTextElement = document.getElementById('loading-text');
    
    const sarcasticPhrases = [
        "Reading your mind...",
        "Connecting to the neural network...",
        "Establishing quantum communication...",
        "Consulting planetary astrology charts...",
        "Rendering million-dollar visual effects...",
        "Asking the penguins...",
        "Bribing the travel gods...",
        "Calculating optimal atmospheric conditions...",
        "Cross-referencing your luck...",
        "Almost there, just packing your virtual bags..."
    ];

    let phraseIndex = 0;
    loadingTextElement.textContent = sarcasticPhrases[phraseIndex];
    
    const textCycleInterval = setInterval(() => {
        loadingTextElement.style.opacity = '0';
        
        setTimeout(() => {
            phraseIndex = (phraseIndex + 1) % sarcasticPhrases.length;
            loadingTextElement.textContent = sarcasticPhrases[phraseIndex];
            loadingTextElement.style.opacity = '1';
        }, 500); 

    }, 5500);

    // The 1-Minute Suspense Timer (60,000 milliseconds)
    setTimeout(() => {
        clearInterval(textCycleInterval);
        
        // Randomize location
        const randomIndex = Math.floor(Math.random() * locationsData.length);
        const finalLocation = locationsData[randomIndex];
        
        // Randomize cat message
        const randomCatMsg = catMessages[Math.floor(Math.random() * catMessages.length)];
        
        // Update DOM
        resultLocation.textContent = finalLocation.name;
        resultDuration.textContent = finalLocation.days;
        resultDifficulty.textContent = finalLocation.diff;
        catMessageElement.textContent = `"${randomCatMsg}"`;
        
        switchSection(loadingSection, resultSection);
    }, 60000); 
}

// 5. Event Listeners
document.getElementById('start-btn').addEventListener('click', () => {
    switchSection(heroSection, quizSection);
    loadQuestion();
});

document.getElementById('restart-btn').addEventListener('click', () => {
    currentQuestionIndex = 0;
    switchSection(resultSection, heroSection);
});